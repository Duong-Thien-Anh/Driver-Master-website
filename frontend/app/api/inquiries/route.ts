import { NextResponse } from "next/server";
import { deliverInquiry, validateInquiry } from "@/server/inquiries/inquiry-service";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Thông tin gửi lên chưa hợp lệ." }, { status: 400 });
  }

  const inquiry = validateInquiry(body);
  if (!inquiry) {
    return NextResponse.json({ message: "Vui lòng kiểm tra lại các thông tin bắt buộc." }, { status: 400 });
  }

  try {
    const delivered = await deliverInquiry(inquiry);
    if (!delivered) {
      return NextResponse.json({ message: "Kênh tiếp nhận đăng ký chưa được cấu hình. Vui lòng liên hệ trung tâm trực tiếp." }, { status: 503 });
    }
    return NextResponse.json({ accepted: true }, { status: 202 });
  } catch {
    return NextResponse.json({ message: "Chưa gửi được thông tin. Vui lòng thử lại sau." }, { status: 502 });
  }
}
