import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home as HomeIcon, MessageSquare } from "lucide-react";
import { PageLayout } from "../../components/layout/PageLayout";
import { NeonButton } from "../../components/ui/NeonButton";
import { staggerContainer, staggerItem } from "../../animation/motion";

export const NotFound = () => {
  return (
    <PageLayout
      title="404 - Page Not Found | Saikat Patra"
      description="The page you were looking for does not exist or has been relocated. Return to Saikat Patra's web development portfolio."
    >
      <motion.div
        className="max-w-2xl mx-auto px-4 text-center py-16 sm:py-24 space-y-6"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.09, 0.1)}
      >
        <motion.div
          variants={staggerItem}
          className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/30 flex items-center justify-center text-[#00E5FF] mx-auto shadow-[0_0_20px_rgba(0,229,255,0.2)]"
        >
          <span className="font-mono text-xl font-black">404</span>
        </motion.div>

        <motion.h1
          variants={staggerItem}
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="text-sm sm:text-base text-white/70 max-w-md mx-auto leading-relaxed"
        >
          The requested page could not be located. You can navigate back to the home page or explore our custom development services.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2"
        >
          <NeonButton to="/" variant="primary" size="md">
            <HomeIcon className="w-4 h-4 mr-1.5" />
            <span>Back to Home</span>
          </NeonButton>
          <NeonButton to="/contact" variant="secondary" size="md">
            <MessageSquare className="w-4 h-4 mr-1.5" />
            <span>Discuss a Project</span>
          </NeonButton>
        </motion.div>

        <motion.div
          variants={staggerItem}
          className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60"
        >
          <Link to="/services" className="hover:text-[#00E5FF] transition-colors">
            Services
          </Link>
          <span>&bull;</span>
          <Link to="/projects" className="hover:text-[#00E5FF] transition-colors">
            Projects
          </Link>
          <span>&bull;</span>
          <Link to="/about" className="hover:text-[#00E5FF] transition-colors">
            About
          </Link>
          <span>&bull;</span>
          <Link to="/contact" className="hover:text-[#00E5FF] transition-colors">
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </PageLayout>
  );
};

export default NotFound;
