"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, CheckCircle2, Code2, Globe, TestTube2, Briefcase } from "lucide-react"
import { programs } from "@/constants/contact"



export function ProgramsSection() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <div>
            <span className="section-tag">Learning</span>

            <h2 className="text-[30px] md:text-[36px] font-extrabold text-foreground tracking-tight">
              Learning Programs
            </h2>

            <p className="text-muted mt-3 max-w-xl">
              Industry-focused programs designed to take you from fundamentals to production-ready engineering.
            </p>
          </div>

          <Link href="/courses" className="btn-primary text-sm flex items-center gap-2">
            View All Courses
            <ArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-base flex flex-col"
            >

              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${program.color}14` }}
                >
                  <program.icon size={20} style={{ color: program.color }} />
                </div>

                <span className="text-xs font-semibold text-muted bg-surface px-2.5 py-1 rounded-full">
                  {program.duration}
                </span>
              </div>

              <span
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: program.color }}
              >
                {program.level}
              </span>

              <h3 className="text-base font-bold text-foreground mb-4">
                {program.title}
              </h3>

              <ul className="flex flex-col gap-2.5 flex-1 mb-6">

                {program.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} style={{ color: program.color }} />
                    <span className="text-sm text-muted">
                      {topic}
                    </span>
                  </li>
                ))}

              </ul>

              <Link
                href="/courses"
                className="flex items-center gap-2 text-sm font-semibold"
                style={{ color: program.color }}
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}