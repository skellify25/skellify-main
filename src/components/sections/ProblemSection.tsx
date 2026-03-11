"use client"

import React from "react"
import { motion } from "motion/react"
import { problems } from "@/constants/contact"

export function ProblemSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag">The Problem</span>

          <h2 className="text-[30px] md:text-[36px] font-extrabold text-foreground tracking-tight">
            The Gap Between Learning
            <br />
            <span className="text-primary">and Real Engineering</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-base group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-primary/10">
                <item.icon size={22} className={item.color === "accent" ? "text-accent" : "text-primary"} />
              </div>

              <div className={`w-8 h-0.5 mb-4 rounded-full transition-all duration-300 group-hover:w-16 ${item.color === "accent" ? "bg-accent" : "bg-primary"}`} />

              <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}