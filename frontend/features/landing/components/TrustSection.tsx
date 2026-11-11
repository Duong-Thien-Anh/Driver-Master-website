import Link from "next/link";

export function TrustSection() {
  return (
    <section className="mx-auto w-[min(1280px,calc(100%-48px))] max-[760px]:w-[min(calc(100%-36px),560px)] pt-[85px] pb-[72px] max-[760px]:py-[60px]" id="cam-nhan">
      <div className="grid grid-cols-[1fr_.75fr] items-center gap-10 rounded-[25px] border border-white bg-white/65 p-10 shadow-[0_20px_60px_#35588e10] backdrop-blur-md max-[760px]:grid-cols-1 max-[760px]:gap-6 max-[760px]:px-5 max-[760px]:py-[25px]">
        <div className="[&_h2]:max-w-[480px] [&_h2]:font-display [&_h2]:text-[37px] [&_h2]:font-bold [&>p]:max-w-[475px] [&>p]:text-[11px] [&>p]:leading-[1.9] [&>p]:text-muted max-[760px]:[&_h2]:text-[31px]">
          <span className="text-xs font-bold tracking-wider text-brand">BẠN KHÔNG ĐI MỘT MÌNH</span>
          <h2>Mỗi học viên là một hành trình đáng nhớ.</h2>
          <p>Đội ngũ SGAT luôn ở bên để bạn học đúng nhịp, luyện đúng kỹ năng và vững tin hơn sau mỗi buổi học.</p>
          <div className="mt-[27px] flex gap-7 [&>div]:grid [&>div]:gap-[5px] [&_strong]:font-display [&_strong]:text-lg [&_strong]:font-bold [&_strong]:text-brand [&_span]:text-[9px] [&_span]:text-[#76839a] max-[760px]:justify-between max-[760px]:gap-[17px]"><div><strong>1:1</strong><span>Hướng dẫn tận tâm</span></div><div><strong>3 bước</strong><span>Lộ trình dễ theo dõi</span></div><div><strong>100%</strong><span>Chủ động lịch học</span></div></div>
        </div>
        <div className="rounded-[18px] border border-white bg-[linear-gradient(145deg,#f4f9ff,#edf5ff)] p-[25px] [&_blockquote]:mt-[17px] [&_blockquote]:mb-[22px] [&_blockquote]:font-display [&_blockquote]:text-[15px] [&_blockquote]:leading-[1.75] [&_blockquote]:font-semibold [&_blockquote]:text-[#25344e]">
          <div className="text-xs tracking-[2px] text-[#f3ad3d]">★★★★★</div>
          <blockquote>“Mình từng rất lo khi mới bắt đầu. Thầy hướng dẫn từ tốn, bài học rõ ràng nên mỗi lần lên xe mình tự tin hơn hẳn.”</blockquote>
          <div className="flex items-center gap-2.5 border-t border-[#dce6f3] pt-[15px] [&>span:nth-child(2)]:grid [&>span:nth-child(2)]:gap-1 [&_strong]:text-[10px] [&_small]:text-[9px] [&_small]:text-[#718098]"><span className="grid size-[34px] place-items-center rounded-full bg-[#dbeaff] font-bold text-brand">L</span><span><strong>Minh Linh</strong><small>Học viên khóa B · 2025</small></span><span className="ml-auto font-display text-[54px] leading-none font-bold text-[#c8d9f5]">“</span></div>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between gap-5 rounded-[20px] border border-white bg-[linear-gradient(110deg,#e0f6fe,#edf3ff)] px-[34px] py-7 [&_h2]:mt-2 [&_h2]:font-display [&_h2]:text-[27px] [&_h2]:font-bold [&_p]:mt-[7px] [&_p]:text-[10px] [&_p]:text-muted max-[760px]:flex-col max-[760px]:items-start max-[760px]:px-5" id="lien-he">
        <div><span className="text-xs font-bold tracking-wider text-brand">BẮT ĐẦU HÔM NAY</span><h2>Sẵn sàng cho hành trình mới?</h2><p>Để SGAT giúp bạn chọn lộ trình phù hợp nhất.</p></div>
        <Link className="inline-flex items-center justify-center gap-3 rounded-[13px] px-5 py-[15px] text-xs font-bold transition-[transform,box-shadow,background] duration-[180ms] hover:-translate-y-0.5 motion-reduce:transition-none bg-brand text-white shadow-[0_9px_24px_#175dfc33] hover:bg-[#084bdc]" href="#khoa-hoc">Chọn lộ trình phù hợp <span>↗</span></Link>
      </div>
    </section>
  );
}
