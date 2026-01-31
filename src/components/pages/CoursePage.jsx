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
} from "lucide-react";

const COURSES = [
  {
    id: "foundation-skill-development",
    title: "Foundation Skill Development Program",
    description:
      "A structured 7-month foundation program designed to take students from zero technical knowledge to real-world development, automation testing, and API fundamentals. This course focuses on industry tools, logical thinking, hands-on practice, and deployment-ready skills to build a strong base for careers in software development, testing, and IT roles.",
    duration: "7 Months",
    level: "Class 9th & Above",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "9,999",
    offerPrice: "4,999",
    formUrl: "https://forms.gle/xV14cyGDGHyjR9tB6",
    highlights: [
      "Development Environment Setup: VS Code & Linux Basics",
      "Web Development Fundamentals: HTML, CSS & JavaScript",
      "Version Control & Collaboration using Git and GitHub",
      "Live Project Deployment using Netlify / Vercel",
      "Python Programming with Core Concepts & OOPs",
      "Logical Problem Solving using Python",
      "Automation Testing Basics with Selenium (UI Testing)",
      "API Fundamentals & API Testing using Postman",
    ],
  },
  {
    id: "python-programming-oops-foundation",
    title: "Python Programming with OOPs (Core Concepts & Logic)",
    description:
      "A beginner-friendly Python course focused on building strong programming logic, core data structures, and Object-Oriented Programming concepts. Designed to help students write clean code, think logically, and prepare for advanced learning paths such as automation testing, backend development, and software testing roles.",
    duration: "3 Months",
    level: "Class 9th & Above",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "5,999",
    offerPrice: "2,999",
    formUrl: "https://forms.gle/HEZnryu37EWhXdQK6",
    highlights: [
      "Introduction to Programming & Python Environment Setup",
      "Python Basics: Syntax, Variables & Data Types",
      "Control Flow: Conditions, Loops & Logical Thinking",
      "Functions & Modular Programming Concepts",
      "Core Data Structures: List, Tuple, Set & Dictionary",
      "Object-Oriented Programming: Classes & Objects",
      "OOPs Principles: Inheritance, Polymorphism & Encapsulation",
      "Exception Handling, Debugging & File Handling Basics",
    ],
  },
  {
    id: "java-programming-oops-foundation",
    title: "Java Programming with OOPs (Core Concepts & Logic)",
    description:
      "A beginner-friendly Java course focused on building strong programming fundamentals, object-oriented thinking, and logical problem-solving. Designed to help students understand core Java concepts, write structured code, and prepare for advanced learning paths such as backend development, automation testing, and enterprise-level applications.",
    duration: "3 Months",
    level: "Class 9th & Above",
    mode: "Live Classes (Online)",
    certificate: true,
    price: "5,999",
    offerPrice: "2,999",
    formUrl: "https://forms.gle/Vrk2K7EGqjZ9RyHW8",
    highlights: [
      "Introduction to Java & Development Environment Setup",
      "Java Basics: Syntax, Variables & Data Types",
      "Control Flow: Conditional Statements & Loops",
      "Methods & Modular Programming in Java",
      "Object-Oriented Programming: Classes & Objects",
      "OOPs Principles: Inheritance, Polymorphism & Encapsulation",
      "Arrays & Introduction to Java Collections",
      "Exception Handling & Basic Debugging Concepts",
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

  // --- DYNAMIC JSON-LD GENERATION ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Skellify IT Training Courses",
    description:
      "Professional IT training and OJT programs including SDET, Python, and Java.",
    itemListElement: COURSES.map((course, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Course",
        name: course.title,
        description: course.description,
        provider: {
          "@type": "Organization",
          name: "Skellify",
          sameAs: "https://www.skellify.com",
        },
        offers: {
          "@type": "Offer",
          price: course.offerPrice.replace(",", ""),
          priceCurrency: "INR",
          category: "Paid",
        },
        hasCourseInstance: {
          "@type": "CourseInstance",
          courseMode: "Online",
          courseWorkload: `P${course.duration.replace(" ", "")}`, // ISO 8601 Duration format
          instructor: {
            "@type": "Person",
            name: "Industry Experts",
          },
        },
      },
    })),
  };

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-24 container mx-auto px-4 md:px-6">
      {/* Injecting the JSON-LD Script for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* --- RESPONSIVE BATCH ANNOUNCEMENT BANNER --- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 md:mb-16 overflow-hidden rounded-2xl md:rounded-3xl bg-slate-50 dark:bg-slate-900 border border-blue-200 dark:border-blue-900 shadow-xl"
      >
        <div className="flex flex-col lg:flex-row">
          <div className="bg-blue-600 p-6 md:p-8 flex lg:flex-col items-center justify-center text-white text-center lg:min-w-[240px] gap-4 lg:gap-2">
            <CalendarDays className="w-8 h-8 md:w-10 md:h-10 opacity-80" />
            <div>
              <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-90">
                Next Batch Starts
              </p>
              <h3 className="text-2xl md:text-3xl font-black mt-1 uppercase">
                06 April
              </h3>
              <p className="text-base md:text-lg font-medium opacity-90">
                2026
              </p>
            </div>
          </div>

          <div className="p-6 md:p-10 flex-1 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-600 dark:text-emerald-400 font-bold uppercase text-lg md:text-2xl tracking-tighter">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                No Instant Payment Required
              </div>
              <h4 className="text-lg md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Secure your spot today with zero upfront cost.
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base max-w-xl">
                Just fill out the application form to receive your invite to the{" "}
                <span className="font-bold text-slate-900 dark:text-white underline decoration-blue-500 underline-offset-4 tracking-tight">
                  Skellify WhatsApp Group
                </span>
                . Full schedule and meeting links will be shared there.
              </p>
            </div>

            <div className="flex items-center justify-center w-full md:w-auto">
              <a
                href="https://chat.whatsapp.com/Fi19RL9SBtF4jWklMqsqsh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center md:flex-col gap-3 md:gap-2 px-6 py-4 md:px-4 md:py-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 transition-all duration-200 hover:border-emerald-200 dark:hover:border-emerald-900 cursor-pointer active:scale-95 group w-full md:w-auto justify-center"
              >
                <MessageCircle className="w-6 h-6 text-emerald-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs md:text-[10px] font-bold text-slate-500 md:text-slate-400 group-hover:text-emerald-600">
                  JOIN GROUP
                </span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-12 md:mb-16 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
          Courses Built for Real Skills
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed">
          Industry-aligned programs at <strong>Skellify</strong> focused on
          building strong fundamentals, practical experience, and job-ready
          confidence. Learn through structured courses, live projects, and
          guided practice — so you understand{" "}
          <span className="font-medium text-slate-700 dark:text-slate-300">
            how things actually work
          </span>
          , not just what to study.
        </p>
      </motion.div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {COURSES.map((course, index) => (
          <motion.div
            key={course.id}
            id={course.id} // Added ID for anchor linking from sitemap
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border border-slate-200 dark:border-slate-700 rounded-3xl p-6 md:p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                  {course.id === "foundation-skill-development"
                    ? "Job Ready"
                    : "Skill Up"}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold mb-3 text-slate-900 dark:text-white leading-tight">
                {course.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-[11px] md:text-xs mb-8 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{course.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  Certificate
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600 shrink-0" />
                  Live Online
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-8 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl">
                <span className="text-xs text-slate-400 line-through flex items-center">
                  <IndianRupee className="w-3 h-3" />
                  {course.price}
                </span>
                <span className="text-xl md:text-2xl font-black text-blue-600 flex items-center">
                  <IndianRupee className="w-5 h-5" />
                  {course.offerPrice}
                </span>
                <span className="ml-auto text-[10px] font-bold text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded-md">
                  50% OFF
                </span>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-[10px] uppercase tracking-widest text-slate-400">
                  What you will learn
                </p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2.5">
                  {course.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="leading-tight">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleApplyNow(course.formUrl)}
              className="mt-10 group flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all cursor-pointer shadow-lg shadow-blue-200 dark:shadow-none active:scale-95 w-full"
            >
              Enroll Now
              <ExternalLink className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
