import Link from "next/link";

const included = ["Học phí theo hạng giấy phép", "Lịch sa hình & đường trường", "Thời gian và quãng đường DAT"];

const courseRows = [["B", "Hạng B — Ô tô", "Lý thuyết luật giao thông", "bg-[#ffc93c]"], ["C", "Hạng C — Xe tải", "Kỹ thuật vận hành xe tải", "bg-[#ff9f86]"], ["A1", "Hạng A1 — Xe máy", "Lý thuyết luật giao thông", "bg-[#5ed3a8]"]];

export function TuitionOverviewSection() {
  return (
    <section className="grid scroll-mt-6 grid-cols-[minmax(0,.85fr)_minmax(0,1fr)] items-center gap-[42px] pb-[42px] max-[850px]:grid-cols-1 max-[850px]:gap-[22px] max-[620px]:pb-8" id="tu-van">
      <div className="py-[10px]">
        <span className="font-sans text-xs font-extrabold tracking-[.12em] text-[#1d5fe0]">HỌC PHÍ & LỊCH HỌC</span>
        <h2 className="my-[10px] mb-3 font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(36px,4.3vw,50px)] leading-[1.04] font-extrabold tracking-[-.04em] max-[620px]:text-[39px]">Rõ ràng từ đầu<br />đến sát hạch.</h2>
        <p className="m-0 font-sans text-sm leading-[1.7] font-semibold text-[#4f6285]">Chọn lộ trình phù hợp với nhu cầu của bạn. Trao đổi trước về học phí, giờ thực hành và lịch học để chủ động chuẩn bị.</p>
        <ul className="mt-[22px] grid list-none gap-3 p-0">
          {included.map((item) => <li className="flex items-center gap-[10px] font-sans text-[13px] font-extrabold text-[#344664]" key={item}>
              <span className="grid size-[22px] place-items-center rounded-full border-2 border-[#14284b] bg-[#5ed3a8]" aria-hidden="true">✓</span>
              {item}
            </li>)}
        </ul>
      </div>
      <div className="rounded-[23px] border-[2.5px] border-[#14284b] bg-[#cfe8ff] p-[22px] shadow-[7px_8px_0_#14284b] max-[620px]:p-4">
        <div className="mb-3 flex items-center justify-between gap-3 max-[620px]:flex-col max-[620px]:items-start">
          <strong className="font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold">Nội dung & chi phí từng khóa</strong>
          <span className="whitespace-nowrap rounded-full border-[1.5px] border-[#14284b] bg-[#5ed3a8] px-2 py-[5px] font-sans text-[10px] font-extrabold">Báo giá theo nhu cầu</span>
        </div>
        {courseRows.map(([code, title, sub, accent]) => <div className="flex items-center gap-[11px] border-t-[1.5px] border-dashed border-[#8296b4] py-3 max-[620px]:gap-2" key={code}>
            <span className={`grid size-10 shrink-0 place-items-center rounded-[13px] border-2 border-[#14284b] shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[15px] font-extrabold ${accent}`}>
              {code}
            </span>
            <span className="grid min-w-0 flex-1 gap-0.5">
              <strong className="font-sans text-sm font-extrabold max-[620px]:text-xs">
                {title}
              </strong>
              <small className="font-sans text-[11px] font-semibold text-[#4f6285] max-[620px]:text-[10px]">
                {sub}
              </small>
            </span>
            <Link className="whitespace-nowrap font-sans text-xs font-extrabold text-[#1d5fe0] max-[620px]:text-[11px]" href="#dang-ky">Liên hệ <span aria-hidden="true">↗</span></Link>
          </div>)}
        <p className="my-[3px] mb-[13px] rounded-xl border-[1.5px] border-dashed border-[#14284b] bg-[#fff8ec] px-3 py-[10px] font-sans text-[11px] leading-[1.55] font-semibold text-[#4f6285]">Mức phí, lịch khai giảng và các khoản phí sát hạch sẽ được xác nhận khi tư vấn.</p>
        <Link className="flex min-h-[45px] items-center justify-between gap-[10px] rounded-[13px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[14px] font-sans text-[13px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b]" href="#dang-ky">Nhận tư vấn học phí <span aria-hidden="true">↗</span></Link>
      </div>
    </section>
  );
}
