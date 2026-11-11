import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative z-[3] mx-auto grid w-[min(1180px,calc(100%-32px))] grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-2 py-3 text-[#14284b] sm:w-[min(1180px,calc(100%-40px))] sm:gap-x-5 xl:flex xl:min-h-[84px] xl:gap-5">
      <Link href="/" className="inline-flex min-w-0 items-center gap-2 text-inherit sm:gap-[10px] xl:shrink-0" aria-label="Lộ Trình — Trang chủ">
        <span data-logo-dock-target className="grid h-[46px] w-[46px] shrink-0 place-items-center overflow-hidden rounded-full border-[2.5px] border-[#14284b] bg-white shadow-[2px_3px_0_#14284b] max-[700px]:h-10 max-[700px]:w-10">
          <Image className="h-full w-full rounded-full object-cover" src="/logo.png" alt="" width={40} height={40} priority />
        </span>
        <span className="grid min-w-0 gap-1 leading-[1.2]"><strong className="font-display text-[13px] font-extrabold sm:text-lg xl:text-[20px]">TTGDNN VÀ SÁT HẠCH LÁI XE</strong><small className="font-extrabold text-[8px] leading-relaxed tracking-[.04em] text-[#4f6285] sm:text-[10px] sm:tracking-[.08em]">TỈNH BÀ RỊA - VŨNG TÀU</small></span>
      </Link>
      <nav className="relative col-span-2 row-start-2 flex min-w-0 flex-wrap items-center justify-center gap-x-1 gap-y-0 font-extrabold text-xs text-[#344664] sm:gap-x-5 sm:text-[13px] xl:mx-auto xl:flex-nowrap xl:gap-x-1 [&>a]:inline-flex [&>a]:min-h-11 [&>a]:items-center [&>a]:px-2" aria-label="Điều hướng chính">
        <Link className="py-2 hover:text-[#1d5fe0]" href="/">Trang chủ</Link>
        <Link className="py-2 hover:text-[#1d5fe0]" href="/khoa-hoc">Khóa học</Link>
        <Link className="py-2 hover:text-[#1d5fe0]" href="/hoc-phi">Học phí</Link>
        <Link className="py-2 hover:text-[#1d5fe0]" href="/ve-chung-toi">Về chúng tôi</Link>
        <details className="static sm:relative">
          <summary className="flex min-h-11 cursor-pointer list-none items-center px-2 marker:hidden hover:text-[#1d5fe0]">Khám phá <span className="ml-[3px]">⌄</span></summary>
          <div className="absolute inset-x-0 top-full z-[5] mx-auto grid w-[min(240px,calc(100vw-32px))] gap-1 rounded-2xl border-2 border-[#14284b] bg-[#fff8ec] p-[9px] shadow-[4px_5px_0_#14284b] sm:left-auto sm:mx-0 [&>a]:flex [&>a]:min-h-11 [&>a]:items-center">
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/lo-trinh">Lộ trình học</Link>
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/ve-chung-toi#thong-tin">Đội ngũ & cơ sở</Link>
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/#cam-nhan">Kết quả học viên</Link>
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/hoc-phi#faq">Câu hỏi thường gặp</Link>
          </div>
        </details>
      </nav>
      <div className="col-start-2 row-start-1 flex shrink-0 items-center gap-[14px] font-extrabold text-[13px]">
        <Link className="hidden min-h-11 items-center text-[#344664] hover:text-[#1d5fe0] 2xl:inline-flex" href="/hoc-phi#tu-van">Tư vấn</Link>
        <Link className="inline-flex min-h-[43px] items-center justify-center gap-[9px] whitespace-nowrap rounded-[13px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[14px] text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] focus-visible:outline-[3px] focus-visible:outline-[#1d5fe0] focus-visible:outline-offset-[3px] max-[700px]:min-h-[39px] max-[700px]:px-[10px] max-[700px]:text-[11px]" href="/#dang-ky">Đăng ký học <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
