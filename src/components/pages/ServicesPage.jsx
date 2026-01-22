"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Smartphone,
  Settings,
  ShieldCheck,
  ArrowRight,
  Calendar,
  MessageSquare
} from "lucide-react";
import { WHATSAPP_LINK, CALENDAR_LINK } from "@/constants/contact";

// 1. Static Services Data
const SERVICES = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Custom, high-performance websites and web applications tailored to your business needs using modern tech stacks like Next.js and React.",
    offerings: [
      "E-commerce Platforms",
      "Corporate Websites",
      "Custom Web Applications",
      "Landing Pages & Portfolios"
    ],
    timeline: "2-8 Weeks",
    startingPrice: "15,000",
    icon: Monitor
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Feature-rich Android and iOS applications built for scale, performance, and a seamless user experience.",
    offerings: [
      "Native Android Apps",
      "Cross-platform (Flutter/React Native)",
      "App Store Optimization",
      "UI/UX Mobile Design"
    ],
    timeline: "4-12 Weeks",
    startingPrice: "25,000",
    icon: Smartphone
  },
  {
    id: "auto-qa",
    title: "Automation & QA",
    description: "Reduce manual effort and human error with robust automated testing suites and quality assurance protocols.",
    offerings: [
      "Selenium/Java Frameworks",
      "API Automation Testing",
      "Performance & Load Testing",
      "CI/CD Integration"
    ],
    timeline: "Ongoing/Project-based",
    startingPrice: "10,000",
    icon: Settings
  },
  {
    id: "support",
    title: "Maintenance & Support",
    description: "Ensure your digital products remain secure, up-to-date, and bug-free with our dedicated support plans.",
    offerings: [
      "24/7 Server Monitoring",
      "Bug Fixes & Security Patches",
      "Performance Optimization",
      "Technical Documentation"
    ],
    timeline: "Monthly Retainer",
    startingPrice: "5,000 / month",
    icon: ShieldCheck
  }
];

export default function ServicesPage() {
  
  // CTA: Redirect to WhatsApp with a pre-filled message
  const handleWhatsAppQuote = (serviceTitle) => {
    const message = encodeURIComponent(
      `Hi Skellify! I'm interested in the "${serviceTitle}" service. I'd love to share what I'm working on and see how we can collaborate. Can we talk?`
    );
    window.open(`${WHATSAPP_LINK}?text=${message}`, "_blank");
  };

  // CTA: Redirect to Google Calendar
  const handleBookConsultation = () => {
    window.open(CALENDAR_LINK, "_blank");
  };

  return (
    <section className="py-24 container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-20"
      >
        <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">IT Services</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Professional software development and long-term technical support for
          startups, institutions, and growing businesses.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col"
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-blue-600/10 text-blue-600">
                  <Icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Offerings */}
              <div className="mb-8 bg-slate-50 dark:bg-slate-900/50 p-5 rounded-xl">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-3">
                  Key Deliverables
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                  {service.offerings.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & Timeline Footer */}
              <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-slate-100 dark:border-slate-700 pt-6">
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-slate-400 uppercase font-medium tracking-tight">Timeline</span>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{service.timeline}</span>
                </div>
                <div className="flex flex-col gap-1 sm:text-right">
                  <span className="text-xs text-slate-400 uppercase font-medium tracking-tight">Starting At</span>
                  <span className="text-sm font-bold text-blue-600 tracking-wide">₹{service.startingPrice}</span>
                </div>
              </div>

              {/* WhatsApp Quote Button */}
              <button
                onClick={() => handleWhatsAppQuote(service.title)}
                className="mt-6 flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold transition-all group shadow-md shadow-emerald-100 dark:shadow-none cursor-pointer active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4" />
                Get a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Footer Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center p-10 md:p-16 bg-blue-600 rounded-[2.5rem] text-white shadow-2xl shadow-blue-200 dark:shadow-none"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">Have a unique project in mind?</h3>
        <p className="mb-10 opacity-90 max-w-2xl mx-auto text-lg">
          We specialize in building custom solutions that don't fit into standard boxes. 
          Book a direct slot on our calendar to discuss your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={handleBookConsultation}
            className="w-full sm:w-auto bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-95 shadow-lg cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            Schedule via Google Calendar
          </button>
          
          <button 
            onClick={() => handleWhatsAppQuote("General Inquiry")}
            className="w-full sm:w-auto bg-blue-700 text-white border border-blue-400/30 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-800 transition-all cursor-pointer active:scale-95"
          >
            <MessageSquare className="w-5 h-5" />
            Quick Chat on WhatsApp
          </button>
        </div>
      </motion.div>
    </section>
  );
}