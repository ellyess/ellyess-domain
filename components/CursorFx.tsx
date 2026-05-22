"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, [role="button"], [data-cursor]';
const MAGNETIC_STRENGTH = 0.35;
const MAGNETIC_RADIUS = 90;

export function CursorFx() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    const root = rootRef.current;
    if (!root) return;

    document.body.classList.add("has-cursor-fx");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let frame = 0;
    let visible = false;

    const render = () => {
      pos.x += (target.x - pos.x) * 0.18;
      pos.y += (target.y - pos.y) * 0.18;
      root.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;

      // Magnetic pull on nearby targets, eased in JS so we never
      // clobber each element's own hover transitions.
      for (const m of magnetics) {
        const rect = m.el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = target.x - cx;
        const dy = target.y - cy;
        const reach = Math.max(rect.width, rect.height) / 2 + MAGNETIC_RADIUS;
        const inRange = Math.hypot(dx, dy) < reach;
        const tx = inRange ? dx * MAGNETIC_STRENGTH : 0;
        const ty = inRange ? dy * MAGNETIC_STRENGTH : 0;
        m.x += (tx - m.x) * 0.2;
        m.y += (ty - m.y) * 0.2;
        if (Math.abs(m.x) < 0.05 && Math.abs(m.y) < 0.05 && !inRange) {
          m.el.style.transform = "";
        } else {
          m.el.style.transform = `translate(${m.x.toFixed(2)}px, ${m.y.toFixed(2)}px)`;
        }
      }

      frame = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        root.classList.remove("is-hidden");
      }
    };

    const onOver = (e: PointerEvent) => {
      const interactive = (e.target as Element | null)?.closest?.(INTERACTIVE);
      root.classList.toggle("is-active", Boolean(interactive));
    };

    const onLeave = () => {
      visible = false;
      root.classList.add("is-hidden");
    };

    const magnetics = Array.from(
      document.querySelectorAll<HTMLElement>("[data-magnetic]"),
    ).map((el) => ({ el, x: 0, y: 0 }));

    root.classList.add("is-hidden");
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerleave", onLeave);
      document.body.classList.remove("has-cursor-fx");
      for (const m of magnetics) m.el.style.transform = "";
    };
  }, []);

  return (
    <div ref={rootRef} className="cursor-fx-root is-hidden" aria-hidden>
      <div className="cursor-fx" />
      <div className="cursor-fx-dot" />
    </div>
  );
}
