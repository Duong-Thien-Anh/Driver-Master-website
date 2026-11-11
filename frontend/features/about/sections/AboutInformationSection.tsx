import Link from "next/link";

export function AboutInformationSection() {
  return (
    <section className="grid grid-cols-2 gap-5 max-[760px]:grid-cols-1 max-[760px]:gap-[14px]" id="thong-tin" aria-label="Thông tin về trung tâm">
      <article className="rounded-[21px] border-[2.5px] border-[#14284b] bg-[#bdebd0] p-[22px] shadow-[5px_6px_0_#14284b] max-[760px]:p-[17px]">
        <span className="grid size-11 place-items-center rounded-[14px] border-[2.5px] border-[#14284b] bg-[#ffc93c] shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold">01</span>
        <h2 className="my-3 font-['Baloo_2',var(--font-display),sans-serif] text-[22px] leading-[1.1] font-extrabold">Học từ nền tảng</h2>
        <p className="mb-3 font-sans text-[13px] leading-[1.65] font-semibold text-[#344664]">Làm quen với xe, hiểu luật giao thông, rồi rèn luyện từng thao tác trên sân tập trước khi thực hành đường trường. Mỗi bước là cơ hội xây dựng thói quen lái xe an toàn.</p>
        <Link className="inline-flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1d5fe0] hover:underline hover:underline-offset-[3px]" href="/lo-trinh">Xem lộ trình học <span aria-hidden="true">↗</span></Link>
      </article>
      <article className="rounded-[21px] border-[2.5px] border-[#14284b] bg-[#cfe8ff] p-[22px] shadow-[5px_6px_0_#14284b] max-[760px]:p-[17px]">
        <span className="grid size-11 place-items-center rounded-[14px] border-[2.5px] border-[#14284b] bg-[#ffc93c] shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold">02</span>
        <h2 className="my-3 font-['Baloo_2',var(--font-display),sans-serif] text-[22px] leading-[1.1] font-extrabold">Thông tin & chứng nhận</h2>
        <p className="mb-3 font-sans text-[13px] leading-[1.65] font-semibold text-[#344664]">Câu chuyện trung tâm, giấy phép đào tạo, chứng chỉ và hồ sơ giảng viên đang được cập nhật. Các thông tin sẽ được đăng sau khi xác minh.</p>
        <Link className="inline-flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1d5fe0] hover:underline hover:underline-offset-[3px]" href="/hoc-phi">Đội ngũ & cơ sở <span aria-hidden="true">↗</span></Link>
      </article>
    </section>
  );
}
