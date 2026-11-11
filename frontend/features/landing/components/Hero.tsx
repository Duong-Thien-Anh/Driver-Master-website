import Link from "next/link";
import { RoadScene } from "./RoadScene";

const LICENSES = [
  { label: "Hạng B · Ô tô", color: "bg-[#ffc93c]", tilt: "-rotate-[3deg]" },
  { label: "Hạng C · Xe tải", color: "bg-[#ff7a59]", tilt: "rotate-[2deg]" },
  { label: "A1 · Xe máy", color: "bg-[#5ed3a8]", tilt: "-rotate-[1.5deg]" },
];

export function Hero() {
  return (
    <section className="relative z-[1] mx-auto grid min-h-[530px] w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] items-center gap-11 py-7 pb-[72px] max-[899px]:min-h-0 max-[899px]:grid-cols-1 max-[899px]:gap-[34px] max-[899px]:pt-[30px] max-[899px]:pb-[54px] max-[520px]:w-[calc(100%-32px)] max-[520px]:gap-[26px] max-[520px]:pt-[22px] max-[520px]:pb-11" id="top">
      <div>
        <h1 className="mb-5 max-w-[11ch] font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(40px,6.2vw,72px)] leading-none font-extrabold tracking-[-.045em] text-[#14284b] max-[899px]:max-w-[13ch] max-[899px]:text-[clamp(42px,10vw,68px)] max-[520px]:mb-[15px] max-[520px]:text-[clamp(40px,12vw,56px)]">Bật đèn xanh cho hành trình lái xe của bạn</h1>
        <p className="mb-[30px] max-w-[30em] font-['Nunito',var(--font-body),sans-serif] text-base leading-[1.65] font-medium text-[#4f6285] max-[520px]:mb-[22px] max-[520px]:text-sm">
          Học từng bước, vững từng kỹ năng: lý thuyết, sa hình, đường trường.
          Thầy Thọ đi cùng bạn đến ngày nhận bằng.
        </p>

        <div className="mb-[34px] flex flex-wrap gap-[14px] max-[520px]:mb-[27px] max-[520px]:gap-[11px]">
          <Link className="inline-flex min-h-12 items-center justify-center gap-[10px] rounded-[15px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[19px] font-['Nunito',var(--font-body),sans-serif] text-[15px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] max-[520px]:min-h-11 max-[520px]:px-[13px] max-[520px]:text-[13px]" href="/khoa-hoc">Xem khóa học <span className="text-lg" aria-hidden="true">↗</span></Link>
          <Link className="inline-flex min-h-12 items-center justify-center gap-[10px] rounded-[15px] border-[2.5px] border-[#14284b] bg-white px-[19px] font-['Nunito',var(--font-body),sans-serif] text-[15px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] max-[520px]:min-h-11 max-[520px]:px-[13px] max-[520px]:text-[13px]" href="/hoc-phi">Học phí &amp; lịch học</Link>
        </div>

        <div className="flex flex-wrap gap-3 max-[520px]:gap-[9px]" aria-label="Các hạng giấy phép đào tạo">
          {LICENSES.map((license) => (
            <span className={`rounded-full border-[2.5px] border-[#14284b] px-[15px] py-[7px] font-['Nunito',var(--font-body),sans-serif] text-sm font-extrabold text-[#14284b] shadow-[2px_3px_0_#14284b] max-[520px]:px-[11px] max-[520px]:py-[6px] max-[520px]:text-xs ${license.color} ${license.tilt}`} key={license.label}>
              {license.label}
            </span>
          ))}
        </div>
      </div>

      <div className="min-w-0">
        <RoadScene />
        <p className="mt-4 text-center font-['Nunito',var(--font-body),sans-serif] text-[13px] leading-[1.5] font-bold text-[#4f6285] max-[520px]:text-[11px]">Thử bấm vào chiếc xe, nó đang nhìn theo con trỏ của bạn đấy.</p>
      </div>
    </section>
  );
}
