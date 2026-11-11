"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

const START_ANGLE = -20;
const SPEED = 144;
const SETTLE_MS = 900;
const DOCK_DELAY_MS = 350;
const RIM_LAYERS = 24;

type Settle = { startedAt: number; from: number; to: number } | null;

export function LogoIntroOverlay() {
  const stageRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const sheenRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dockedRef = useRef(false);
  const [showWords, setShowWords] = useState(false);
  const [docked, setDocked] = useState(false);
  const [visible, setVisible] = useState(true);

  const dock = useCallback((instant = false) => {
    const stage = stageRef.current;
    const slot = stage?.parentElement;
    const target = document.querySelector<HTMLElement>("[data-logo-dock-target]");
    if (!stage || !slot || !target) {
      setVisible(false);
      return;
    }

    const from = slot.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const scale = to.width / from.width;
    stage.style.position = "fixed";
    stage.style.inset = "auto";
    stage.style.left = `${from.left}px`;
    stage.style.top = `${from.top}px`;
    stage.style.width = `${from.width}px`;
    stage.style.height = `${from.height}px`;
    stage.style.transformOrigin = "center center";
    stage.style.transition = instant ? "none" : "";
    void stage.offsetWidth;
    stage.style.transform = `translate(${to.left + to.width / 2 - (from.left + from.width / 2)}px, ${to.top + to.height / 2 - (from.top + from.height / 2)}px) scale(${scale})`;
    dockedRef.current = true;
    setDocked(true);
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const coin = coinRef.current;
    if (!stage || !coin) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let dockTimer = 0;
    let finishTimer = 0;
    let lastFrame = performance.now();
    let angle = START_ANGLE;
    let turned = 0;
    let spinning = true;
    let settle: Settle = null;

    if (reduceMotion) {
      angle = 0;
      coin.style.transform = "rotateX(-8deg) rotateY(0deg)";
      setShowWords(true);
      dock(true);
      finishTimer = window.setTimeout(() => setVisible(false), 150);
      return () => {
        window.clearTimeout(finishTimer);
      };
    }

    const animate = (now: number) => {
      const delta = Math.min((now - lastFrame) / 1000, 0.05);
      lastFrame = now;

      if (settle) {
        const progress = Math.min(1, (now - settle.startedAt) / SETTLE_MS);
        const eased = 1 - Math.pow(1 - progress, 3);
        angle = settle.from + (settle.to - settle.from) * eased;
        if (progress >= 1) {
          settle = null;
          dockTimer = window.setTimeout(() => dock(), DOCK_DELAY_MS);
        }
      } else if (spinning) {
        angle += SPEED * delta;
        turned += SPEED * delta;
        if (turned >= 360) {
          spinning = false;
          setShowWords(true);
          settle = { startedAt: now, from: angle, to: Math.ceil(angle / 360) * 360 };
        }
      }

      coin.style.transform = `rotateX(${dockedRef.current ? 0 : -8}deg) rotateY(${angle}deg)`;
      sheenRefs.current.forEach((element, index) => {
        if (!element) return;
        const faceAngle = (((angle + (index ? 180 : 0)) % 360) + 360) % 360;
        element.style.backgroundPosition = `${100 - (faceAngle / 360) * 200}% 0`;
      });
      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);
    finishTimer = window.setTimeout(() => setVisible(false), 9_000);
    const onResize = () => {
      if (dockedRef.current) dock(true);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(dockTimer);
      window.clearTimeout(finishTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [dock]);

  if (!visible) return null;

  return (
    <div
      className={`group/logo fixed inset-0 z-[100] flex flex-col items-center justify-center gap-7 overflow-hidden bg-[radial-gradient(ellipse_at_50%_38%,#f4f9ff,#dcecff)] [--size:min(42vw,48vh,300px)] [--thickness:calc(var(--size)*.085)] transition-opacity duration-[650ms] delay-[450ms] ease-[ease] max-[640px]:[--size:min(56vw,38vh,240px)] motion-reduce:transition-none ${docked ? "pointer-events-none opacity-0" : ""}`}
      data-docked={docked}
      aria-label="Đang tải trang"
      role="status"
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && docked) setVisible(false);
      }}
    >
      <div className="relative size-[var(--size)]">
        <div ref={stageRef} className="absolute inset-0 z-[1] [perspective:1200px] transition-transform duration-[1100ms] ease-[cubic-bezier(.65,0,.25,1)] motion-reduce:transition-none">
          <span data-visible={showWords} className="absolute top-1/2 left-1/2 z-0 whitespace-nowrap font-display text-[calc(var(--size)*.19)] leading-none font-bold text-ink opacity-0 [transform:translate(-50%,-50%)_scale(.4)] transition-[transform,opacity] duration-[850ms] ease-[cubic-bezier(.2,.9,.25,1.08)] data-[visible=true]:opacity-100 data-[visible=true]:[transform:translate(calc(-100%_-_var(--size)*.5_-_12px),-50%)_scale(1)] motion-reduce:transition-none">Lộ</span>
          <span data-visible={showWords} className="absolute top-1/2 left-1/2 z-0 whitespace-nowrap font-display text-[calc(var(--size)*.19)] leading-none font-bold text-ink opacity-0 [transform:translate(-50%,-50%)_scale(.4)] transition-[transform,opacity] duration-[850ms] ease-[cubic-bezier(.2,.9,.25,1.08)] data-[visible=true]:opacity-100 data-[visible=true]:[transform:translate(calc(var(--size)*.5_+_12px),-50%)_scale(1)] motion-reduce:transition-none">Trình</span>
          <div ref={coinRef} className="relative z-[1] size-full [transform-style:preserve-3d] [&>*]:absolute [&>*]:inset-0 [&>*]:rounded-full" aria-hidden="true">
            {Array.from({ length: RIM_LAYERS }, (_, index) => {
              const depth = index / (RIM_LAYERS - 1);
              return (
                <div
                  key={index}
                  className="bg-[linear-gradient(90deg,#0f4f94,#2a86d6_50%,#0f4f94)]"
                  style={{
                    transform: `translateZ(calc(var(--thickness) * ${(depth - 0.5).toFixed(4)}))`,
                    filter: `brightness(${0.85 + 0.2 * Math.sin(depth * Math.PI)})`,
                  }}
                />
              );
            })}
            {[0, 1].map((face) => (
              <div
                key={face}
                className="grid place-items-center overflow-hidden bg-white [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
                style={{
                  transform: face === 0
                    ? "translateZ(calc(var(--thickness) * 0.5 + 0.5px))"
                    : "translateZ(calc(var(--thickness) * -0.5 - 0.5px)) rotateY(180deg)",
                }}
              >
                <Image
                  className="pointer-events-none block size-full object-cover select-none [-webkit-user-drag:none]"
                  src="/logo.png"
                  alt=""
                  aria-hidden="true"
                  width={640}
                  height={640}
                  priority
                  draggable={false}
                />
                <div
                  ref={(element) => { sheenRefs.current[face] = element; }}
                  className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,#ffffff8c_50%,transparent_65%)] bg-size-[300%_100%] mix-blend-soft-light"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid justify-items-center gap-[5px] text-center transition-opacity duration-[400ms] ease-[ease] group-data-[docked=true]/logo:opacity-0 motion-reduce:transition-none">
        <strong className="font-display text-xl font-bold">TTGDNN VÀ SÁT HẠCH LÁI XE.</strong>
        <span className="text-[11px] tracking-[.07em] text-muted uppercase">TỈNH BÀ RỊA - VŨNG TAU</span>
      </div>
    </div>
  );
}
