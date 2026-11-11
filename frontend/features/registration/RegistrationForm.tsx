"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "success" | "error";
const fieldClasses = "mt-[7px] min-h-[45px] w-full min-w-0 rounded-[11px] border-2 border-[#14284b] bg-white px-3 py-2.5 font-sans text-base font-semibold md:text-[13px] text-[#14284b] shadow-[2px_3px_0_#14284b] outline-none placeholder:text-[#71809a] focus:border-[#1d5fe0] focus:shadow-[0_0_0_3px_#ffc93c,2px_3px_0_#14284b]";
const labelClasses = "grid min-w-0 content-start gap-[7px] font-sans text-[13px] font-extrabold text-[#14284b]";

export function RegistrationForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    setMessage("");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Chưa gửi được thông tin. Vui lòng thử lại.");
      setState("success");
      setMessage("Thông tin đã được gửi. Lộ Trình sẽ liên hệ bạn sớm.");
      formElement.reset();
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "Đã có lỗi xảy ra. Vui lòng thử lại.");
    }
  }

  return (
    <section className="bg-[#fff8ec] py-[62px] pb-[68px] text-[#14284b] max-[620px]:py-12 max-[620px]:pb-[55px]" id="dang-ky" aria-labelledby="registration-heading">
      <div className="mx-auto w-[min(1000px,calc(100%-40px))] max-[620px]:w-[calc(100%-32px)]">
        <div className="mb-[23px]"><span className="font-sans text-[12px] font-extrabold tracking-[.12em] text-[#1d5fe0]">BẮT ĐẦU HÀNH TRÌNH</span><h2 className="my-2 mb-[3px] font-display text-[clamp(32px,4vw,45px)] leading-[1.07] font-extrabold tracking-[-.035em]" id="registration-heading">Gửi thông tin, cùng chọn lộ trình.</h2><p className="m-0 font-sans text-[14px] leading-[1.6] font-bold text-[#4f6285]">Một bước nhỏ hôm nay. Một hành trình tự tin hơn ngày mai.</p></div>
        <form className="grid min-w-0 grid-cols-2 gap-x-5 gap-y-[17px] rounded-3xl border-[2.5px] border-[#14284b] bg-[#cfe8ff] p-[25px] shadow-[7px_8px_0_#14284b] max-[620px]:grid-cols-1 max-[620px]:gap-3 max-[620px]:p-4" onSubmit={submit}>
          <label className={labelClasses}>Họ và tên *<input className={fieldClasses} name="name" required placeholder="Nhập họ và tên" autoComplete="name" /></label>
          <label className={labelClasses}>Số điện thoại *<input className={fieldClasses} name="phone" required inputMode="tel" autoComplete="tel" placeholder="Số điện thoại của bạn" /></label>
          <label className={labelClasses}>Hạng giấy phép mong muốn *<select className={fieldClasses} name="license" required defaultValue=""><option value="" disabled>Chọn hạng giấy phép</option><option>Hạng B — Ô tô</option><option>Hạng C — Xe tải</option><option>Hạng A1 — Xe máy</option><option>Bổ túc tay lái & ôn tập</option></select></label>
          <label className={labelClasses}>Khu vực học *<input className={fieldClasses} name="area" required placeholder="Quận / Thành phố" autoComplete="address-level2" /></label>
          <label className={`${labelClasses} col-span-full`}>Ghi chú<textarea className={`${fieldClasses} min-h-24 resize-y`} name="notes" rows={3} placeholder="Lịch học mong muốn hoặc câu hỏi của bạn..." /></label>
          <div className="col-span-full flex flex-wrap items-center gap-[15px] max-[620px]:flex-col max-[620px]:items-start max-[620px]:gap-[10px]"><button className="inline-flex min-h-[46px] items-center justify-between gap-[14px] rounded-[13px] border-[2.5px] border-[#14284b] bg-[#ffc93c] px-[15px] font-sans text-[14px] font-extrabold text-[#14284b] shadow-[3px_4px_0_#14284b] transition-[transform,box-shadow] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_2px_0_#14284b] max-[620px]:w-full disabled:cursor-wait disabled:opacity-70 focus-visible:outline-[3px] focus-visible:outline-[#1d5fe0] focus-visible:outline-offset-[3px]" type="submit" disabled={state === "sending"}>{state === "sending" ? "Đang gửi…" : "Gửi thông tin đăng ký"}<span aria-hidden="true">↗</span></button><small className="font-sans text-[11px] leading-[1.5] font-bold text-[#4f6285]">Thông tin chỉ được sử dụng để tư vấn khóa học bạn quan tâm.</small></div>
          {message && <p className={`col-span-full m-0 rounded-[11px] border-2 border-[#14284b] bg-white px-3 py-[10px] font-sans text-[13px] leading-[1.5] font-extrabold ${state === "success" ? "bg-[#bdebd0]" : state === "error" ? "bg-[#ffb8a8]" : ""}`} role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
