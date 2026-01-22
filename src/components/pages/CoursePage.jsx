"use client";

import { motion } from "motion/react";
import { Clock, Award, Layers, Video, IndianRupee, ExternalLink, CalendarDays } from "lucide-react"; // Added CalendarDays icon

// 1. Static Course Data with unique Form URLs
const COURSES = [
  {
    id: "foundation-skill",
    title: "Foundation Skill Development Course",
    description: "A comprehensive 7-month program covering Frontend, Python, Automation, and API basics for students.",
    duration: "7 Months",
    level: "Class 9th - Graduation",
    mode: "Live Classes",
    certificate: true,
    price: "9,999",
    offerPrice: "4,999",
    formUrl: "https://forms.gle/QqaVEwuUPh5eLFp19",
    highlights: [
      "Frontend: HTML, CSS & JavaScript",
      "Python Programming & OOPs Logic",
      "UI Automation with Selenium",
      "API Testing Basics (Postman)",
      "Portfolio Website Development",
      "Logical Problem Solving",
      "Introduction to Git & GitHub"
    ]
  },
  {
    id: "python-oops",
    title: "Python Programming with OOPs",
    description: "Master Python fundamentals and Object-Oriented Programming to build a strong logic foundation.",
    duration: "3 Months",
    level: "Class 9th - Graduation",
    mode: "Live Classes",
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
      "Scripting for Daily Tasks"
    ]
  },
  {
    id: "java-oops",
    title: "Java Programming with OOPs",
    description: "Deep dive into Java, JVM architecture, and Collections framework. Perfect for building backend logic.",
    duration: "3 Months",
    level: "Class 9th - Graduation",
    mode: "Live Classes",
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
      "Building a Console-based Application"
    ]
  },
  {
    id: "sdet-program",
    title: "SDET (Software Development Engineer in Test)",
    description: "Advanced 9-month program for graduates to become job-ready automation engineers.",
    duration: "9 Months",
    level: "Graduation & Above",
    mode: "Live Classes",
    certificate: true,
    price: "15,999",
    offerPrice: "9,999",
    formUrl: "https://forms.gle/N7G18ivcsdLXcxNs5",
    highlights: [
      "Hybrid & Data-Driven Frameworks",
      "Rest Assured API Automation",
      "CI/CD Integration with Jenkins",
      "Cucumber BDD & Gherkin Scripting",
      "Agile Methodology & Jira Tracking",
      "Mock Interviews & Resume Optimization",
      "Database Testing with SQL"
    ]
  }
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-12 p-1 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 shadow-xl"
      >
        <div className="bg-white dark:bg-slate-900 rounded-[14px] p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
              <CalendarDays className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                New Batch Starting Soon!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Enrollment is now open for all programs starting <span className="font-semibold text-blue-600 dark:text-blue-400">16 March 2026</span>.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <span className="hidden md:block text-xs font-bold uppercase tracking-widest text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full animate-pulse">
                Limited Seats
             </span>
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
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">Our Courses</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Explore our carefully designed programs at <strong>Skellify</strong> to build your career in technology.
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
            className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">{course.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm leading-relaxed line-clamp-2">
                {course.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-6 text-slate-700 dark:text-slate-300">
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
                  {course.certificate ? "Certificate Inc." : "No Certificate"}
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  {course.mode}
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-slate-400 line-through flex items-center gap-1">
                  <IndianRupee className="w-3 h-3" />
                  {course.price}
                </span>
                <span className="text-2xl font-bold text-blue-600 flex items-center gap-1">
                  <IndianRupee className="w-5 h-5" />
                  {course.offerPrice}
                </span>
              </div>

              <div className="space-y-2 mb-2">
                <p className="font-semibold text-xs uppercase tracking-wider text-slate-500">Key Highlights</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  {course.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => handleApplyNow(course.formUrl)} 
              className="mt-8 group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all cursor-pointer shadow-lg shadow-blue-200 dark:shadow-none"
            >
              Apply Now
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}