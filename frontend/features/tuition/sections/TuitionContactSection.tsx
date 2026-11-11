import Link from "next/link";

export function TuitionContactSection() {
  return (
    <section className="scroll-mt-6 rounded-[21px] border-[2.5px] border-[#14284b] bg-[#ffc93c] p-[23px] shadow-[5px_6px_0_#14284b] max-[620px]:p-[17px]" id="dang-ky">
      <span className="font-sans text-xs font-extrabold tracking-[.12em] text-[#1d5fe0]">TƯ VẤN HỌC PHÍ</span>
      <h2 className="my-[10px] max-w-[18ch] font-['Baloo_2',var(--font-display),sans-serif] text-[clamp(28px,4vw,38px)] leading-[1.04] font-extrabold tracking-[-.04em]">Nhận thông tin khóa học cụ thể.</h2>
      <p className="mb-4 font-sans text-sm leading-[1.7] font-semibold text-[#344664]">Gửi nhu cầu và khu vực học để trung tâm tư vấn lộ trình, học phí và thời gian phù hợp.</p>
      <Link className="inline-flex min-h-[45px] min-w-[220px] items-center justify-between gap-[10px] rounded-[13px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[14px] font-sans text-[13px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b]" href="/#dang-ky">Gửi thông tin đăng ký <span aria-hidden="true">↗</span></Link>
    </section>
  );
}
