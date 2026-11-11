import Link from "next/link";

export function CourseSupportSection() {
  return (
    <div className="mt-[30px] grid grid-cols-2 gap-5 max-[900px]:grid-cols-1 max-[680px]:gap-[17px]">
      <article className="flex min-w-0 items-start gap-4 rounded-[21px] border-[2.5px] border-[#14284b] bg-[#bdebd0] p-[22px] shadow-[5px_6px_0_#14284b] max-[680px]:gap-3 max-[680px]:p-[17px]">
        <span className="grid size-11 shrink-0 place-items-center rounded-[14px] border-[2.5px] border-[#14284b] bg-[#ffc93c] shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold" aria-hidden="true">↻</span>
        <div className="min-w-0">
          <h2 className="mb-[7px] font-['Baloo_2',var(--font-display),sans-serif] text-[22px] leading-[1.1] font-extrabold max-[680px]:text-[19px]">Bổ túc tay lái & ôn tập</h2>
          <p className="mb-3 font-sans text-[13px] leading-[1.65] font-semibold text-[#344664] max-[680px]:text-xs">Luyện lại kỹ năng quan sát, điều khiển xe, đỗ xe và xử lý tình huống cho người đã có giấy phép. Trao đổi thêm về ôn lý thuyết hoặc thực hành trước kỳ thi.</p>
          <Link className="inline-flex items-center gap-2 font-sans text-[13px] font-extrabold text-[#1d5fe0] hover:underline hover:underline-offset-[3px]" href="/hoc-phi#tu-van">Tư vấn theo nhu cầu <span aria-hidden="true">↗</span></Link>
        </div>
      </article>
      <article className="flex min-w-0 items-start gap-4 rounded-[21px] border-[2.5px] border-[#14284b] bg-white p-[22px] shadow-[5px_6px_0_#14284b] max-[680px]:gap-3 max-[680px]:p-[17px]">
        <span className="grid size-11 shrink-0 place-items-center rounded-[14px] border-[2.5px] border-[#14284b] bg-[#ffc93c] shadow-[2px_3px_0_#14284b] font-['Baloo_2',var(--font-display),sans-serif] text-[19px] font-extrabold" aria-hidden="true">✓</span>
        <div className="min-w-0">
          <h2 className="mb-[7px] font-['Baloo_2',var(--font-display),sans-serif] text-[22px] leading-[1.1] font-extrabold max-[680px]:text-[19px]">Chuẩn bị trước khi đăng ký</h2>
          <ul className="mt-2 grid list-disc gap-[6px] pl-[19px] font-sans text-[13px] leading-[1.65] font-semibold text-[#344664] max-[680px]:text-xs">
            <li>Chọn hạng giấy phép và hình thức lái xe mong muốn.</li>
            <li>Xác nhận độ tuổi, điều kiện sức khỏe và hồ sơ theo hạng.</li>
            <li>Trao đổi khu vực và thời gian có thể học.</li>
            <li>Yêu cầu bảng phí, giờ học và các khoản ngoài học phí.</li>
          </ul>
        </div>
      </article>
    </div>
  );
}
