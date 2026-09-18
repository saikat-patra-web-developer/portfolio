import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AnimatedTechBackground } from "./components/background/AnimatedTechBackground";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

// Lazy-load pages for code splitting & maximum performance
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Skills = lazy(() => import("./pages/Skills/Skills"));
const Services = lazy(() => import("./pages/Services/Services"));
const Projects = lazy(() => import("./pages/Projects/Projects"));
const ProjectDetails = lazy(() => import("./pages/Projects/ProjectDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Page loading skeleton fallback
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="relative w-14 h-14">
      <div className="absolute inset-0 rounded-full border-2 border-[#00E5FF]/20 border-t-[#00E5FF] animate-spin" />
      <div className="absolute inset-2 rounded-full border-2 border-[#7B3CFF]/20 border-b-[#A855F7] animate-spin [animation-direction:reverse]" />
    </div>
  </div>
);

const AppContent = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      {/* 1. Global Persistent Animated Background - Stays mounted across all routes */}
      <AnimatedTechBackground />

      {/* 2. Global Fixed Floating Glass Navbar */}
      <Navbar />

      {/* 3. Foreground Page Content with AnimatePresence */}
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
              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
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
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
