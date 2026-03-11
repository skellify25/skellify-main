"use client"

import React from "react"
import { motion } from "motion/react"
import { pillars } from "@/constants/contact"


export function WhatWeDoSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-tag">What We Do</span>

          <h2 className="text-[30px] md:text-[36px] font-extrabold text-foreground tracking-tight mb-4">
            What Skellify Does
          </h2>

          <p className="text-muted text-lg">
            We bridge the gap between learning and production by combining structured education with real engineering delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {pillars.map((pillar, i) => (

            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative group"
            >

              <div className="card-base h-full relative overflow-hidden">

                <span className="absolute top-4 right-6 text-6xl font-black opacity-[0.3] select-none text-primary">
                  {pillar.number}
                </span>

                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary/10 group-hover:scale-110 transition-transform">
                  <pillar.icon size={26} className="text-primary" />
                </div>

                <span className="text-xs font-bold uppercase tracking-wider mb-3 block text-primary">
                  {pillar.highlight}
                </span>

                <h3 className="text-2xl font-extrabold text-foreground mb-3">
                  {pillar.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}