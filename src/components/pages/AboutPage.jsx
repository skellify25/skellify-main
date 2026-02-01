"use client";

import { motion } from "framer-motion";
import { 
  Building2, 
  ShieldCheck, 
  MapPin, 
  FileText, 
  Target, 
  Users2, 
  CheckCircle,
  Mail,
  Phone,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="py-20 container mx-auto px-6 max-w-7xl">
      
      {/* 1. Brand Identity & Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center gap-2 text-blue-600 font-bold tracking-widest text-sm mb-4 uppercase">
            <span className="w-8 h-[2px] bg-blue-600"></span> About Skellify
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            Building Reliable <span className="text-blue-600">Technology & Talent</span>
          </h1>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Skellify is an MSME-registered technology training and services firm based in
            Ranchi, Jharkhand. We specialize in structured skill development programs,
            on-the-job training (OJT), and professional software solutions.
            As an ISO 9001:2015 IAF certified organization, our operations follow
            internationally recognized quality management standards.
          </p>

          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              ISO 9001:2015 IAF Certified
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium">
              <Building2 className="w-4 h-4 text-blue-500" />
              MSME Registered Enterprise
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800"
        >
          <div className="aspect-video bg-blue-600 flex flex-col items-center justify-center text-white p-12">
            <h2 className="text-3xl font-bold mb-4 italic">
              “Quality is achieved through discipline, not shortcuts.”
            </h2>
            <div className="w-20 h-1 bg-white/30 rounded-full"></div>
            <p className="mt-4 font-medium uppercase tracking-widest text-sm">
              Our Operating Principle
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. Corporate Information */}
      <div className="mb-24">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
          <FileText className="w-6 h-6 text-blue-600" /> Corporate Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Legal Entity Name</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">Skellify</p>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Certification</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              ISO 9001:2015 (IAF – Quality Management System)
            </p>
          </div>

          <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl">
            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Registered Office</p>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Ranchi, Jharkhand, India
            </p>
          </div>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="mb-24 bg-slate-50 dark:bg-slate-900/50 rounded-[3rem] p-8 md:p-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Principles
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Our work is governed by clearly defined principles that guide
            training delivery and technology execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Integrity</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We maintain transparent communication, documented processes,
              and realistic commitments with all stakeholders.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Quality Compliance</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Our ISO-certified framework ensures consistency, review,
              and continuous improvement across all offerings.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users2 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Skill Development</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We focus on industry-aligned training and practical exposure,
              especially for students and early-career professionals.
            </p>
          </div>

        </div>
      </div>

      {/* 4. Presence & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-red-500" /> Our Presence
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">
            Operating from Jharkhand’s capital city, Skellify contributes to
            regional skill development while supporting clients through
            remote-first collaboration models.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <span><strong>Training & OJT:</strong> Structured programs for students and professionals.</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
              <span><strong>Technology Services:</strong> Remote project execution with defined processes.</span>
            </li>
          </ul>
        </div>

        <div className="p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl">
          <h4 className="font-bold mb-4">Contact Information</h4>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>official.skellify@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <Phone className="w-5 h-5 text-blue-600" />
              <span>+91 7070584967</span>
            </div>
            <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span>Ranchi, Jharkhand, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* 5. CTA */}
      <div className="text-center bg-blue-600 rounded-3xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Partner With a Process-Driven Organization
        </h2>
        <p className="mb-8 opacity-90 max-w-xl mx-auto">
          Explore our training programs or learn how our structured
          technology services can support your business.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/services" className="px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-50 transition-all">
            Our Services
          </Link>
          <Link href="/courses" className="px-8 py-3 bg-transparent border border-white/50 text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
            Our Courses <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </section>
  );
}
