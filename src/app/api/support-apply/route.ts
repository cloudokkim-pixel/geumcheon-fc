import { NextRequest, NextResponse } from "next/server";

type SupportApplyBody = {
  supportType?: string;
  name?: string;
  organization?: string;
  contact?: string;
  email?: string;
  supportMode?: string;
  amount?: string;
  message?: string;
};

export async function POST(req: NextRequest) {
  let body: SupportApplyBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const { name, contact } = body;

  if (!name?.trim() || !contact?.trim()) {
    return NextResponse.json({ error: "이름과 연락처는 필수 항목입니다." }, { status: 422 });
  }

  // 이메일 발송 — nodemailer / Resend 연동 시 활성화
  console.log("[support-apply]", {
    supportType: body.supportType ?? "",
    name: name.trim(),
    organization: body.organization ?? "",
    contact: contact.trim(),
    email: body.email ?? "",
    supportMode: body.supportMode ?? "",
    amount: body.amount ?? "",
    message: body.message ?? "",
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
