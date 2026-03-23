import { NextRequest, NextResponse } from "next/server";

type ContactBody = {
  inquiryTitle?: string;
  name?: string;
  contact?: string;
  detail?: string;
};

export async function POST(req: NextRequest) {
  let body: ContactBody;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  const { inquiryTitle, name, contact, detail } = body;

  if (!inquiryTitle?.trim() || !name?.trim() || !contact?.trim() || !detail?.trim()) {
    return NextResponse.json({ error: "필수 항목을 모두 입력해 주세요." }, { status: 422 });
  }

  // 이메일 발송 — nodemailer / Resend 연동 시 활성화
  console.log("[contact]", {
    inquiryTitle: inquiryTitle.trim(),
    name: name.trim(),
    contact: contact.trim(),
    detail: detail.trim(),
    submittedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
