"use client";

import { useEffect, useRef } from "react";

export function PrismaHeroArt() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      stage.style.setProperty("--tilt-x", `${currentX}deg`);
      stage.style.setProperty("--tilt-y", `${currentY}deg`);
      frame = requestAnimationFrame(render);
    };

    const move = (event: PointerEvent) => {
      const bounds = stage.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      targetY = Math.max(-12, Math.min(12, x * 18));
      targetX = Math.max(-12, Math.min(12, y * -18));
    };
    const leave = () => { targetX = 0; targetY = 0; };

    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    frame = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(frame);
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div className="prisma-stage" ref={stageRef} aria-label="Símbolo triangular Prisma House Painter" role="img">
      <div className="prisma-glow" aria-hidden="true" />
      <div className="prisma-object" aria-hidden="true">
        <span className="prisma-tab" />
        <span className="prisma-face prisma-face-left" />
        <span className="prisma-face prisma-face-right" />
        <span className="prisma-face prisma-face-base" />
        <span className="paint-roller"><span className="roller-handle" /><span className="roller-head" /></span>
      </div>
      <span className="prisma-confidence">Acabamento pensado nos detalhes</span>
    </div>
  );
}
