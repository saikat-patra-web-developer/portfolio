import { motion } from "framer-motion";

export const RouteLoader = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      {/* 1. Top Neon Laser Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[101] overflow-hidden bg-transparent">
        <motion.div
          className="h-full bg-gradient-to-r from-[#2787FF] via-[#00E5FF] to-[#7B3CFF] shadow-[0_0_15px_rgba(0,229,255,0.9),0_0_25px_rgba(123,60,255,0.6)]"
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        />
      </div>

      {/* 2. Glassmorphic Ambient Backdrop */}
      <div className="absolute inset-0 bg-[#020B18]/70 backdrop-blur-md pointer-events-auto" />

      {/* 3. High-Tech Cybernetic Center Loader Badge */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="relative z-10 flex flex-col items-center gap-3.5 px-6 py-5 rounded-2xl border border-[#00E5FF]/30 shadow-[0_10px_35px_rgba(0,0,0,0.8),0_0_30px_rgba(0,229,255,0.2)] backdrop-blur-xl pointer-events-auto"
      >
        {/* Dual Orbit Spinning Rings */}
        <div className="relative w-12 h-12 flex items-center justify-center">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-[#00E5FF]/20 border-t-[#00E5FF] shadow-[0_0_12px_rgba(0,229,255,0.5)] animate-spin" />
          {/* Inner ring (reversed) */}
          <div className="absolute inset-1.5 rounded-full border-2 border-[#7B3CFF]/25 border-b-[#A855F7] animate-spin [animation-direction:reverse] [animation-duration:0.8s]" />
          {/* Glowing central core */}
          <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] shadow-[0_0_10px_#00E5FF] animate-pulse" />
        </div>

        {/* Minimal Cyber Status Text */}
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-ping" />
          <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#00E5FF] uppercase">
            Loading...
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RouteLoader;
