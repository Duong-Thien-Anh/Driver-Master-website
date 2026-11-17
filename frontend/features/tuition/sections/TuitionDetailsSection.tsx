import Link from "next/link";

const items = ["Học lý thuyết, mô phỏng, sa hình và đường trường.", "Giờ thực hành, quãng đường DAT với khóa ô tô.", "Phí khám sức khỏe, hồ sơ và sát hạch.", "Phí học bổ sung, thi lại hoặc thuê xe nếu có."];

export function TuitionDetailsSection() {
  return (
    <section className="my-3.75 mb-7 grid scroll-mt-6 grid-cols-2 gap-5 max-[620px]:grid-cols-1 max-[620px]:gap-3.5" id="faq">
      <article className="rounded-[21px] border-[2.5px] border-[#14284b] bg-white p-5.5 shadow-[5px_6px_0_#14284b] max-[620px]:p-4.25">
        <h2 className="mb-2.25 font-['Baloo_2',var(--font-display),sans-serif] text-[22px] leading-[1.1] font-extrabold">Những khoản cần xác nhận</h2>
        <ul className="m-0 grid gap-1.75 pl-4.75 font-sans text-[13px] leading-[1.6] font-semibold text-[#344664]">
          {items.map((item) => <li key={item}>
              {item}
            </li>)}
        </ul>
      </article>
      <article className="rounded-[21px] border-[2.5px] border-[#14284b] bg-[#bdebd0] p-5.5 shadow-[5px_6px_0_#14284b] max-[620px]:p-4.25">
        <h2 className="mb-2.25 font-['Baloo_2',var(--font-display),sans-serif] text-[22px] leading-[1.1] font-extrabold">Lịch khai giảng</h2>
        <p className="mb-3 font-sans text-sm leading-[1.7] font-semibold text-[#4f6285]">Chưa có lịch lớp được công bố. Cho biết hạng giấy phép, khu vực và các ngày bạn có thể học để được tư vấn lịch phù hợp.</p>
        <Link className="whitespace-nowrap font-sans text-xs font-extrabold text-[#1d5fe0]" href="#dang-ky">Hỏi lịch lớp sắp tới <span aria-hidden="true">↗</span></Link>
      </article>
    </section>
  );
}
