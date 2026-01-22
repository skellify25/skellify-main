"use client";

import { motion } from "motion/react";
import { Clock, Award, Layers, Video, IndianRupee, ExternalLink } from "lucide-react";

// 1. Static OJT Data
const OJT_PROGRAMS = [
  {
    id: "automation-testing-ojt",
    title: "Automation Testing OJT",
    description: "Work on live industry projects using Selenium, Java, and TestNG. Gain hands-on experience in building automation frameworks.",
    duration: "1 Month",
    level: "Beginner to Intermediate",
    mode: "Online",
    certificate: true,
    price: "4,000",
    offerPrice: "2,500",
    formUrl: "https://forms.gle/AUTOMATION_OJT_FORM", // Replace with actual link
    highlights: [
      "Live Website Testing",
      "Framework Development",
      "Bug Reporting & Tracking",
      "Project Development" 
    ]
  },
  {
    id: "web-development-ojt",
    title: "Web Development OJT",
    description: "Contribute to real-world web applications. Master React.js, Tailwind CSS, and API integration in a professional environment.",
    duration: "1 Month",
    level: "Beginner to Intermediate",
    mode: "Online",
    certificate: true,
    price: "4,000",
    offerPrice: "2,500",
    formUrl: "https://forms.gle/WEB_DEV_OJT_FORM", // Replace with actual link
    highlights: [
      "Frontend Architecture",
      "Database Integration",
      "GitHub Collaboration",
      "Project Development" 
    ]
  },
  {
    id: "app-development-ojt",
    title: "App Development OJT",
    description: "Learn to build and debug mobile applications. Experience the complete lifecycle from UI design to app performance tuning.",
    duration: "1 Month",
    level: "Beginner to Intermediate",
    mode: "Online",
    certificate: true,
    price: "4,000",
    offerPrice: "2,500",
    formUrl: "https://forms.gle/APP_DEV_OJT_FORM", // Replace with actual link
    highlights: [
      "Mobile UI/UX Implementation",
      "State Management",
      "API Integration",
      "Project Development" 
    ]
  }
];

export default function OjtPage() {
  
  const handleApplyNow = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <section className="py-24 container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16"
      >
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">On Job Training (OJT)</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          One-month industry-oriented training programs with <strong>live project exposure</strong>, mentorship, and professional certification.
        </p>
      </motion.div>

      {/* OJT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {OJT_PROGRAMS.map((program, index) => (
          <motion.div
            key={program.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{program.title}</h2>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm leading-relaxed">
                {program.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-6 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  {program.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  {program.level}
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600" />
                  Certified
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600" />
                  {program.mode}
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm text-slate-400 line-through flex items-center gap-1">
                  <IndianRupee className="w-3 h-3" />
                  {program.price}
                </span>
                <span className="text-2xl font-bold text-blue-600 flex items-center gap-1">
                  <IndianRupee className="w-5 h-5" />
                  {program.offerPrice}
                </span>
              </div>

              <div className="space-y-2 mb-2">
                <p className="font-semibold text-xs uppercase tracking-wider text-slate-500">Training Focus</p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  {program.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              // onClick={() => handleApplyNow(program.formUrl)}
              target="_blank"
              className="mt-8 group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 dark:shadow-none"
            >
              Not Accepting Applicants Currently
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}