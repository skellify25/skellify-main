"use client";
import { motion } from "motion/react";

const techs = ["Next.js", "TypeScript", "Python", "Docker", "AWS", "Selenium", "PostgreSQL", "React"];

export function TechStackSection() {
  return (
    <div className="py-12 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.02]">
      <div className="container-xl">
        <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 mb-10">
          Powered by Industry Standard Technologies
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {techs.map((t) => (
             <span key={t} className="text-xl md:text-2xl font-bold text-slate-500 dark:text-slate-400">{t}</span>
           ))}
        </div>
      </div>
    </div>
  );
}