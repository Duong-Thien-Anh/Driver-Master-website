import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-0 mx-auto grid min-h-[132px] w-[min(1180px,calc(100%-40px))] grid-cols-[auto_1fr_auto] items-center gap-5 border-t-[2.5px] border-[#14284b] py-[23px] text-[#14284b] before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-[#fff8ec] before:content-[''] max-[760px]:w-[calc(100%-32px)] max-[760px]:grid-cols-[1fr_auto] max-[760px]:gap-[13px] max-[760px]:py-5 max-[760px]:pb-6">
      <Link href="/" className="grid gap-[3px] font-display text-2xl font-[800] max-[760px]:text-[21px]">Lộ Trình.<small className="font-[800] text-[9px] tracking-[.1em] text-[#4f6285]">VỮNG TAY LÁI · VỮNG HÀNH TRÌNH</small></Link>
      <nav className="flex flex-wrap items-center justify-center gap-2 max-[760px]:col-span-2 max-[760px]:justify-start" aria-label="Liên kết cuối trang"><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/khoa-hoc">Khóa học</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi">Học phí</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi#faq">FAQ</Link><Link className="rounded-full border border-transparent px-[11px] py-[7px] font-[800] text-[12px] text-[#344664] hover:border-[#14284b] hover:bg-[#5ed3a8]" href="/hoc-phi#tu-van">Liên hệ</Link></nav>
      <small className="whitespace-nowrap font-[700] text-[11px] text-[#4f6285] max-[760px]:col-span-2">© 2026 Lộ Trình</small>
    </footer>
  );
}
