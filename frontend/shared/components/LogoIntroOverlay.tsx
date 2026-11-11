"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./LogoIntroOverlay.module.css";

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
      className={`${styles.overlay} ${docked ? styles.docked : ""}`}
      aria-label="Đang tải trang"
      role="status"
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && docked) setVisible(false);
      }}
    >
      <div className={styles.slot}>
        <div ref={stageRef} className={styles.stage}>
          <span className={`${styles.word} ${styles.left} ${showWords ? styles.wordVisible : ""}`}>Lộ</span>
          <span className={`${styles.word} ${styles.right} ${showWords ? styles.wordVisible : ""}`}>Trình</span>
          <div ref={coinRef} className={styles.coin} aria-hidden="true">
            {Array.from({ length: RIM_LAYERS }, (_, index) => {
              const depth = index / (RIM_LAYERS - 1);
              return (
                <div
                  key={index}
                  className={styles.rim}
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
                className={styles.face}
                style={{
                  transform: face === 0
                    ? "translateZ(calc(var(--thickness) * 0.5 + 0.5px))"
                    : "translateZ(calc(var(--thickness) * -0.5 - 0.5px)) rotateY(180deg)",
                }}
              >
                <Image
                  className={styles.logoImage}
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
                  className={styles.sheen}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.caption}>
        <strong>TTGDNN VÀ SÁT HẠCH LÁI XE.</strong>
        <span>TỈNH BÀ RỊA - VŨNG TAU</span>
      </div>
    </div>
  );
}
