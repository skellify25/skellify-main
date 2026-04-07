"use client"

import React from "react"
import Link from "next/link"
import { motion } from "motion/react"
import { ArrowRight, Globe, Smartphone, TestTube2, GitBranch } from "lucide-react"
import { homeServices } from "@/constants/contact"



export function ServicesSection() {

  return (
    <section className="section-padding bg-background">

      <div className="container-xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >

          <div>
            <span className="section-tag">Services</span>

            <h2 className="text-[30px] md:text-[36px] font-extrabold text-foreground tracking-tight">
              Engineering Services
            </h2>

            <p className="text-muted mt-3 max-w-xl">
              End-to-end software and automation solutions delivered by engineers who understand quality from the ground up.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-primary text-sm flex items-center gap-2"
          >
            Request Consultation
            <ArrowRight size={16} />
          </Link>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {homeServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-base group flex flex-col sm:flex-row justify-center gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <service.icon size={22} className="text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}