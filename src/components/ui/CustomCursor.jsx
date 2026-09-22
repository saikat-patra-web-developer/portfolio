import { useEffect, useRef, useState } from "react";

/**
 * Site-wide custom cursor — neon cyan (#00E5FF) ring + dot in the brand theme.
 *
 * Behaviour:
 * - Activates only for fine pointers (mouse/trackpad) and never for
 *   `prefers-reduced-motion` users, who keep the native pointer.
 * - While active, the native pointer is hidden via `html.site-cursor`
 *   (see index.css) and this component draws the themed cursor instead.
 * - The dot tracks the pointer exactly; the ring trails behind with a lerp
 *   and scales up over interactive elements (links, buttons, pills).
 * - Over text fields / editable content the themed cursor fades out and the
 *   native I-beam comes back for precise caret placement.
 */

const FIELD_SELECTOR = 'input, textarea, select, [contenteditable="true"]';
const HOT_SELECTOR =
  'a, button, [role="button"], [role="link"], [role="tab"], [role="menuitem"], summary, label, [class*="cursor-pointer"], [data-cursor="pointer"]';

const RING_LERP = 0.18;

export const CustomCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hot, setHot] = useState(false);
  const [pressed, setPressed] = useState(false);

  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const wasHot = useRef(false);

  /* 1. Capability check — desktop pointer + no reduced-motion preference. */
  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    document.documentElement.classList.add("site-cursor");
    setEnabled(true);
    return () => document.documentElement.classList.remove("site-cursor");
  }, []);

  /* 2. Pointer tracking — transforms are written directly to the DOM so we
        never re-render React on every mouse move. */
  useEffect(() => {
    if (!enabled) return;

    const flags = { moved: false, inWindow: true, field: false };
    const syncVisible = () => setVisible(flags.moved && flags.inWindow && !flags.field);

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      // Snap the ring on the first move so it doesn't fly in from off-screen.
      if (!flags.moved) {
        flags.moved = true;
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
        syncVisible();
      }

      const el = e.target instanceof Element ? e.target : null;
      const overField = !!el?.closest(FIELD_SELECTOR);
      const overHot = !overField && !!el?.closest(HOT_SELECTOR);

      if (flags.field !== overField) {
        flags.field = overField;
        syncVisible();
      }
      if (wasHot.current !== overHot) {
        wasHot.current = overHot;
        setHot(overHot);
      }
    };

    let raf = 0;
    const tick = () => {
      const p = ringPos.current;
      const t = target.current;
      p.x += (t.x - p.x) * RING_LERP;
      p.y += (t.y - p.y) * RING_LERP;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      flags.inWindow = false;
      syncVisible();
    };
    const onEnter = () => {
      flags.inWindow = true;
      syncVisible();
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("blur", onLeave);
    window.addEventListener("focus", onEnter);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("blur", onLeave);
      window.removeEventListener("focus", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled]);

  if (!enabled) return null;

  const fade = visible ? "opacity-100" : "opacity-0";
  const ringSkin = pressed
    ? "scale-75 border-[#00E5FF] bg-[#00E5FF]/25 shadow-[0_0_18px_rgba(0,229,255,0.6)]"
    : hot
      ? "scale-[1.7] border-[#00E5FF] bg-[#00E5FF]/15 shadow-[0_0_22px_rgba(0,229,255,0.55)]"
      : "scale-100 border-[#00E5FF]/85 bg-[#00E5FF]/5 shadow-[0_0_14px_rgba(0,229,255,0.35)]";
  const dotSkin = pressed ? "scale-125" : hot ? "scale-50" : "scale-100";

  return (
    <>
      {/* Trailing ring — position driven by rAF */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      >
        <div
          className={`-ml-4 -mt-4 h-8 w-8 rounded-full border-[1.5px] transition-all duration-200 ease-out ${fade} ${ringSkin}`}
        />
      </div>

      {/* Leading dot — position written on mousemove */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
      >
        <div
          className={`-ml-[3px] -mt-[3px] h-1.5 w-1.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.9)] transition-transform duration-200 ease-out ${fade} ${dotSkin}`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
