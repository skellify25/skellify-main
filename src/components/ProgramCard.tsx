"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clock,
  Award,
  Monitor,
  CalendarDays,
  ExternalLink,
  CheckCircle2,
  X,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

export interface Program {
  icon?: LucideIcon;
  title: string;
  description: string;
  level?: string;
  duration: string;
  mode: string;
  classesPerWeek: string;
  certificate: boolean;
  originalPrice: number;
  price: number;
  curriculum: string[];
  projects?: string[];
  outcomes?: string[];
  enrollUrl?: string;
  featured?: boolean;
}

function getDiscount(original: number, current: number): number {
  return Math.round(((original - current) / original) * 100);
}

export default function ProgramCard({
  program,
  index = 0,
}: {
  program: Program;
  index?: number;
}) {
  const [showDetail, setShowDetail] = useState(false);
  const discount = getDiscount(program.originalPrice, program.price);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        whileHover={{ y: -6 }}
        className="group relative flex flex-col rounded-xl bg-card border border-border p-6 
  hover:shadow-lg transition-all duration-300 hover:border-accent/50"
      >
        {/* Glow */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-gradient-to-r from-accent/10 to-transparent" />

        {/* TOP SECTION */}
        <div className="mb-5">
          <span className="text-xs font-semibold text-primary block mb-2">
            {program.level}
          </span>

          <h3 className="text-base font-bold leading-snug mb-3">
            {program.title}
          </h3>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {program.description}
          </p>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-border my-4" />

        {/* INFO SECTION */}
        <div className="flex justify-between text-xs text-muted-foreground mb-5">
          <span>{program.duration}</span>
          <span>{program.classesPerWeek}</span>
        </div>

        {/* PRICE SECTION */}
        <div className="mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">
              ₹{program.price.toLocaleString("en-IN")}
            </span>
            <span className="text-xs line-through text-muted-foreground">
              ₹{program.originalPrice.toLocaleString("en-IN")}
            </span>
            {discount > 0 && (
              <span className="text-[10px] font-semibold text-green-600">
                {discount}% OFF
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-3 mt-auto pt-2">
          <button
            onClick={() => setShowDetail(true)}
            className="flex-1 text-xs font-medium border border-border rounded-md py-2.5 hover:bg-muted transition"
          >
            View Details
          </button>

          <Link
            href={program.enrollUrl || "#"}
            target="_blank"
            className="flex-1 text-xs font-semibold bg-accent text-accent-foreground rounded-md py-2.5 text-center"
          >
            Enroll
          </Link>
        </div>
      </motion.div>

      {/* Modal */}
      {showDetail && (
        <DetailModal program={program} onClose={() => setShowDetail(false)} />
      )}
    </>
  );
}

function DetailModal({
  program,
  onClose,
}: {
  program: Program;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* 🔥 Blur + Overlay FIX */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative z-10 w-full max-w-lg bg-white dark:bg-slate-900 rounded-xl p-6 shadow-2xl mx-4"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          >
            <X size={18} />
          </button>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-1">{program.title}</h3>

          <p className="text-sm text-muted-foreground mb-4">
            Curriculum & Details
          </p>

          {/* Curriculum */}
          <div className="max-h-[60vh] overflow-y-auto space-y-3 pr-2">
            {program.curriculum.map((item, i) => (
              <p key={i} className="text-sm text-foreground">
                • {item}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-end">
            <a
              href={program.enrollUrl}
              target="_blank"
              className="bg-accent text-accent-foreground px-4 py-2 rounded-md text-sm font-medium"
            >
              Enroll Now
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
