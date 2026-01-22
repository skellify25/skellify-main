"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Target, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { WHATSAPP_LINK, CALENDAR_LINK } from "@/constants/contact";

export default function AboutPage() {
  return (
    <section className="py-24 container mx-auto px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-20"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
          Where Learning Meets <span className="text-blue-600">Innovation</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-xl leading-relaxed">
          Skellify is a technology-driven ecosystem. We don't just teach technology; we build it. 
          By bridging the gap between academic learning and industry execution, we empower the next 
          generation of developers while delivering world-class digital solutions to businesses.
        </p>
      </motion.div>

      {/* Core Pillars (Mission/Vision) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group border border-slate-200 dark:border-slate-700 rounded-3xl p-10 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To democratize high-end technical expertise. We provide students with the "On-Job" 
            experience they lack and provide businesses with the "Technical Precision" they need to scale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group border border-slate-200 dark:border-slate-700 rounded-3xl p-10 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
            <Sparkles className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            To be the global benchmark for "Applied Technology"—a place where a student's first 
            line of code contributes to a real-world business solution.
          </p>
        </motion.div>
      </div>

      {/* The Skellify Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <h2 className="text-4xl font-bold mb-16 text-center">Our Dual Impact</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Students */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 font-bold text-sm">
              <GraduationCap className="w-4 h-4" /> FOR STUDENTS
            </div>
            <h3 className="text-3xl font-bold">Bridging the Skill Gap</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              The industry moves faster than textbooks. We provide real-world OJT (On-Job Training) and Courses that matter.
            </p>
            <ul className="space-y-4">
              {['Industry-recognized Certifications', 'Live Project Mentorship', 'Modern Tech Stack Training', 'Career Guidance'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For Businesses */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-bold text-sm">
              <Briefcase className="w-4 h-4" /> FOR BUSINESSES
            </div>
            <h3 className="text-3xl font-bold">Scalable Digital Engineering</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              From MVP development to long-term technical support, we build the engine that drives your business.
            </p>
            <ul className="space-y-4">
              {['Custom Software Development', 'Dedicated QA & Testing', 'System Maintenance', 'Technical Consultation'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Interactive CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center bg-slate-900 dark:bg-blue-600 rounded-[3rem] p-12 md:p-20 text-white shadow-2xl"
      >
        <h3 className="text-3xl md:text-5xl font-bold mb-6">
          Join the Skellify Ecosystem
        </h3>
        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-90">
          Whether you’re looking to launch your career or launch a product, 
          we have the tools and the talent to make it happen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-slate-900 font-bold hover:bg-slate-50 transition-all active:scale-95 cursor-pointer shadow-lg"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-transparent border border-white/30 text-white font-bold hover:bg-white/10 transition-all active:scale-95 cursor-pointer"
          >
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  );
}