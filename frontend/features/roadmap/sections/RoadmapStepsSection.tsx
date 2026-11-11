const steps = [
  ["01", "Tư vấn & hồ sơ", "Trao đổi nhu cầu, chọn hạng giấy phép và kiểm tra điều kiện, hồ sơ cần chuẩn bị."],
  ["02", "Học lý thuyết", "Làm quen luật giao thông, biển báo, văn hóa lái xe và các tình huống thường gặp."],
  ["03", "Mô phỏng & sa hình", "Luyện các thao tác, điều khiển xe và bài tập trên sân thực hành."],
  ["04", "Thực hành đường trường", "Rèn khả năng quan sát và xử lý tình huống; theo dõi thời gian, quãng đường DAT với khóa ô tô."],
  ["05", "Sát hạch", "Ôn tập từng phần và hoàn tất thủ tục dự thi theo yêu cầu của hạng giấy phép."],
  ["06", "Nhận giấy phép", "Sau khi đạt sát hạch, theo dõi kết quả và thủ tục nhận giấy phép theo quy định."],
];

export function RoadmapStepsSection() {
  return (
    <div className="grid grid-cols-2 gap-4 max-[760px]:grid-cols-1">
      {steps.map(([number, title, description], index) => <article className={`flex items-start gap-4 rounded-[20px] border-[2.5px] border-[#14284b] bg-[#bdebd0] p-5 shadow-[5px_6px_0_#14284b] max-[680px]:gap-3 max-[680px]:p-4 ${index % 3 === 1 ? "bg-[#cfe8ff]" : index % 3 === 2 ? "bg-[#ffc93c]" : ""}`} key={number}>
          <span className="grid size-11 shrink-0 place-items-center rounded-[14px] border-[2.5px] border-[#14284b] bg-white shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-base font-extrabold">
            {number}
          </span>
          <div className="min-w-0">
            <h2 className="mb-2 font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold">
              {title}
            </h2>
            <p className="m-0 font-sans text-[13px] leading-[1.65] font-semibold text-[#344664]">
              {description}
            </p>
          </div>
        </article>)}
    </div>
  );
}
