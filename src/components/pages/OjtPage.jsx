"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Award,
  Video,
  IndianRupee,
  ExternalLink,
  CalendarDays,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

/* -------------------- OJT DATA -------------------- */

const OJT_PROGRAMS = [
  {
    id: "automation-testing-ojt-program",
    title: "Automation Testing OJT Program (Industry Practice)",
    description:
      "A hands-on On-the-Job Training program focused on real-world automation testing practices. Participants work on live websites, build automation frameworks, and follow industry-level QA workflows.",
    duration: "1 Month OJT",
    mode: "Online",
    certificate: true,
    price: "3,000",
    offerPrice: "1,499",
    formUrl: "https://forms.gle/9uTdGVwKN8V4dyZT8",
    highlights: [
      "Live Website Automation Testing",
      "Automation Framework Development",
      "Bug Reporting & Defect Tracking Process",
      "Real-world Project Implementation",
      "Certificate from Skellify (ISO 9001:2015 certified organization)",
    ],
  },
  {
    id: "web-development-ojt-program",
    title: "Web Development OJT Program (Live Project Based)",
    description:
      "An industry-oriented OJT program where participants contribute to real-world web applications, work with APIs, and collaborate using professional development workflows.",
    duration: "1 Month OJT",
    mode: "Online",
    certificate: true,
    price: "3,000",
    offerPrice: "1,499",
    formUrl: "https://forms.gle/9ooHGVh9RstUfMFw8",
    highlights: [
      "Frontend Architecture & Component Design",
      "API & Backend Integration",
      "GitHub Collaboration & Version Control",
      "Live Project Development",
      "Certificate from Skellify (ISO 9001:2015 certified organization)",
    ],
  },
  {
    id: "app-development-ojt-program",
    title: "App Development OJT Program (Mobile Application)",
    description:
      "A practical OJT program focused on building and debugging mobile applications, covering UI implementation, API integration, and application lifecycle understanding.",
    duration: "1 Month OJT",
    mode: "Online",
    certificate: true,
    price: "3,000",
    offerPrice: "1,499",
    formUrl: "https://forms.gle/gd5A8DnEkJXEwYYu7",
    highlights: [
      "Mobile UI/UX Implementation",
      "State Management & Application Flow",
      "API Integration & Data Handling",
      "Real-world App Project Development",
      "Certificate from Skellify (ISO 9001:2015 certified organization)",
    ],
  },
];

/* -------------------- COMPONENT -------------------- */

export default function OjtPage() {
  const [activeProgram, setActiveProgram] = useState(null);

  const handleApply = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <section className="pt-28 pb-20 container mx-auto px-4 md:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          On-the-Job Training (OJT)
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          Industry-oriented training programs designed to give you real work
          experience through live projects, guided mentorship, and professional
          certification — not simulated tasks.
        </p>
      </motion.div>

      {/* OJT Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {OJT_PROGRAMS.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {program.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {program.description}
              </p>

              <div className="grid grid-cols-2 gap-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {program.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  Certificate
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  Online
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl mb-6">
                <span className="text-xs line-through text-slate-400 flex items-center">
                  <IndianRupee className="w-3 h-3" />
                  {program.price}
                </span>
                <span className="text-xl font-black text-blue-600 flex items-center">
                  <IndianRupee className="w-5 h-5" />
                  {program.offerPrice}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setActiveProgram(program)}
                className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer
                  hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                View OJT Details
              </button>

              {/* <button
                onClick={() => handleApply(program.formUrl)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold cursor-pointer
                  hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
              >
                Apply Now
                <ExternalLink className="w-4 h-4" />
              </button> */}

              <button
                disabled={true}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all
    /* Standard Styles (Ignored when disabled) */
    bg-blue-600 text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg active:scale-95
    /* Disabled Styles */
    disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:active:scale-100 disabled:shadow-none"
              >
                Application Closed
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* OJT Modal */}
      <AnimatePresence>
        {activeProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="bg-white dark:bg-slate-800 rounded-3xl max-w-2xl w-full p-6 md:p-8 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {activeProgram.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Program Details & Training Focus
              </p>

              <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
                {activeProgram.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveProgram(null)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold cursor-pointer
                    hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  Close
                </button>
                {/* <button
                  onClick={() => handleApply(activeProgram.formUrl)}
                  className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold cursor-pointer
                    hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
                >
                  Apply Now
                </button> */}
                <button
                  disabled={true}
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all
    /* Standard Styles (Ignored when disabled) */
    bg-blue-600 text-white cursor-pointer hover:bg-blue-700 hover:shadow-lg active:scale-95
    /* Disabled Styles */
    disabled:bg-gray-400 disabled:text-gray-100 disabled:cursor-not-allowed disabled:active:scale-100 disabled:shadow-none"
                >
                  Application Closed
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
