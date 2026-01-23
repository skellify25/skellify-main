"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Award,
  Layers,
  Video,
  IndianRupee,
  ExternalLink,
  CalendarDays,
  MessageCircle,
  Info,
} from "lucide-react";

// 1. Static Course Data with updated highlights
const COURSES = [
  {
    id: "foundation-skill",
    title: "Foundation Skill Development Course",
    description:
      "A comprehensive 7-month program covering Frontend, Python, Automation, and API basics for students.",
    duration: "7 Months",
    level: "Class 9th - Graduation",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "9,999",
    offerPrice: "4,999",
    formUrl: "https://forms.gle/xV14cyGDGHyjR9tB6",
    highlights: [
      "Frontend: HTML, CSS & JavaScript",
      "Python Programming & OOPs Logic",
      "UI Automation with Selenium",
      "API Testing Basics (Postman)",
      "Portfolio Website Development",
      "Logical Problem Solving",
      "Introduction to Git & GitHub",
    ],
  },
  {
    id: "python-oops",
    title: "Python Programming with OOPs",
    description:
      "Master Python fundamentals and Object-Oriented Programming to build a strong logic foundation.",
    duration: "3 Months",
    level: "Class 9th - Graduation",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "5,999",
    offerPrice: "2,999",
    formUrl: "https://forms.gle/HEZnryu37EWhXdQK6",
    highlights: [
      "Python Syntax & Data Types",
      "Advanced OOPs: Classes & Objects",
      "Exception Handling & Debugging",
      "File I/O & Data Management",
      "Library Management System Project",
      "Functional Programming Basics",
      "Scripting for Daily Tasks",
    ],
  },
  {
    id: "java-oops",
    title: "Java Programming with OOPs",
    description:
      "Deep dive into Java, JVM architecture, and Collections framework. Perfect for building backend logic.",
    duration: "3 Months",
    level: "Class 9th - Graduation",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "5,999",
    offerPrice: "2,999",
    formUrl: "https://forms.gle/Vrk2K7EGqjZ9RyHW8",
    highlights: [
      "JVM, JRE & JDK Architecture",
      "Inheritance, Polymorphism & Interfaces",
      "Java Collections Framework (List, Set, Map)",
      "Multithreading & Stream API",
      "Memory Management Basics",
      "Abstract Classes & Encapsulation",
      "Building a Console-based Application",
    ],
  },
  {
    id: "sdet-program",
    title: "SDET (Software Development Engineer in Test)",
    description:
      "Advanced 9-month program for graduates to become job-ready automation engineers.",
    duration: "9 Months",
    level: "Graduation & Above",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "19,999",
    offerPrice: "9,999",
    formUrl: "https://forms.gle/N7G18ivcsdLXcxNs5",
    highlights: [
    "Core & Advanced Java with Gradle",
    "Selenium WebDriver & TestNG Integration",
    "Rest Assured API Automation",
    "CI/CD Pipeline Integration with Jenkins",
    "Agile Testing & Jira Ticket Management",
    "Database Testing with SQL",
    "Mock Interviews & Resume Optimization"
  ],
  },
];

export default function CoursePage() {
  const handleApplyNow = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      console.error("Form URL not provided for this course.");
    }
  };

  return (
    <section className="py-12 md:py-24 container mx-auto px-6">
      {/* --- NEW BATCH ANNOUNCEMENT BANNER --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-blue-900 shadow-2xl"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Date */}
          <div className="bg-blue-600 p-8 flex flex-col items-center justify-center text-white text-center min-w-[240px]">
            <CalendarDays className="w-10 h-10 mb-2 opacity-80" />
            <p className="text-sm font-bold uppercase tracking-widest opacity-90">
              Next Batch Starts
            </p>
            <h3 className="text-3xl font-black mt-1">06 APRIL</h3>
            <p className="text-lg font-medium opacity-90">2026</p>
          </div>

          {/* Right Side: Instructions */}
          <div className="p-6 md:p-8 flex-1 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 dark:text-emerald-400 font-bold uppercase text-2xl tracking-tighter">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                No Instant Payment Required
              </div>
              <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Secure your spot today with zero upfront cost.
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl">
                Just fill out the application form to receive your invite to the{" "}
                <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500 underline-offset-4 tracking-tight">
                  Skellify WhatsApp Group
                </span>
                . Full schedule, meeting links, and payment details will be
                shared directly there.
              </p>
            </div>

            {/* Quick Icon Group */}
            <div className="hidden xl:flex items-center gap-4">
              <a
                href="https://chat.whatsapp.com/Fi19RL9SBtF4jWklMqsqsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-emerald-200 dark:hover:border-emerald-900 cursor-pointer active:scale-95 group"
              >
                <MessageCircle className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-bold text-slate-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                  JOIN GROUP
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
        className="max-w-3xl mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Our Courses
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
          Industry-vetted programs at <strong>Skellify</strong>. Gain hands-on
          OJT experience while mastering modern technology.
        </p>
      </motion.div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {COURSES.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="border border-slate-200 dark:border-slate-700 rounded-3xl p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                  {course.id === "sdet-program" ? "Job Ready" : "Skill Up"}
                </span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">
                {course.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs mb-8 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  {course.level}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  Certificate
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  {course.mode}
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-8 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                <span className="text-xs text-slate-400 line-through flex items-center gap-0.5">
                  <IndianRupee className="w-3 h-3" />
                  {course.price}
                </span>
                <span className="text-2xl font-black text-blue-600 flex items-center gap-0.5">
                  <IndianRupee className="w-5 h-5" />
                  {course.offerPrice}
                </span>
                <span className="ml-auto text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                  50% OFF
                </span>
              </div>

              <div className="space-y-3 mb-2">
                <p className="font-bold text-[10px] uppercase tracking-widest text-slate-400">
                  What you will learn
                </p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2.5">
                  {course.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 group">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0 group-hover:scale-150 transition-transform" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleApplyNow(course.formUrl)}
              className="mt-10 group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all cursor-pointer shadow-xl shadow-blue-200 dark:shadow-none active:scale-95"
            >
              Enroll Now
              <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
