"use client"

import React from "react"
import { motion } from "motion/react"
import { reasons } from "@/constants/contact"


export function WhySkellifySection() {
  return (
    <section className="section-padding bg-background text-white">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">Why Choose Us</span>

          <h2 className="text-[30px] md:text-[36px] font-extrabold tracking-tight">
            Why Skellify
          </h2>

          <p className="text-muted mt-4 max-w-xl mx-auto">
            We don't just teach — we build alongside you, delivering real skills through real experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-5 rounded-lg card-base group border border-white/10 hover:border-accent/30 transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                <reason.icon size={18} className="text-accent" />
              </div>

              <h3 className="text-sm font-bold text-foreground mb-1.5">
                {reason.title}
              </h3>

              <p className="text-xs text-muted leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}