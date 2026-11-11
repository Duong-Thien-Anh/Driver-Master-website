import type { Metadata } from "next";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "SGAT — Học lái xe an toàn, vững tay từ ngày đầu",
  description:
    "Lộ trình học lái xe bài bản, giáo viên đồng hành và lịch học linh hoạt tại SGAT.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
