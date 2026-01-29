"use client";

import { motion } from "framer-motion"; 
import { Clock, Award, Layers, Video, IndianRupee, ExternalLink } from "lucide-react";

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
    formUrl: "https://forms.gle/AUTOMATION_OJT_FORM",
    highlights: ["Live Website Testing", "Framework Development", "Bug Reporting & Tracking", "Project Development"]
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
    formUrl: "https://forms.gle/WEB_DEV_OJT_FORM",
    highlights: ["Frontend Architecture", "Database Integration", "GitHub Collaboration", "Project Development"]
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
    formUrl: "https://forms.gle/APP_DEV_OJT_FORM",
    highlights: ["Mobile UI/UX Implementation", "State Management", "API Integration", "Project Development"]
  }
];

export default function OjtPage() {
  
  // --- DYNAMIC JSON-LD FOR OJT PROGRAMS ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Skellify On-Job Training (OJT) Programs",
    "description": "One-month industry-oriented training with live project exposure.",
    "itemListElement": OJT_PROGRAMS.map((program, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": program.title,
        "description": program.description,
        "provider": {
          "@type": "Organization",
          "name": "Skellify",
          "sameAs": "https://skellify.com"
        },
        "offers": {
          "@type": "Offer",
          "price": program.offerPrice.replace(",", ""),
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock" // Helps with search visibility
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "duration": "P1M" // ISO 8601 format for 1 Month
        }
      }
    }))
  };

  return (
    <section className="pt-28 pb-12 md:pt-32 md:pb-24 container mx-auto px-6">
      {/* SEO Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-16 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          On Job Training (OJT)
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          One-month industry-oriented training programs with <strong>live project exposure</strong>, mentorship, and professional certification.
        </p>
      </motion.div>

      {/* OJT Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {OJT_PROGRAMS.map((program, index) => (
          <motion.article // Changed to 'article' for better semantic SEO
            key={program.id}
            id={program.id} // Matches sitemap anchor links
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -6 }}
            className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <header className="mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {program.title}
                </h2>
              </header>
              
              <p className="text-slate-600 dark:text-slate-400 mb-5 text-sm leading-relaxed">
                {program.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm mb-6 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{program.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{program.mode}</span>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="flex items-center gap-3 mb-6 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl">
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
                <p className="font-semibold text-[10px] uppercase tracking-widest text-slate-500">
                  Training Focus
                </p>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                  {program.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-500 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Application Status Button */}
            <div className="mt-8 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 text-center text-sm font-bold border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2">
               Closed
               <Clock className="w-4 h-4" />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}