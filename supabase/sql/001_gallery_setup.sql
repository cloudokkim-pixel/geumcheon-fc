create extension if not exists "pgcrypto";

do $$
begin
  if exists (
    select 1
    from pg_tables
    where schemaname = 'public'
      and tablename = 'galleries'
  ) then
    execute 'drop policy if exists "published public galleries are visible" on public.galleries';
    execute 'drop policy if exists "service role can manage galleries" on public.galleries';
    execute 'drop trigger if exists set_galleries_updated_at on public.galleries';
    execute 'drop trigger if exists sync_gallery_visibility_on_write on public.galleries';
  end if;

  if exists (
    select 1
    from pg_tables
    where schemaname = 'public'
      and tablename = 'gallery_images'
  ) then
    execute 'drop policy if exists "published gallery images are visible" on public.gallery_images';
    execute 'drop policy if exists "service role can manage gallery images" on public.gallery_images';
  end if;
end
$$;

drop function if exists public.set_updated_at() cascade;
drop function if exists public.sync_gallery_visibility() cascade;

drop table if exists public.gallery_images cascade;
drop table if exists public.galleries cascade;
drop table if exists public.users cascade;

drop type if exists public.gallery_category cascade;
drop type if exists public.gallery_post_status cascade;
drop type if exists public.user_role cascade;

create type public.gallery_post_status as enum ('draft', 'private', 'published');
create type public.gallery_category as enum ('training', 'match', 'event', 'test', 'award', 'etc');

create table public.galleries (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  description text,
  category public.gallery_category not null,
  thumbnail_image_id uuid,
  status public.gallery_post_status not null default 'draft',
  is_public boolean not null default false,
  is_deleted boolean not null default false,
  published_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.gallery_images (
  id uuid primary key default gen_random_uuid(),
  gallery_id uuid not null references public.galleries (id) on delete cascade,
  image_url text not null,
  sort_order integer not null default 0,
  is_thumbnail boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.galleries
  add constraint galleries_thumbnail_image_id_fkey
  foreign key (thumbnail_image_id) references public.gallery_images (id) on delete set null;

create index galleries_status_is_public_published_at_idx
  on public.galleries (status, is_public, published_at desc);

create index galleries_category_published_at_idx
  on public.galleries (category, published_at desc);

create index galleries_is_deleted_idx
  on public.galleries (is_deleted);

create index gallery_images_gallery_id_sort_order_idx
  on public.gallery_images (gallery_id, sort_order asc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create or replace function public.sync_gallery_visibility()
returns trigger
language plpgsql
as $$
begin
  new.is_public = (new.status = 'published') and (new.is_deleted = false);

  if new.status = 'published' and new.published_at is null then
    new.published_at = timezone('utc', now());
  end if;

  if new.status <> 'published' then
    new.published_at = null;
  end if;

  return new;
end;
$$;

create trigger set_galleries_updated_at
before update on public.galleries
for each row
execute function public.set_updated_at();

create trigger sync_gallery_visibility_on_write
before insert or update on public.galleries
for each row
execute function public.sync_gallery_visibility();

alter table public.galleries enable row level security;
alter table public.gallery_images enable row level security;

grant usage on schema public to anon, authenticated, service_role;
grant select on public.galleries to anon, authenticated, service_role;
grant select on public.gallery_images to anon, authenticated, service_role;
grant all privileges on public.galleries to service_role;
grant all privileges on public.gallery_images to service_role;
grant all privileges on all sequences in schema public to service_role;

create policy "published public galleries are visible"
on public.galleries
for select
using (
  status = 'published'
  and is_public = true
  and is_deleted = false
);

create policy "published gallery images are visible"
on public.gallery_images
for select
using (
  exists (
    select 1
    from public.galleries
    where public.galleries.id = gallery_images.gallery_id
      and public.galleries.status = 'published'
      and public.galleries.is_public = true
      and public.galleries.is_deleted = false
  )
);

create policy "service role can manage galleries"
on public.galleries
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');

create policy "service role can manage gallery images"
on public.gallery_images
for all
using (auth.role() = 'service_role')
with check (auth.role() = 'service_role');
