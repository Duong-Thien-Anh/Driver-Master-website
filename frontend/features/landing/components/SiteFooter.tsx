import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-[#fff8ec] text-[#14284b]">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))] border-t-[2.5px] border-[#14284b] pt-6 pb-4 sm:w-[min(1180px,calc(100%-40px))] sm:pt-8 sm:pb-6">
      <div className="grid grid-cols-1 items-center justify-items-center gap-4 text-center sm:grid-cols-2 sm:justify-items-start sm:text-left lg:grid-cols-[auto_1fr_auto]">
      <Link href="/" className="grid gap-[3px] font-display text-2xl font-[800] max-[760px]:text-[21px]">Lộ Trình.<small className="font-[800] text-[9px] tracking-[.1em] text-[#4f6285]">VỮNG TAY LÁI · VỮNG HÀNH TRÌNH</small></Link>
      <nav className="flex flex-wrap items-center justify-center gap-1 sm:col-span-2 sm:row-start-2 sm:justify-start lg:col-span-1 lg:row-auto lg:justify-self-center [&>a]:inline-flex [&>a]:min-h-11 [&>a]:items-center" aria-label="Liên kết cuối trang"><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/khoa-hoc">Khóa học</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi">Học phí</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi#faq">FAQ</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi#tu-van">Liên hệ</Link></nav>
      <small className="whitespace-nowrap font-bold text-[11px] text-[#4f6285] sm:col-start-2 sm:row-start-1 sm:justify-self-end lg:col-start-3">© 2026 Lộ Trình</small>
      </div>

      <div className="@container mt-8 border-t border-[#14284b]/20 pt-8 max-[760px]:mt-6 max-[760px]:pt-6">
        <div className="flex justify-center overflow-hidden">
          <p className="m-0 w-max shrink-0 pr-[.06em] text-center font-display text-[10cqw] leading-none font-bold tracking-[-.06em] whitespace-nowrap lg:text-[11cqw]">NGOTRUNGVINHTHO</p>
        </div>
        <div className="mt-4 flex flex-col items-center gap-2 text-center font-sans text-[10px] leading-relaxed font-bold tracking-[.1em] uppercase text-[#4f6285] sm:mt-6 sm:flex-row sm:justify-between sm:text-left">
          <span>Vững tay lái · Vững hành trình</span>
          <a href="#" className="inline-flex min-h-11 items-center gap-2 text-[#14284b] transition-colors hover:text-[#1d5fe0]">
            Về đầu trang <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
      </div>
    </footer>
  );
}
