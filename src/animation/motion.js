/**
 * Shared motion vocabulary for the whole portfolio.
 *
 * Every reveal on the site pulls its easing, duration and distance from this
 * module so the site reads as one deliberate design system rather than a
 * collection of unrelated effects. Keep curves/durations here — not inline.
 */

/**
 * Smooth "expo-out" curve: quick departure, long gentle settle.
 * Reads as premium and never feels bouncy or playful in a commercial context.
 */
export const EASE = [0.22, 1, 0.36, 1];

/** Slightly snappier curve for micro-interactions (buttons, chips, toggles). */
export const SNAP_EASE = [0.16, 1, 0.3, 1];

/**
 * Scroll-reveal props for any `motion.*` element.
 *
 * `immediate` switches from `whileInView` to `animate`, which is what hero
 * sections want — they should play on mount instead of waiting for scroll.
 *
 * @param {object}  [opts]
 * @param {number}  [opts.delay=0]     Seconds before the reveal starts.
 * @param {number}  [opts.y=24]        Vertical travel in px (negative = from above).
 * @param {number}  [opts.x=0]         Horizontal travel in px.
 * @param {number}  [opts.duration=0.6]
 * @param {number}  [opts.amount=0.2]  Fraction of the element that must be visible.
 * @param {boolean} [opts.immediate]   Play on mount instead of on scroll.
 */
export const revealProps = ({
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.6,
  amount = 0.2,
  immediate = false
} = {}) => ({
  initial: { opacity: 0, y, x },
  ...(immediate
    ? { animate: { opacity: 1, y: 0, x: 0 } }
    : {
      whileInView: { opacity: 1, y: 0, x: 0 },
      viewport: { once: true, amount }
    }),
  transition: { duration, delay, ease: EASE }
});

/**
 * Container variant set for cascading children.
 * Pair with `staggerItem` on each direct motion child.
 */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren }
  }
});

/** Child variant set — pairs with `staggerContainer`. */
export const staggerItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE }
  }
};

/** Left-to-right variant set — used for rows of badges/chips. */
export const staggerItemLeft = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE }
  }
};

/**
 * Per-item delay for card grids.
 *
 * Cycles per row so a 3-up grid cascades left-to-right and then resets,
 * instead of the last card in a long list waiting several seconds.
 *
 * @param {number} index     Current item index.
 * @param {number} [columns=3] Cards per row on desktop.
 * @param {number} [step=0.08] Seconds between cards.
 */
export const staggerDelay = (index, columns = 3, step = 0.08) =>
  (index % columns) * step;

/**
 * Infinite gentle vertical bob for floating UI chrome
 * (availability badge, quote card, hero art).
 */
export const floatY = (amplitude = 8, duration = 4.5) => ({
  y: [0, -amplitude, 0],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut"
  }
});

/** Slow, non-repeating-feel pulse for glow accents. */
export const pulseScale = (min = 0.97, max = 1.03, duration = 3.5) => ({
  scale: [min, max, min],
  transition: {
    duration,
    repeat: Infinity,
    ease: "easeInOut"
  }
});
