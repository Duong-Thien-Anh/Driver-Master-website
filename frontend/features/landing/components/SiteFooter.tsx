import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-0 mx-auto w-[min(1180px,calc(100%-40px))] border-t-[2.5px] border-[#14284b] pt-8 pb-6 text-[#14284b] before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#fff8ec] before:content-[''] max-[760px]:w-[calc(100%-32px)] max-[760px]:pt-6 max-[760px]:pb-4">
      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-[13px]">
      <Link href="/" className="grid gap-[3px] font-display text-2xl font-[800] max-[760px]:text-[21px]">Lộ Trình.<small className="font-[800] text-[9px] tracking-[.1em] text-[#4f6285]">VỮNG TAY LÁI · VỮNG HÀNH TRÌNH</small></Link>
      <nav className="flex flex-wrap items-center justify-center gap-2 max-[760px]:col-span-2 max-[760px]:justify-start" aria-label="Liên kết cuối trang"><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/khoa-hoc">Khóa học</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi">Học phí</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi#faq">FAQ</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi#tu-van">Liên hệ</Link></nav>
      <small className="whitespace-nowrap font-[700] text-[11px] text-[#4f6285] max-[760px]:col-span-2">© 2026 Lộ Trình</small>
      </div>

      <div className="@container mt-8 border-t border-[#14284b]/20 pt-8 max-[760px]:mt-6 max-[760px]:pt-6">
        <div className="flex justify-center overflow-hidden">
          <p className="m-0 w-max shrink-0 pr-[.06em] text-center font-display text-[11cqw] leading-none font-bold tracking-[-.06em] whitespace-nowrap">NGOTRUNGVINHTHO</p>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 font-sans text-[10px] font-bold tracking-[.14em] uppercase text-[#4f6285] max-[760px]:mt-4 max-[760px]:text-[9px]">
          <span>Vững tay lái · Vững hành trình</span>
          <a href="#" className="inline-flex items-center gap-2 text-[#14284b] transition-colors hover:text-[#1d5fe0]">
            Về đầu trang <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
