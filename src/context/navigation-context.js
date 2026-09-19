import { createContext } from "react";

export const NavigationContext = createContext({
  isTransitioning: false,
  triggerTransition: () => {},
  instantScrollToTop: () => {},
});
