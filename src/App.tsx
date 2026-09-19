import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedTechBackground } from "./components/background/AnimatedTechBackground";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { NavigationProvider } from "./context/NavigationContext";
import { useNavigation } from "./context/useNavigation";
import { RouteLoader } from "./components/ui/RouteLoader";

// Lazy-load pages for optimal code splitting & fast initial render
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Services = lazy(() => import("./pages/Services/Services"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() => import("./pages/Projects/ProjectDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));

// Accessible page loading fallback
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="relative w-12 h-12" role="status" aria-label="Loading page content">
      <div className="absolute inset-0 rounded-full border-2 border-[#00E5FF]/20 border-t-[#00E5FF] animate-spin" />
      <div className="absolute inset-2 rounded-full border-2 border-[#7B3CFF]/20 border-b-[#A855F7] animate-spin [animation-direction:reverse]" />
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();
  const { isTransitioning } = useNavigation();

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#020B18] text-white">
      {/* Route Transition Loader */}
      <AnimatePresence>
        {isTransitioning && <RouteLoader isVisible={isTransitioning} />}
      </AnimatePresence>

      {/* 1. Global Persistent Animated Background */}
      <AnimatedTechBackground />

      {/* 2. Global Fixed Glass Navbar */}
      <Navbar />

      {/* 3. Foreground Content with Smooth Page Transitions */}
      <div className="flex-grow flex flex-col">
        <Suspense fallback={<PageLoader />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
              {/* Proper 404 handler */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </div>

      {/* 4. Global Consistent Footer */}
      <Footer showCta={location.pathname !== "/contact"} />
    </div>
  );
};

export function App() {
  return (
    <BrowserRouter>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </BrowserRouter>
  );
}

export default App;
