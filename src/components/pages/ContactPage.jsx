"use client";

import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, Calendar, ExternalLink } from "lucide-react";
import { WHATSAPP_LINK, CALENDAR_LINK } from "@/constants/contact";

const GOOGLE_FORM_CONTACT_URL = "https://forms.gle/ebK5fyUViaEftNzQ6";

export default function ContactPage() {
  return (
    <section className="py-24 container mx-auto px-6 max-w-5xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Contact with Skellify Team</h1>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Whether you are a student or a business, reach out to us and we’ll get
          back to you.
        </p>
      </motion.div>

      {/* Quick Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex items-center gap-4 bg-white dark:bg-slate-800">
          <Mail className="text-blue-600" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-slate-600 dark:text-slate-400">official.skellify@gmail.com</p>
          </div>
        </div>
        <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 flex items-center gap-4 bg-white dark:bg-slate-800">
          <Phone className="text-blue-600" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-slate-600 dark:text-slate-400">+91 70705 84967</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side: Google Form CTA */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800"
        >
          <h2 className="text-2xl font-bold mb-4">Fill Inquiry Form</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Please fill out our official inquiry form. This helps us understand your requirements better before we connect.
          </p>
          <a
            href={GOOGLE_FORM_CONTACT_URL}
            target="_blank"
            className="inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition"
          >
            Open Inquiry Form
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

        {/* Right Side: Quick Actions */}
        <div className="flex flex-col gap-6">
          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Instant Chat</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Need a quick response? Message our support team directly on WhatsApp.
            </p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-bold hover:bg-emerald-600 transition shadow-lg shadow-emerald-100 dark:shadow-none"
            >
              <MessageSquare className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-2xl p-8 bg-white dark:bg-slate-800 shadow-sm">
            <h3 className="text-xl font-bold mb-2">Book a Meeting</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Schedule a 30-minute discovery call via Google Calendar.
            </p>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 dark:bg-blue-600 text-white font-bold hover:opacity-90 transition shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book via Google Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}