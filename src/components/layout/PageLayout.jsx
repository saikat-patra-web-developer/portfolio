import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const PageLayout = ({
  children,
  title = "Saikat Patra | Full Stack Web Developer",
  description = "Saikat Patra - Full Stack Web Developer based in Howrah, India. Specializing in React, Laravel, Custom CRM, WordPress and API integrations."
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.location.hash) {
      setTimeout(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return;
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }

    // Update document title and meta description
    if (title) {
      document.title = title;
    }
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    }
  }, [pathname, title, description]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative z-10 pt-28 sm:pt-32 pb-16 flex-grow"
    >
      {children}
    </motion.main>
  );
};

export default PageLayout;
