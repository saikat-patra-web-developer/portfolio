import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavigationContext } from "./navigation-context";

export const NavigationProvider = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const timerRef = useRef(null);

  // Instantly reset scroll to top without any visible scrolling animation
  const instantScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  // Trigger a smooth transition with loader and instant top scroll
  const triggerTransition = useCallback((callback) => {
    // Clear any pending timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    // Instantly snap to top behind the curtain
    instantScrollToTop();
    setIsTransitioning(true);

    if (typeof callback === "function") {
      callback();
    }

    timerRef.current = setTimeout(() => {
      // Ensure we are strictly at the top before revealing content
      instantScrollToTop();
      setIsTransitioning(false);
      timerRef.current = null;
    }, 380);
  }, [instantScrollToTop]);

  // Handle route changes automatically (cross-page navigation)
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;

      if (!location.hash) {
        requestAnimationFrame(() => {
          triggerTransition();
        });
      } else {
        // If navigating with a hash anchor, scroll to hash element
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location.pathname, location.hash, triggerTransition]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ isTransitioning, triggerTransition, instantScrollToTop }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
