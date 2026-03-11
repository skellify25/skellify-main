"use client";

import React from "react";
import { motion } from "motion/react";
import { steps } from "@/constants/contact";


export function ProcessSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Process</span>

          <h2 className="text-[30px] md:text-[36px] font-extrabold text-foreground tracking-tight">
            How It Works
          </h2>

          <p className="text-muted mt-4 max-w-xl mx-auto">
            A clear, structured path from your first line of code to
            shipping in production environments.
          </p>
        </motion.div>

        <div className="relative">
        <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-[#1E3A8A] via-[#F97316] to-[#1E3A8A] opacity-20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white text-lg font-extrabold mb-6"
                  style={{ background: step.color }}
                >
                  {step.number}
                </div>

                <h3 className="text-base font-bold text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
