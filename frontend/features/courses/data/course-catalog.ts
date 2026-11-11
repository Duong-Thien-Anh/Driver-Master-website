export type Course = {
  code: string;
  title: string;
  category: string;
  vehicle: string;
  tuition: number;
  description: string;
  features: string[];
  accent: "blue" | "cyan" | "violet";
};

export const trainingLocation = "Phường Phước Thắng, Vũng Tàu";

export const courseCatalog: Course[] = [
  {
    code: "A1", title: "Hạng A1 — Xe máy", category: "Di chuyển hằng ngày",
    vehicle: "Mô tô hai bánh đến 125cm³ hoặc xe điện đến 11kW", tuition: 594000,
    description: "Học luật giao thông và kỹ năng điều khiển xe máy, rèn thói quen lái xe an toàn ngay từ đầu.",
    features: ["Lý thuyết luật giao thông", "Kỹ năng điều khiển xe", "Thực hành sân tập"], accent: "cyan",
  },
  {
    code: "A", title: "Hạng A — Mô tô", category: "Mô tô phân khối lớn",
    vehicle: "Mô tô hai bánh trên 125cm³ hoặc xe điện trên 11kW", tuition: 2280000,
    description: "Làm quen với mô tô phân khối lớn, luyện khả năng giữ thăng bằng và kiểm soát xe trên sân tập.",
    features: ["Lý thuyết luật giao thông", "Kỹ thuật kiểm soát mô tô", "Thực hành sân tập"], accent: "violet",
  },
  {
    code: "B-STĐ", title: "Hạng B — Số tự động", category: "Ô tô số tự động",
    vehicle: "Ô tô hạng B sử dụng hộp số tự động", tuition: 18500000,
    description: "Từng bước làm chủ ô tô số tự động, từ thao tác cơ bản đến sa hình và thực hành đường trường.",
    features: ["Lý thuyết & mô phỏng", "Sa hình trên xe số tự động", "Thực hành đường trường & DAT"], accent: "blue",
  },
  {
    code: "B-CK", title: "Hạng B — Số sàn", category: "Ô tô số sàn",
    vehicle: "Ô tô hạng B sử dụng hộp số cơ khí (số sàn)", tuition: 18500000,
    description: "Rèn thao tác côn, số và ga; luyện sa hình và kỹ năng xử lý tình huống khi lái ô tô số sàn.",
    features: ["Lý thuyết & mô phỏng", "Kỹ năng côn, số, ga", "Sa hình, đường trường & DAT"], accent: "blue",
  },
  {
    code: "C1", title: "Hạng C1 — Xe tải", category: "Định hướng nghề nghiệp",
    vehicle: "Xe tải có khối lượng toàn bộ theo thiết kế trên 3,5 đến 7,5 tấn", tuition: 21000000,
    description: "Luyện kỹ thuật vận hành xe tải, quan sát và xử lý tình huống trên sân tập và đường trường.",
    features: ["Lý thuyết & mô phỏng", "Kỹ thuật vận hành xe tải", "Sa hình, đường trường & DAT"], accent: "violet",
  },
];

export function formatTuition(amount: number): string {
  return `${new Intl.NumberFormat("vi-VN").format(amount)}đ`;
}
