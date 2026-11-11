const steps = [
  { number: "01", title: "Tư vấn & chọn khóa", text: "Tìm hiểu nhu cầu, chọn hạng bằng và lịch học phù hợp." },
  { number: "02", title: "Học lý thuyết", text: "Nắm kiến thức giao thông qua những bài học ngắn, dễ nhớ." },
  { number: "03", title: "Luyện tay lái", text: "Thực hành sa hình và đường trường cùng giáo viên hướng dẫn." },
  { number: "04", title: "Tự tin sát hạch", text: "Ôn tập có kế hoạch và sẵn sàng cho kỳ thi của bạn." },
];

export function Roadmap() {
  return (
    <section className="roadmap-section" id="lo-trinh">
      <div className="section roadmap-inner">
        <div className="section-heading roadmap-heading">
          <div><span className="eyebrow">BẮT ĐẦU THẬT DỄ DÀNG</span><h2>Từ buổi học đầu,<br />đến ngày tự tin cầm lái.</h2></div>
          <p>Một lộ trình rõ ràng giúp bạn biết mình đang ở đâu và cần làm gì tiếp theo.</p>
        </div>
        <div className="roadmap-track">{steps.map((step, index) => (
          <article className="roadmap-step" key={step.number}>
            <div className="step-number"><span>{step.number}</span>{index < steps.length - 1 && <i />}</div>
            <h3>{step.title}</h3><p>{step.text}</p>
          </article>
        ))}</div>
        <div className="roadmap-footnote"><span>✦</span> Giáo viên đồng hành trong suốt quá trình học</div>
      </div>
    </section>
  );
}
