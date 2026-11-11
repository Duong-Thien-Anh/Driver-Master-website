import Link from "next/link";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="relative z-[3] mx-auto flex min-h-[84px] w-[min(1180px,calc(100%-40px))] items-center gap-7 text-[#14284b] max-[900px]:gap-4 max-[700px]:grid max-[700px]:w-[calc(100%-32px)] max-[700px]:grid-cols-[minmax(0,1fr)_auto] max-[700px]:grid-rows-[62px_42px] max-[700px]:gap-x-[10px] max-[700px]:gap-y-0">
      <Link href="/" className="inline-flex shrink-0 items-center gap-[10px] text-inherit" aria-label="Lộ Trình — Trang chủ">
        <span data-logo-dock-target className="grid h-[46px] w-[46px] shrink-0 place-items-center overflow-hidden rounded-full border-[2.5px] border-[#14284b] bg-white shadow-[2px_3px_0_#14284b] max-[700px]:h-10 max-[700px]:w-10">
          <Image className="h-full w-full rounded-full object-cover" src="/logo.png" alt="" width={40} height={40} priority />
        </span>
        <span className="grid leading-[1.1]"><strong className="font-display text-[23px] font-[800] max-[900px]:text-[20px] max-[700px]:text-[19px]">Lộ Trình.</strong><small className="mt-0.5 font-[800] text-[10px] tracking-[.08em] text-[#4f6285] max-[700px]:text-[8px]">ĐÀO TẠO LÁI XE</small></span>
      </Link>
      <nav className="mx-auto flex items-center justify-center gap-[clamp(13px,2.1vw,27px)] whitespace-nowrap font-[800] text-[13px] text-[#344664] max-[900px]:gap-3 max-[900px]:text-[12px] max-[700px]:col-span-2 max-[700px]:row-start-2 max-[700px]:-mx-0.5 max-[700px]:justify-start max-[700px]:gap-[14px] max-[700px]:overflow-x-auto max-[700px]:py-[3px] max-[700px]:px-0.5 max-[700px]:pb-1.5 max-[700px]:text-[11px]">
        <Link className="py-2 hover:text-[#1d5fe0]" href="/">Trang chủ</Link>
        <Link className="py-2 hover:text-[#1d5fe0]" href="/khoa-hoc">Khóa học</Link>
        <Link className="py-2 hover:text-[#1d5fe0]" href="/hoc-phi">Học phí</Link>
        <Link className="py-2 hover:text-[#1d5fe0]" href="/ve-chung-toi">Về chúng tôi</Link>
        <details className="relative">
          <summary className="cursor-pointer list-none py-2 marker:hidden hover:text-[#1d5fe0] max-[700px]:py-[5px]">Khám phá <span className="ml-[3px]">⌄</span></summary>
          <div className="absolute left-[-14px] top-9 z-[5] grid min-w-[205px] gap-1 rounded-2xl border-2 border-[#14284b] bg-[#fff8ec] p-[9px] shadow-[4px_5px_0_#14284b] max-[700px]:fixed max-[700px]:left-4 max-[700px]:top-[105px]">
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/lo-trinh">Lộ trình học</Link>
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/ve-chung-toi#thong-tin">Đội ngũ & cơ sở</Link>
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/#cam-nhan">Kết quả học viên</Link>
            <Link className="rounded-[9px] px-[10px] py-[9px] text-[12px] hover:bg-[#bdebd0]" href="/hoc-phi#faq">Câu hỏi thường gặp</Link>
          </div>
        </details>
      </nav>
      <div className="flex shrink-0 items-center gap-[14px] font-[800] text-[13px] max-[900px]:gap-[9px]">
        <Link className="text-[#344664] hover:text-[#1d5fe0] max-[900px]:hidden" href="/hoc-phi#tu-van">Tư vấn</Link>
        <Link className="inline-flex min-h-[43px] items-center justify-center gap-[9px] whitespace-nowrap rounded-[13px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[14px] text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] focus-visible:outline-[3px] focus-visible:outline-[#1d5fe0] focus-visible:outline-offset-[3px] max-[700px]:min-h-[39px] max-[700px]:px-[10px] max-[700px]:text-[11px]" href="/#dang-ky">Đăng ký học <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
  );
}
