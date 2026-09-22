import React from "react";
import { motion } from "framer-motion";
import {
  revealProps,
  inViewViewport,
  staggerContainer,
  staggerItem
} from "../../animation/motion";

const resolve = (as) => motion[as] || motion.div;

/**
 * Generic scroll-reveal wrapper.
 *
 * Keeps the underlying DOM tag identical (`as="section"` still renders a
 * `<section>`), so the layout CSS in `index.css` that targets element
 * selectors keeps working unchanged.
 *
 * @example
 *   <Reveal as="section" className="home-hero" immediate>...</Reveal>
 *   <Reveal delay={0.1}>Anything</Reveal>
 */
export const Reveal = ({
  as = "div",
  delay = 0,
  y = 24,
  x = 0,
  duration = 0.6,
  amount = 0.2,
  immediate = false,
  className,
  children,
  ...props
}) => {
  const Component = resolve(as);

  return (
    <Component
      {...revealProps({ delay, y, x, duration, amount, immediate })}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Cascade container — give each direct motion child `variants={staggerItem}`.
 * Variant labels travel through React context, so intermediate plain
 * components (like `ServiceCard`) do not break the cascade.
 */
export const Stagger = ({
  as = "div",
  stagger = 0.08,
  delayChildren = 0,
  amount = 0.2,
  immediate = false,
  className,
  children,
  ...props
}) => {
  const Component = resolve(as);

  return (
    <Component
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : {
          whileInView: "visible",
          viewport: inViewViewport(amount)
        })}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

/** Cascade child — must be a direct (or nested) motion element. */
export const StaggerItem = ({
  as = "div",
  className,
  children,
  ...props
}) => {
  const Component = resolve(as);

  return (
    <Component variants={staggerItem} className={className} {...props}>
      {children}
    </Component>
  );
};

export default Reveal;
