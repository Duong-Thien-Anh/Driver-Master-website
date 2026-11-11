
const steps = [
  ["01", "Tư vấn & hồ sơ", "Trao đổi nhu cầu, chọn hạng giấy phép và kiểm tra điều kiện, hồ sơ cần chuẩn bị."],
  ["02", "Học lý thuyết", "Làm quen luật giao thông, biển báo, văn hóa lái xe và các tình huống thường gặp."],
  ["03", "Mô phỏng & sa hình", "Luyện các thao tác, điều khiển xe và bài tập trên sân thực hành."],
  ["04", "Thực hành đường trường", "Rèn khả năng quan sát và xử lý tình huống; theo dõi thời gian, quãng đường DAT với khóa ô tô."],
  ["05", "Sát hạch", "Ôn tập từng phần và hoàn tất thủ tục dự thi theo yêu cầu của hạng giấy phép."],
  ["06", "Nhận giấy phép", "Sau khi đạt sát hạch, theo dõi kết quả và thủ tục nhận giấy phép theo quy định."],
];

export function RoadmapPage() {
  return <div className="mx-auto w-[min(1180px,calc(100%-40px))] py-[54px] pb-[72px] text-[#14284b] max-[680px]:w-[calc(100%-32px)] max-[680px]:py-10 max-[680px]:pb-[54px]"><header className="mb-[34px] max-w-[790px] max-[680px]:mb-[25px]"><span className="inline-block font-sans text-xs font-extrabold tracking-[.12em] text-[#1d5fe0]">LỘ TRÌNH HỌC</span><h1 className="my-[10px] mb-3 font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(42px,6vw,68px)] leading-[.98] font-extrabold tracking-[-.045em] max-[680px]:text-[clamp(40px,11vw,55px)]">Từng bước, đến tự tin.</h1><p className="m-0 max-w-[650px] font-sans text-base leading-[1.7] font-semibold text-[#4f6285] max-[680px]:text-sm">Hiểu hành trình trước khi bắt đầu. Nội dung và yêu cầu cụ thể được xác nhận theo từng hạng giấy phép.</p></header><div className="grid grid-cols-2 gap-4 max-[680px]:grid-cols-1">{steps.map(([number, title, description], index) => <article className={`flex items-start gap-4 rounded-[20px] border-[2.5px] border-[#14284b] bg-[#bdebd0] p-5 shadow-[5px_6px_0_#14284b] max-[680px]:gap-3 max-[680px]:p-4 ${index % 3 === 1 ? "bg-[#cfe8ff]" : index % 3 === 2 ? "bg-[#ffc93c]" : ""}`} key={number}><span className="grid size-11 shrink-0 place-items-center rounded-[14px] border-[2.5px] border-[#14284b] bg-white shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-base font-extrabold">{number}</span><div><h2 className="mb-2 font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold">{title}</h2><p className="m-0 font-sans text-[13px] leading-[1.65] font-semibold text-[#344664]">{description}</p></div></article>)}</div></div>;
}
