"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {

  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-surface p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl opacity-15" />
          </div>

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-accent bg-accent/15 border border-accent/25 px-4 py-1.5 rounded-full mb-6">
              Ready to Start?
            </span>
            <h2 className="text-3xl md:text-[44px] font-extrabold text-foreground leading-tight tracking-tight mb-5">
              Start Building Real
              <br />
              <span className="text-accent">Engineering Skills</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-10">
              Join hundreds of developers who have transformed their skills with Skellify's industry-focused programs.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/courses"
                className="btn-primary text-base px-8 py-3.5"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-base font-semibold text-foreground border-2 border-foreground/20 hover:border-white/40 px-8 py-3.5 rounded-[8px] transition-colors duration-200"
              >
                <MessageCircle size={18} />
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}