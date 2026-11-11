const steps = [
  { number: "01", title: "Tư vấn & chọn khóa", text: "Tìm hiểu nhu cầu, chọn hạng bằng và lịch học phù hợp." },
  { number: "02", title: "Học lý thuyết", text: "Nắm kiến thức giao thông qua những bài học ngắn, dễ nhớ." },
  { number: "03", title: "Luyện tay lái", text: "Thực hành sa hình và đường trường cùng giáo viên hướng dẫn." },
  { number: "04", title: "Tự tin sát hạch", text: "Ôn tập có kế hoạch và sẵn sàng cho kỳ thi của bạn." },
];

export function Roadmap() {
  return (
    <section className="border-y border-white bg-[linear-gradient(124deg,#e3f5fc,#f4f7ff_58%,#e4edff)]" id="lo-trinh">
      <div className="mx-auto w-[min(1280px,calc(100%-48px))] max-[760px]:w-[min(calc(100%-36px),560px)] pt-[78px] pb-[71px] max-[760px]:pt-[58px] max-[760px]:pb-[55px]">
        <div className="flex items-end justify-between gap-6 max-[760px]:block mb-[37px] [&_h2]:font-display [&_h2]:text-[40px] [&_h2]:font-bold [&>p]:max-w-[350px] [&>p]:text-muted [&>p]:leading-relaxed max-[760px]:[&_h2]:text-[34px]">
          <div><span className="text-xs font-bold tracking-wider text-brand">BẮT ĐẦU THẬT DỄ DÀNG</span><h2>Từ buổi học đầu,<br />đến ngày tự tin cầm lái.</h2></div>
          <p>Một lộ trình rõ ràng giúp bạn biết mình đang ở đâu và cần làm gì tiếp theo.</p>
        </div>
        <div className="grid grid-cols-4 gap-5 max-[760px]:grid-cols-2 max-[760px]:gap-x-[17px] max-[760px]:gap-y-[25px]">{steps.map((step, index) => (
          <article className="relative pr-[15px] [&_h3]:mb-2 [&_h3]:font-display [&_h3]:text-sm [&_h3]:font-bold [&_p]:max-w-[230px] [&_p]:text-[10px] [&_p]:leading-[1.8] [&_p]:text-muted" key={step.number}>
            <div className="mb-[18px] flex items-center gap-2.5 [&_span]:grid [&_span]:size-[37px] [&_span]:place-items-center [&_span]:rounded-full [&_span]:border [&_span]:border-[#b7cffd] [&_span]:bg-white/75 [&_span]:text-brand [&_i]:h-px [&_i]:flex-1 [&_i]:bg-[#9dbcf9] max-[760px]:[&_i]:hidden"><span>{step.number}</span>{index < steps.length - 1 && <i />}</div>
            <h3>{step.title}</h3><p>{step.text}</p>
          </article>
        ))}</div>
        <div className="mt-[31px] inline-flex items-center gap-2 rounded-full border border-[#d6e5f5] bg-white/60 px-[13px] py-2.5 text-[9px] text-[#5c6a82] [&_span]:text-brand"><span>✦</span> Giáo viên đồng hành trong suốt quá trình học</div>
      </div>
    </section>
  );
}
