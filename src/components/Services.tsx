"use client";

import React from "react";
import { motion } from "motion/react";
import { Monitor, BarChart3 } from "lucide-react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import Link from "next/link";

// Service Data
const services = [
  {
    title: "Foundation Course",
    href: "/courses",
    icon: <Monitor className="w-8 h-8 text-blue-500 dark:text-blue-400" />,
    description:
      "A beginner-friendly foundation program designed to build strong fundamentals in software and development.",
    items: [
      "Version Control with Git & GitHub",
      "Web Development Fundamentals",
      "Python Programming",
      "Introduction to Automation Testing",
      "Mini Projects & Assignments",
      "Course Certificate",
    ],
    className:
      "border-blue-100 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-900/10",
  },
  {
    title: "On Job Training (OJT)",
    href: "/ojt",
    icon: <BarChart3 className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
    description:
      "One-month industry-oriented training programs for BCA, BSc.IT, and BCS students with hands-on project exposure.",
    items: [
      "Web Development",
      "Automation Testing",
      "Android Development",
      "Live Project Work",
      "Experience Certificate",
    ],
    className:
      "border-emerald-100 dark:border-emerald-900/30 bg-emerald-50/50 dark:bg-emerald-900/10",
  },
  {
    title: "IT Services",
    href: "/services",
    icon: <Monitor className="w-8 h-8 text-purple-500 dark:text-purple-400" />,
    description:
      "Custom software solutions for startups, institutions, and businesses to build, scale, and maintain digital products.",
    items: [
      "Website & Web Application Development",
      "Mobile App Development",
      "Automation & QA Solutions",
      "Maintenance & Support",
      "System Upgrades & Integration",
    ],
    className:
      "border-purple-100 dark:border-purple-900/30 bg-purple-50/50 dark:bg-purple-900/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
          >
            Our <span className="text-primary">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-slate-600 dark:text-slate-400"
          >
            Practical education programs and reliable IT services designed for students and growing businesses.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <Link href={service.href} key={index} className="group h-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl cursor-pointer h-full overflow-hidden flex flex-col justify-between ${service.className}`}
              >
                <BackgroundRippleEffect rows={12} cols={32} cellSize={24} />

                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-300"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
