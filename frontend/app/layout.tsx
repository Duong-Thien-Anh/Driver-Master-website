import type { Metadata } from "next";
import "@/shared/styles/globals.css";

export const metadata: Metadata = {
  title: "THỌ NGÔ ĐÀO TẠO LÁI XE",
  description:
    "Lộ trình học lái xe bài bản, giáo viên đồng hành và lịch học linh hoạt tại SGAT.",
  icons: {
    icon: { url: "/logo.png", type: "image/png" },
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi" className="scroll-smooth motion-reduce:scroll-auto [&::view-transition-old(.page-exit)]:animate-page-exit [&::view-transition-new(.page-enter)]:animate-page-enter motion-reduce:[&::view-transition-old(.page-exit)]:animate-none motion-reduce:[&::view-transition-new(.page-enter)]:animate-none">
      <body className="m-0 bg-paper font-body text-sm text-ink [&_a]:[-webkit-tap-highlight-color:transparent] [&_button]:[-webkit-tap-highlight-color:transparent]">{children}</body>
    </html>
  );
}
