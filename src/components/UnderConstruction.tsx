"use client";

import { motion } from "motion/react";
import {
  Calendar,
  MessageSquare,
  Construction,
  GraduationCap,
  Building2,
} from "lucide-react";
import { WHATSAPP_LINK, CALENDAR_LINK } from "@/constants/contact";

const UnderConstruction = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white dark:bg-slate-900 min-h-[calc(100vh-10rem)] flex items-center justify-center"
    >
      {/* Background elements */}
      <div className="bg-primary/10 h-52 w-80 absolute top-24 left-1/3 -translate-x-1/2 blur-3xl" />
      <div className="bg-primary/10 h-52 w-80 absolute bottom-24 right-1/3 translate-x-1/2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 p-8 md:p-12 rounded-2xl shadow-xl"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold tracking-wide uppercase mb-6">
            <Construction className="w-4 h-4" />
            <span>Website in Progress</span>
          </div>

          <h2 className="text-3xl md:text-4xl text-slate-900 dark:text-white font-bold tracking-tight mb-4">
            Let&apos;s Connect
          </h2>

          <p className="text-base text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto">
            Whether you&apos;re a student looking to learn or a business looking
            to build, we&apos;re available to discuss courses, training and IT
            services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 bg-emerald-500/20 border border-emerald-400 dark:bg-emerald-500/70 text-slate-900 dark:text-white text-base font-medium rounded-xl hover:bg-emerald-500/40 dark:hover:bg-emerald-500/50 transition-all flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>

            <motion.a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-6 py-3 bg-slate-100 dark:bg-slate-700/60 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-600 text-base font-medium rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book a Free Call
            </motion.a>
          </div>

          <div className="mt-8 flex justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Students
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4" />
              Businesses
            </div>
          </div>

          <p className="mt-6 text-xs text-slate-500 dark:text-slate-500">
            Our team typically responds within a few hours during working days.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UnderConstruction;
