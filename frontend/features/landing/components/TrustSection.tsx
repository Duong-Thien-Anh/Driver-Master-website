import Link from "next/link";

export function TrustSection() {
  return (
    <section className="section trust-section" id="cam-nhan">
      <div className="trust-panel">
        <div className="trust-copy">
          <span className="eyebrow">BẠN KHÔNG ĐI MỘT MÌNH</span>
          <h2>Mỗi học viên là một hành trình đáng nhớ.</h2>
          <p>Đội ngũ SGAT luôn ở bên để bạn học đúng nhịp, luyện đúng kỹ năng và vững tin hơn sau mỗi buổi học.</p>
          <div className="trust-metrics"><div><strong>1:1</strong><span>Hướng dẫn tận tâm</span></div><div><strong>3 bước</strong><span>Lộ trình dễ theo dõi</span></div><div><strong>100%</strong><span>Chủ động lịch học</span></div></div>
        </div>
        <div className="quote-card">
          <div className="quote-stars">★★★★★</div>
          <blockquote>“Mình từng rất lo khi mới bắt đầu. Thầy hướng dẫn từ tốn, bài học rõ ràng nên mỗi lần lên xe mình tự tin hơn hẳn.”</blockquote>
          <div className="quote-person"><span className="quote-avatar">L</span><span><strong>Minh Linh</strong><small>Học viên khóa B · 2025</small></span><span className="quote-mark">“</span></div>
        </div>
      </div>
      <div className="contact-banner" id="lien-he">
        <div><span className="eyebrow">BẮT ĐẦU HÔM NAY</span><h2>Sẵn sàng cho hành trình mới?</h2><p>Để SGAT giúp bạn chọn lộ trình phù hợp nhất.</p></div>
        <Link className="button button-primary" href="#khoa-hoc">Chọn lộ trình phù hợp <span>↗</span></Link>
      </div>
    </section>
  );
}
