"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ScrollReveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (
      !element ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) return;

    element.dataset.revealArmed = "true";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.revealed = "true";
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full data-[reveal-armed=true]:not-data-[revealed=true]:translate-y-[26px] data-[reveal-armed=true]:not-data-[revealed=true]:opacity-0 data-[revealed=true]:translate-y-0 data-[revealed=true]:opacity-100 data-[revealed=true]:transition-[opacity,transform] data-[revealed=true]:duration-[650ms] data-[revealed=true]:ease-[cubic-bezier(.2,.75,.25,1)] data-[revealed=true]:delay-[var(--reveal-delay)] motion-reduce:!transform-none motion-reduce:!opacity-100 motion-reduce:!transition-none ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
