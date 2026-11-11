import Link from "next/link";

const points = ["Học phí theo hạng giấy phép", "Lịch sa hình & đường trường", "Thời gian và quãng đường DAT"];
const courses = ["Hạng B — Ô tô", "Hạng C — Xe tải", "Hạng A1 — Xe máy"];

export function TuitionPreview() {
  return (
    <section className="border-y-[2.5px] border-[#14284b] bg-[#cfe8ff] py-16 text-[#14284b] max-[800px]:py-[50px]" id="hoc-phi" aria-labelledby="tuition-heading">
      <div className="mx-auto grid w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,.85fr)_minmax(0,1fr)] items-center gap-12 max-[800px]:grid-cols-1 max-[800px]:gap-7 max-[520px]:w-[calc(100%-32px)]">
        <div>
          <span className="font-sans text-xs font-extrabold tracking-[.12em] text-[#1d5fe0]">HỌC PHÍ & LỊCH HỌC</span>
          <h2 className="my-3 font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(36px,4.5vw,52px)] leading-[1.03] font-extrabold tracking-[-.04em] max-[520px]:text-[clamp(32px,9vw,39px)]" id="tuition-heading">Rõ ràng từ đầu<br />đến sát hạch.</h2>
          <p className="m-0 max-w-[34em] font-sans text-[15px] leading-[1.7] font-semibold text-[#344664]">Chọn lộ trình phù hợp với nhu cầu của bạn. Trao đổi trước về học phí, giờ thực hành và lịch học để chủ động chuẩn bị.</p>
          <ul className="mt-[23px] grid list-none gap-3 p-0">{points.map((point) => <li className="flex items-start gap-[10px] font-sans text-sm font-extrabold text-[#263b5f]" key={point}><span className="grid size-[22px] shrink-0 place-items-center rounded-full border-2 border-[#14284b] bg-[#5ed3a8] text-xs" aria-hidden="true">✓</span>{point}</li>)}</ul>
        </div>
        <div className="rounded-3xl border-[2.5px] border-[#14284b] bg-[#fff8ec] p-[22px] shadow-[7px_8px_0_#14284b] max-[520px]:rounded-[19px] max-[520px]:p-4">
          <div className="mb-[14px] flex items-center justify-between gap-3 max-[520px]:flex-col max-[520px]:items-start"><strong className="font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold">Nội dung & chi phí từng khóa</strong><span className="whitespace-nowrap rounded-full border-[1.5px] border-[#14284b] bg-[#5ed3a8] px-2 py-[5px] font-sans text-[10px] font-extrabold">Báo giá theo nhu cầu</span></div>
          {courses.map((course, index) => <div className="flex items-center gap-3 border-t-[1.5px] border-dashed border-[#a8b7cd] py-3 max-[520px]:gap-[9px]" key={course}><span className={`grid size-10 shrink-0 place-items-center rounded-[13px] border-2 border-[#14284b] shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[15px] font-extrabold ${["bg-[#cfe8ff]", "bg-[#ff9f86]", "bg-[#5ed3a8]"][index]}`}>{["B", "C", "A1"][index]}</span><span className="grid min-w-0 flex-1 gap-0.5"><strong className="font-sans text-sm font-extrabold max-[520px]:text-xs">{course}</strong><small className="font-sans text-[11px] font-semibold text-[#4f6285] max-[520px]:text-[10px]">{["Lý thuyết luật giao thông", "Kỹ thuật vận hành xe tải", "Lý thuyết luật giao thông"][index]}</small></span><Link className="inline-flex min-h-11 shrink-0 items-center whitespace-nowrap font-sans text-xs font-extrabold text-[#1d5fe0] max-[520px]:text-[11px]" href="/hoc-phi#tu-van">Liên hệ <span aria-hidden="true">↗</span></Link></div>)}
          <p className="my-1 mb-[13px] rounded-xl border-[1.5px] border-dashed border-[#14284b] bg-white px-3 py-[10px] font-sans text-[11px] leading-[1.55] font-semibold text-[#4f6285]">Mức phí, lịch khai giảng và các khoản phí sát hạch sẽ được xác nhận khi tư vấn.</p>
          <Link className="flex min-h-[46px] items-center justify-between gap-[10px] rounded-[13px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[15px] font-sans text-sm font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b]" href="/hoc-phi#tu-van">Nhận tư vấn học phí <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
