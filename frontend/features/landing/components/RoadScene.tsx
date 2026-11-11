"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./RoadScene.module.css";

const WIDTH = 600;
const HEIGHT = 480;
const DRIVE_MS = 11_000;
const ROAD = "M30 410 C140 440 190 330 290 350 S430 430 480 340 S470 250 570 235";

const STOPS = [
  { progress: 0.1, label: "Lý thuyết", below: false },
  { progress: 0.32, label: "Cabin", below: true },
  { progress: 0.52, label: "Sa hình", below: false },
  { progress: 0.74, label: "Đường trường", below: true },
  { progress: 0.97, label: "Nhận bằng", below: false },
];

type Point = { x: number; y: number };

export function RoadScene() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const roadRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);
  const honkRef = useRef<HTMLDivElement>(null);
  const pupilRefs = useRef<(SVGCircleElement | null)[]>([]);
  const lampRefs = useRef<Record<string, SVGCircleElement | null>>({});
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const honkTimer = useRef<number | undefined>(undefined);
  const [points, setPoints] = useState<Point[]>([]);
  const [honk, setHonk] = useState(false);

  const beep = () => {
    setHonk(true);
    window.clearTimeout(honkTimer.current);
    honkTimer.current = window.setTimeout(() => setHonk(false), 1100);
  };

  useEffect(() => {
    const road = roadRef.current;
    const car = carRef.current;
    const scene = sceneRef.current;
    if (!road || !car || !scene) return;

    const length = road.getTotalLength();
    setPoints(STOPS.map(({ progress }) => road.getPointAtLength(length * progress)));

    let look = { x: 1.6, y: 0 };
    let light = "";
    let startedAt = performance.now();
    let frameId = 0;

    const setLight = (color: string) => {
      if (color === light) return;
      light = color;
      for (const key of ["r", "y", "g"]) {
        lampRefs.current[key]?.setAttribute("data-on", String(key === color));
      }
    };

    const place = (progress: number) => {
      const point = road.getPointAtLength(length * progress);
      const nextPoint = road.getPointAtLength(Math.min(length, length * progress + 6));
      const rotation = Math.max(-28, Math.min(28,
        (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) / Math.PI,
      ));
      car.setAttribute("transform", `translate(${point.x} ${point.y - 15}) rotate(${rotation}) scale(.95)`);

      if (honkRef.current) {
        honkRef.current.style.left = `${(point.x / WIDTH) * 100}%`;
        honkRef.current.style.top = `${((point.y - 52) / HEIGHT) * 100}%`;
      }

      STOPS.forEach(({ progress: stop }, index) => {
        const hit = String(progress >= stop - 0.004);
        dotRefs.current[index]?.setAttribute("data-hit", hit);
        labelRefs.current[index]?.setAttribute("data-hit", hit);
      });

      pupilRefs.current.forEach((pupil, index) => {
        pupil?.setAttribute("cx", String([-3, 11][index] + look.x));
        pupil?.setAttribute("cy", String(-14.5 + look.y));
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = car.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      const magnitude = Math.hypot(dx, dy) || 1;
      const offset = Math.min(1, magnitude / 120) * 2;
      look = { x: (dx / magnitude) * offset, y: (dy / magnitude) * offset };
    };
    window.addEventListener("pointermove", onPointerMove);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLight("g");
      frameId = requestAnimationFrame(() => place(0.52));
    } else {
      const frame = (now: number) => {
        const elapsed = now - startedAt;
        let progress = 0;
        let driving = false;

        if (elapsed < 1500) {
          setLight(elapsed < 800 ? "r" : "y");
        } else {
          setLight("g");
          const driveTime = elapsed - 1500;
          if (driveTime < DRIVE_MS) {
            progress = driveTime / DRIVE_MS;
            driving = true;
          } else {
            progress = 1;
            if (driveTime > DRIVE_MS + 1600) startedAt = now;
          }
        }

        scene.setAttribute("data-driving", String(driving));
        place(progress);
        frameId = requestAnimationFrame(frame);
      };
      frameId = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(honkTimer.current);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <div ref={sceneRef} className={styles.scene} data-driving="false">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label="Chiếc xe hoạt hình chạy trên con đường lộ trình học lái xe"
        className={styles.svg}
      >
        <defs>
          <path id="learning-road" ref={roadRef} d={ROAD} />
        </defs>

        <circle className={styles.inkStroke} cx="500" cy="64" r="30" fill="#FFC93C" />
        <g className={styles.drift}>
          <path className={styles.inkStroke} fill="#fff" d="M70 90 Q68 76 82 78 Q86 64 102 68 Q114 60 124 74 Q138 74 136 90Z" />
        </g>
        <g className={styles.driftSlow}>
          <path className={styles.inkStroke} fill="#fff" d="M300 62 Q298 48 312 50 Q316 36 332 40 Q344 32 354 46 Q368 46 366 62Z" />
        </g>

        <path className={styles.inkStroke} fill="#BDEBD0" d="M0 250 Q120 190 260 240 T600 215 V480 H0Z" />
        <path className={styles.inkStroke} fill="#8EDDB5" d="M0 330 Q150 290 300 335 T600 300 V480 H0Z" />
        <g className={styles.inkStroke}>
          <rect x="116" y="318" width="8" height="30" fill="#14284B" />
          <circle cx="120" cy="306" r="22" fill="#5ED3A8" />
          <rect x="398" y="276" width="8" height="30" fill="#14284B" />
          <circle cx="402" cy="264" r="20" fill="#5ED3A8" />
          <rect x="536" y="372" width="8" height="28" fill="#14284B" />
          <circle cx="540" cy="360" r="20" fill="#5ED3A8" />
        </g>

        <use href="#learning-road" fill="none" stroke="#14284B" strokeWidth="54" strokeLinecap="round" />
        <use href="#learning-road" fill="none" stroke="#6E7FA3" strokeWidth="45" strokeLinecap="round" />
        <use href="#learning-road" className={styles.roadDash} fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="14 12" />

        {points.map((point, index) => (
          <circle
            key={index}
            ref={(element) => { dotRefs.current[index] = element; }}
            data-hit="false"
            cx={point.x}
            cy={point.y}
            r="6"
            className={styles.stopDot}
          />
        ))}

        <g className={styles.inkStroke}>
          <rect x="89" y="330" width="6" height="84" fill="#14284B" />
          <rect x="72" y="272" width="40" height="62" rx="10" fill="#14284B" />
        </g>
        {[
          { key: "r", y: 286, className: styles.red },
          { key: "y", y: 303, className: styles.yellow },
          { key: "g", y: 320, className: styles.green },
        ].map((lamp) => (
          <circle
            key={lamp.key}
            ref={(element) => { lampRefs.current[lamp.key] = element; }}
            data-on="false"
            cx="92"
            cy={lamp.y}
            r="7"
            className={`${styles.lamp} ${lamp.className}`}
          />
        ))}

        <g
          ref={carRef}
          role="button"
          tabIndex={0}
          aria-label="Bấm để xe bấm còi"
          className={styles.car}
          onClick={beep}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              beep();
            }
          }}
        >
          <g className={styles.carBody}>
            <ellipse cx="0" cy="27" rx="38" ry="5" fill="#14284B" opacity=".2" />
            <path className={styles.inkStroke} fill="#1D5FE0" d="M-42 12V0Q-42-6-34-8L-22-10Q-14-26 2-26H14Q24-26 30-12L38-8Q44-6 44 2V12Q44 18 38 18H-36Q-42 18-42 12Z" />
            <path className={styles.inkStroke} fill="#DDF0FF" d="M-19-9Q-12-22 2-22H12Q19-22 24-9Z" />
            <circle className={styles.inkStroke} cx="-3" cy="-14.5" r="4.6" fill="#fff" strokeWidth="2" />
            <circle className={styles.inkStroke} cx="11" cy="-14.5" r="4.6" fill="#fff" strokeWidth="2" />
            <circle ref={(element) => { pupilRefs.current[0] = element; }} cx="-1.4" cy="-14.5" r="2.2" fill="#14284B" />
            <circle ref={(element) => { pupilRefs.current[1] = element; }} cx="12.6" cy="-14.5" r="2.2" fill="#14284B" />
            <circle className={styles.inkStroke} cx="39" cy="3" r="4.5" fill="#FFC93C" strokeWidth="2" />
            <path d="M-40 8H34" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" opacity=".5" />
            {[-24, 24].map((cx) => (
              <g key={cx} className={styles.wheel}>
                <circle className={styles.inkStroke} cx={cx} cy="18" r="9.5" fill="#14284B" />
                <circle cx={cx} cy="18" r="3.6" fill="#fff" />
                <path d={`M${cx} 14V22`} stroke="#14284B" strokeWidth="2" />
              </g>
            ))}
          </g>
        </g>
      </svg>

      {points.map((point, index) => (
        <div
          key={STOPS[index].label}
          ref={(element) => { labelRefs.current[index] = element; }}
          data-hit="false"
          style={{ left: `${(point.x / WIDTH) * 100}%`, top: `${(point.y / HEIGHT) * 100}%` }}
          className={`${styles.stop} ${STOPS[index].below ? styles.below : styles.above}`}
        >
          <i aria-hidden="true" />
          {STOPS[index].label}
        </div>
      ))}

      <div ref={honkRef} aria-hidden="true" className={`${styles.honk} ${honk ? styles.honkVisible : ""}`}>
        Bíp bíp!
      </div>
    </div>
  );
}
