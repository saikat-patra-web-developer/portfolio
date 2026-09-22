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
      try {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } catch {
        // A malformed hash must never crash navigation.
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
    const currentUrl = `https://inqly.online${cleanPath}`;
    canonical.setAttribute("href", currentUrl);

    // Dynamic Open Graph & Twitter meta updates
    const updateMeta = (attr, key, content) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    if (title) {
      updateMeta("property", "og:title", title);
      updateMeta("name", "twitter:title", title);
    }
    if (description) {
      updateMeta("property", "og:description", description);
      updateMeta("name", "twitter:description", description);
    }
    updateMeta("property", "og:url", currentUrl);
    updateMeta("name", "twitter:url", currentUrl);
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
