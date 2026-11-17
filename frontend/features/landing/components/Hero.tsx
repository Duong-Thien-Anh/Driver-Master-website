import Link from "next/link";
import { RoadScene } from "./RoadScene";
import { trainingLocation } from "@/features/courses/data/course-catalog";

const LICENSES = [
  { label: "Hạng B · Ô tô", color: "bg-[#ffc93c]", tilt: "-rotate-3" },
  { label: "Hạng C1 · Xe tải", color: "bg-[#ff7a59]", tilt: "rotate-2" },
  { label: "A · Mô tô", color: "bg-[#e3d7ff]", tilt: "rotate-2" },
  { label: "A1 · Xe máy", color: "bg-[#5ed3a8]", tilt: "rotate-[-1.5deg]" },
];

export function Hero() {
  return (
    <section className="relative z-1 mx-auto grid min-h-132.5 w-[min(1180px,calc(100%-40px))] grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] items-center gap-11 py-7 pb-18 max-[899px]:min-h-0 max-[899px]:grid-cols-1 max-[899px]:gap-8.5 max-[899px]:pt-7.5 max-[899px]:pb-13.5 max-[520px]:w-[calc(100%-32px)] max-[520px]:gap-6.5 max-[520px]:pt-5.5 max-[520px]:pb-11" id="top">
      <div className="min-w-0">
        <h1 className="mb-5 max-w-[11ch] font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(40px,6.2vw,72px)] leading-none font-extrabold tracking-[-.045em] text-[#14284b] max-[899px]:max-w-[13ch] max-[899px]:text-[clamp(42px,10vw,68px)] max-[520px]:mb-3.75 max-[520px]:text-[clamp(34px,11vw,56px)]">Bật đèn xanh cho hành trình lái xe của bạn</h1>
        <p className="mb-7.5 max-w-[30em] font-['Nunito',var(--font-body),sans-serif] text-base leading-[1.65] font-medium text-[#4f6285] max-[520px]:mb-5.5 max-[520px]:text-sm">
          Đào tạo lái xe ô tô, mô tô hạng A1, A, B và C1 tại {trainingLocation}.
          Thầy Thọ đi cùng bạn đến ngày nhận bằng.
        </p>

        <div className="mb-8.5 flex flex-wrap gap-3.5 max-[520px]:mb-6.75 max-[520px]:gap-2.75 max-[400px]:flex-col max-[400px]:[&>a]:w-full">
          <Link className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[15px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-4.75 font-['Nunito',var(--font-body),sans-serif] text-[15px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] max-[520px]:min-h-11 max-[520px]:px-3.25 max-[520px]:text-[13px]" href="/khoa-hoc">Xem khóa học <span className="text-lg" aria-hidden="true">↗</span></Link>
          <Link className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[15px] border-[2.5px] border-[#14284b] bg-white px-4.75 font-['Nunito',var(--font-body),sans-serif] text-[15px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] max-[520px]:min-h-11 max-[520px]:px-3.25 max-[520px]:text-[13px]" href="/hoc-phi">Học phí &amp; lịch học</Link>
        </div>

        <div className="flex flex-wrap gap-3 max-[520px]:gap-2.25" aria-label="Các hạng giấy phép đào tạo">
          {LICENSES.map((license) => (
            <span className={`rounded-full border-[2.5px] border-[#14284b] px-3.75 py-1.75 font-['Nunito',var(--font-body),sans-serif] text-sm font-extrabold text-[#14284b] shadow-[2px_3px_0_#14284b] max-[520px]:px-2.75 max-[520px]:py-1.5 max-[520px]:text-xs ${license.color} ${license.tilt}`} key={license.label}>
              {license.label}
            </span>
          ))}
        </div>
      </div>

      <div className="min-w-0">
        <RoadScene />
        <p className="mt-4 text-center font-['Nunito',var(--font-body),sans-serif] text-[13px] leading-normal font-bold text-[#4f6285] max-[520px]:text-[11px]">Thử bấm vào chiếc xe, nó đang nhìn theo con trỏ của bạn đấy.</p>
      </div>
    </section>
  );
}
