import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const PageLayout = ({
  children,
  title = "Saikat Patra | Full Stack Web Developer",
  description = "Full Stack Web Developer specializing in React, Laravel, custom CRM systems, business automation and high-performance web applications."
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll restoration
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }

    // Dynamic Title & Meta Description update
    if (title) {
      document.title = title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }

    // Dynamic Canonical Link update
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    const cleanPath = pathname === "/" ? "" : pathname;
    canonical.setAttribute(
      "href",
      `https://portfolio.saikatpatraoffice.workers.dev${cleanPath}`
    );
  }, [pathname, title, description]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="site-main relative z-10 pt-24 sm:pt-28 pb-10 flex-grow"
    >
      {children}
    </motion.main>
  );
};

export default PageLayout;
