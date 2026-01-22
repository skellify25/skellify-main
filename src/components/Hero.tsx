"use client";

import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import MarqueeBadge from "./marquee-badge";
import { heroSpecialisationList } from "@/constants/uiconfig";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative container mx-auto min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background dots Elements */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-size-[20px_20px]",
          "bg-[radial-gradient(#d4d4d4_1px,transparent_1.5px)]",
          "dark:bg-[radial-gradient(#404040_1px,transparent_1.5px)]"
        )}
      />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 inline-block"
          >
            <span className="px-2 py-1 sm:px-4 sm:py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-500 text-[12px] sm:text-xs font-semibold tracking-wide uppercase flex items-center gap-2">
              <span className="relative h-2 w-2 rounded-full bg-emerald-500 after:absolute after:inset-0 after:animate-ping after:rounded-full after:bg-emerald-500 after:opacity-75 after:content-['']" />
              <span>Accepting Clients</span>
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-none font-sans">
            Where <span className="text-primary">learning</span> meets{" "}
            <span className="text-primary">technology</span> @{" "}
            <span className="text-primary">
              Skell
              <span className="text-black dark:text-white">
                ify
                <span className="inline-block size-[0.15em] rounded-full bg-current " />
              </span>
            </span>
          </h1>

          <p className="text-sm md:text-base text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Empowering students with practical tech skills and helping
            businesses build reliable software solutions.
          </p>
          <MarqueeBadge nameList={heroSpecialisationList} />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-3 py-[6px] w-full sm:w-fit bg-emerald-500/20 border border-emerald-400 dark:bg-emerald-500/70 text-black dark:text-white text-base font-medium rounded-xl shadow-lg hover:bg-emerald-500/50 dark:hover:bg-emerald-500/50 transition-all flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Book a Free Call
            </motion.a>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="px-3 py-[6px] w-full sm:w-fit bg-background text-foreground border border-foreground/10 text-base font-medium rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="w-1 h-12 rounded-full bg-linear-to-t from-primary to-transparent opacity-50" />
      </motion.div>
    </section>
  );
};

export default Hero;
