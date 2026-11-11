export type Course = {
  code: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  accent: "blue" | "cyan" | "violet";
};

const courses: Course[] = [
  {
    code: "B",
    category: "Ô tô cá nhân",
    title: "Hạng B — Ô tô",
    description: "Từ những thao tác đầu tiên đến tự tin điều khiển ô tô trong giao thông thực tế.",
    features: ["Lý thuyết luật giao thông", "Sa hình & đường trường", "Thực hành theo dõi DAT"],
    accent: "blue",
  },
  {
    code: "C",
    category: "Định hướng nghề nghiệp",
    title: "Hạng C — Xe tải",
    description: "Tìm hiểu lộ trình đào tạo xe tải, kỹ thuật vận hành và an toàn khi chở hàng.",
    features: ["Kỹ thuật vận hành xe tải", "Sa hình & đường trường", "Chuẩn bị cho sát hạch"],
    accent: "violet",
  },
  {
    code: "A1",
    category: "Di chuyển hằng ngày",
    title: "Hạng A1 — Xe máy",
    description: "Nắm vững luật giao thông, giữ thăng bằng và xử lý tình huống trên hai bánh.",
    features: ["Lý thuyết luật giao thông", "Kỹ năng điều khiển xe", "Thực hành sân tập"],
    accent: "cyan",
  },
];

export function getCourses(): Course[] {
  return courses;
}
