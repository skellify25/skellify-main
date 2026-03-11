"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight } from "lucide-react";

// Animated SVG tech illustration
function TechIllustration() {
  return (
    <div className="relative w-full max-w-130 mx-auto">
      <div className="absolute inset-0 bg-gradient-radial from-[#1E3A8A]/20 via-transparent to-transparent rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative"
      >
        <svg
          viewBox="0 0 520 440"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          {/* Background circles */}
          <circle cx="260" cy="220" r="200" fill="#1E3A8A" opacity="0.05" />
          <circle cx="260" cy="220" r="150" fill="#1E3A8A" opacity="0.05" />

          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line
              key={`h${i}`}
              x1="60"
              y1={100 + i * 60}
              x2="460"
              y2={100 + i * 60}
              stroke="#1E3A8A"
              strokeOpacity="0.08"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <line
              key={`v${i}`}
              x1={60 + i * 66}
              y1="80"
              x2={60 + i * 66}
              y2="380"
              stroke="#1E3A8A"
              strokeOpacity="0.08"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          ))}

          {/* Main window */}
          <rect x="80" y="80" width="280" height="200" rx="12" fill="#0F172A" />
          <rect x="80" y="80" width="280" height="32" rx="12" fill="#1E2A3A" />
          <rect x="80" y="100" width="280" height="12" fill="#1E2A3A" />
          <circle cx="100" cy="96" r="5" fill="#EF4444" opacity="0.8" />
          <circle cx="116" cy="96" r="5" fill="#F59E0B" opacity="0.8" />
          <circle cx="132" cy="96" r="5" fill="#22C55E" opacity="0.8" />

          {/* Code lines */}
          <rect x="100" y="126" width="120" height="8" rx="4" fill="#1E3A8A" opacity="0.6" />
          <rect x="100" y="144" width="80" height="8" rx="4" fill="#F97316" opacity="0.5" />
          <rect x="100" y="162" width="160" height="8" rx="4" fill="#1E3A8A" opacity="0.4" />
          <rect x="100" y="180" width="60" height="8" rx="4" fill="#22C55E" opacity="0.5" />
          <rect x="100" y="198" width="140" height="8" rx="4" fill="#1E3A8A" opacity="0.3" />
          <rect x="100" y="216" width="100" height="8" rx="4" fill="#F97316" opacity="0.4" />
          <rect x="100" y="234" width="120" height="8" rx="4" fill="#1E3A8A" opacity="0.5" />

          {/* Terminal card */}
          <motion.g
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="280" y="200" width="180" height="120" rx="12" fill="#121826" stroke="#1E3A8A" strokeOpacity="0.3" />
            <rect x="280" y="200" width="180" height="28" rx="12" fill="#1E2A3A" />
            <rect x="280" y="214" width="180" height="14" fill="#1E2A3A" />

            <text x="295" y="219" fill="#22C55E" fontSize="10" fontFamily="monospace">$ skellify run</text>
            <text x="295" y="240" fill="#94A3B8" fontSize="9" fontFamily="monospace">✓ Tests passing</text>
            <text x="295" y="256" fill="#94A3B8" fontSize="9" fontFamily="monospace">✓ Build success</text>
            <text x="295" y="272" fill="#F97316" fontSize="9" fontFamily="monospace">→ Deploy ready</text>

            <motion.rect
              x="295"
              y="282"
              width="6"
              height="10"
              fill="#22C55E"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.g>

          {/* Stats card */}
          <motion.g
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <rect x="60" y="300" width="160" height="90" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />
            <text x="80" y="324" fill="#64748B" fontSize="10" fontFamily="sans-serif">Students Trained</text>
            <text x="80" y="348" fill="#0F172A" fontSize="24" fontWeight="bold" fontFamily="sans-serif">10+</text>
            <rect x="80" y="358" width="60" height="4" rx="2" fill="#F97316" />
            <rect x="80" y="358" width="100" height="4" rx="2" fill="#E2E8F0" />
          </motion.g>

          {/* Floating badges */}
          <motion.g
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <rect x="350" y="110" width="110" height="40" rx="20" fill="#F97316" />
            <text x="371" y="135" fill="white" fontSize="11" fontWeight="600" fontFamily="sans-serif">ISO 9001:2015</text>
          </motion.g>

          {/* Connection lines */}
          <line x1="360" y1="150" x2="340" y2="200" stroke="#F97316" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />
          <line x1="240" y1="280" x2="220" y2="300" stroke="#1E3A8A" strokeOpacity="0.3" strokeWidth="1" strokeDasharray="4 4" />

          {/* Dots */}
          <circle cx="360" cy="150" r="3" fill="#F97316" />
          <circle cx="240" cy="280" r="3" fill="#1E3A8A" />
          <circle cx="460" cy="160" r="4" fill="#F97316" opacity="0.4" />
          <circle cx="440" cy="320" r="6" fill="#1E3A8A" opacity="0.2" />
          <circle cx="70" cy="260" r="5" fill="#F97316" opacity="0.3" />
        </svg>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#0B0F19]">

      {/* Background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 bg-gradient-radial from-[#1E3A8A]/10 via-transparent to-transparent rounded-full translate-x-1/4 -translate-y-1/4"/>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-gradient-radial from-[#F97316]/8 via-transparent to-transparent rounded-full -translate-x-1/4 translate-y-1/4"/>
      </div>

      <div className="container-xl relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="mb-6"
            >
              <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse"/>
                ISO 9001:2015 Certified Training & Engineering
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="text-4xl md:text-4xl lg:text-[38px] font-extrabold leading-[1.1] tracking-tight text-[#0F172A] dark:text-white mb-6"
            >
              Build Real <span className="text-[#1E3A8A] dark:text-[#60A5FA]">Software</span> Skills.
              <br/>
              Ship Reliable <span className="text-[#F97316]">Automation</span> Systems.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="text-lg text-[#64748B] dark:text-[#94A3B8] leading-relaxed mb-8 max-w-xl"
            >
              Skellify connects learning with real engineering experience by training developers and building automation-driven software solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36 }}
              className="w-full flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link href="/courses" className="btn-primary text-sm flex items-center gap-2">
                Explore Courses <ArrowRight size={18}/>
              </Link>

              <Link href="/contact" className="btn-secondary text-base px-8 py-3.5">
                Talk to Us
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.48 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "10+", label: "Students Trained" },
                { value: "5+", label: "Projects Delivered" },
                { value: "4+", label: "Courses" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-[#0F172A] dark:text-white">{stat.value}</div>
                  <div className="text-sm text-[#64748B] dark:text-[#94A3B8]">{stat.label}</div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <TechIllustration/>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronRight size={20} className="text-[#94A3B8] rotate-90"/>
      </motion.div>

    </section>
  );
}