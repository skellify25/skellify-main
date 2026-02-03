"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  Award,
  Video,
  CalendarDays,
  MessageCircle,
  IndianRupee,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

/* -------------------- COURSE DATA -------------------- */

const COURSES = [
  {
    id: "foundation-skill-development",
    title: "Foundation Skill Development Program",
    description:
      "A structured foundation program designed to take learners from zero technical knowledge to real-world development, automation testing, and API fundamentals using industry tools and hands-on practice.",
    duration: "4 Months",
    frequency: "5 classes/week",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "9,999",
    offerPrice: "4,999",
    formUrl: "https://forms.gle/8Si6GePwSBYGepg27",
    highlights: [
      "Development Environment Setup: VS Code & Linux Basics",
      "Web Development Fundamentals: HTML, CSS & JavaScript",
      "Version Control & Collaboration using Git and GitHub",
      "Live Project Deployment using Netlify / Vercel",
      "Python Programming with Core Concepts & OOPs",
      "Logical Problem Solving using Python",
      "Automation Testing Basics with Selenium (UI Testing)",
      "API Fundamentals & API Testing using Postman",
      "Certificate from Skellify (ISO 9001:2015 certified organization)",
    ],
  },
  {
    id: "python-programming-oops-foundation",
    title: "Python Programming with OOPs (Core Concepts & Logic)",
    description:
      "A beginner-friendly Python course focused on programming fundamentals, core data structures, and object-oriented thinking to build strong logic and clean coding practices.",
    duration: "3 Months",
    frequency: "3 classes/week",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "5,999",
    offerPrice: "2,999",
    formUrl: "https://forms.gle/cBhjDimrHXCBXNa8A",
    highlights: [
      "Introduction to Programming & Python Environment Setup",
      "Python Basics: Syntax, Variables & Data Types",
      "Control Flow: Conditions, Loops & Logical Thinking",
      "Functions & Modular Programming Concepts",
      "Core Data Structures: List, Tuple, Set & Dictionary",
      "Object-Oriented Programming: Classes & Objects",
      "OOPs Principles: Inheritance, Polymorphism & Encapsulation",
      "Exception Handling, Debugging & File Handling Basics",
      "Certificate from Skellify (ISO 9001:2015 certified organization)",
    ],
  },
  {
    id: "java-programming-oops-foundation",
    title: "Java Programming with OOPs (Core Concepts & Logic)",
    description:
      "A Java course focused on building strong programming fundamentals, object-oriented design, and logical problem-solving for backend and enterprise-level development paths.",
    duration: "3 Months",
    frequency: "3 classes/week",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "5,999",
    offerPrice: "2,999",
    formUrl: "https://forms.gle/vzrjcm4wAboXSy3C7",
    highlights: [
      "Introduction to Java & Development Environment Setup",
      "Java Basics: Syntax, Variables & Data Types",
      "Control Flow: Conditional Statements & Loops",
      "Methods & Modular Programming in Java",
      "Object-Oriented Programming: Classes & Objects",
      "OOPs Principles: Inheritance, Polymorphism & Encapsulation",
      "Arrays & Introduction to Java Collections",
      "Exception Handling & Basic Debugging Concepts",
      "Certificate from Skellify (ISO 9001:2015 certified organization)",
    ],
  },
];

/* -------------------- COMPONENT -------------------- */

export default function CoursePage() {
  const [activeCourse, setActiveCourse] = useState(null);

  const handleEnroll = (url) => {
    if (url) window.open(url, "_blank");
  };

  return (
    <section className="pt-28 pb-20 container mx-auto px-4 md:px-6">

      {/* --- NEW BATCH ANNOUNCEMENT BANNER ---  */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-blue-900 shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Date */}
          <div className="bg-blue-600 p-8 flex flex-col items-center justify-center text-white text-center min-w-[260px]">
            <CalendarDays className="w-10 h-10 mb-2 opacity-80" />
            <p className="text-sm font-bold uppercase tracking-widest opacity-90">
              Next Batch Starts On
            </p>
            <h3 className="text-3xl font-black mt-1">06 APRIL</h3>
            <p className="text-lg font-medium opacity-90">2026</p>
          </div>

          {/* Right Side: Instructions */}
          <div className="p-6 md:p-8 flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 dark:text-blue-400 font-bold uppercase text-xl tracking-tight">
                <ShieldCheck className="w-6 h-6" />
                Free Registration Open
              </div>

              <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Apply now to reserve your seat.{" "}
                <br className="hidden md:block" />
                Finalize your enrollment on WhatsApp.
              </h4>

              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl">
                Submit your application today with{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  zero upfront payment
                </span>
                . Once accepted, you will join the{" "}
                <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500 underline-offset-4">
                  Skellify WhatsApp Group
                </span>{" "}
                where we will share the full details and complete the fee
                payment process before the batch begins.
              </p>
            </div>

            {/* Quick Icon Group */}
            <div className="flex items-center">
              <a
                href="https://chat.whatsapp.com/Fi19RL9SBtF4jWklMqsqsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 px-8 py-5 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-emerald-200 dark:hover:border-emerald-900 group"
              >
                <MessageCircle className="w-7 h-7 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-black text-slate-500 group-hover:text-emerald-600">
                  JOIN SKELLIFY
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      {/* --- END BANNER --- */}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
          Courses Built for Real Skills
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
          Industry-aligned programs at <strong>Skellify</strong> designed to
          build strong fundamentals, practical experience, and job-ready
          confidence — without overwhelming theory.
        </p>
      </motion.div>
      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {course.title}
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-y-4 text-xs text-slate-700 dark:text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  Certificate
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  Live Online
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="w-4 h-4 text-blue-600" />
                  {course.frequency}
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl mb-6">
                <span className="text-xs line-through text-slate-400 flex items-center">
                  <IndianRupee className="w-3 h-3" />
                  {course.price}
                </span>
                <span className="text-xl font-black text-blue-600 flex items-center">
                  <IndianRupee className="w-5 h-5" />
                  {course.offerPrice}
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setActiveCourse(course)}
                className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-200 cursor-pointer
                  hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95"
              >
                View Curriculum
              </button>

              <button
                onClick={() => handleEnroll(course.formUrl)}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600 text-white font-bold cursor-pointer
                  hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
              >
                Enroll Now
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Curriculum Modal */}
      <AnimatePresence>
        {activeCourse && (
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
                {activeCourse.title}
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Complete Curriculum Overview • {activeCourse.frequency}
              </p>

              <ul className="space-y-3 text-slate-700 dark:text-slate-300 mb-8">
                {activeCourse.highlights.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 bg-blue-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <button
                  onClick={() => setActiveCourse(null)}
                  className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold cursor-pointer
                    hover:bg-slate-100 dark:hover:bg-slate-700 transition-all active:scale-95"
                >
                  Close
                </button>
                <button
                  onClick={() => handleEnroll(activeCourse.formUrl)}
                  className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-bold cursor-pointer
                    hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}