"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "", type: "student",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-white dark:bg-[#0B0F19]">
        <div className="container-xl">
          <div className="max-w-2xl">
            <span className="section-tag">Contact</span>
            <h1 className="text-[40px] md:text-[52px] font-extrabold text-[#0F172A] dark:text-white leading-tight tracking-tight mb-4">
              Let's Build Something{" "}
              <span className="text-[#F97316]">Together</span>
            </h1>
            <p className="text-lg text-[#64748B] dark:text-[#94A3B8]">
              Whether you're interested in our programs or need engineering services, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section-padding bg-[#F5F7FA] dark:bg-[#060B12]">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-xl font-extrabold text-[#0F172A] dark:text-white mb-6">Get In Touch</h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#1E3A8A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider mb-0.5">Email</div>
                    <a href="mailto:info@skellify.com" className="text-sm font-medium text-[#0F172A] dark:text-white hover:text-[#F97316] transition-colors">
                      info@skellify.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider mb-0.5">Phone</div>
                    <a href="tel:+91" className="text-sm font-medium text-[#0F172A] dark:text-white hover:text-[#F97316] transition-colors">
                      www.skellify.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#1E3A8A]" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#64748B] dark:text-[#94A3B8] uppercase tracking-wider mb-0.5">Location</div>
                    <span className="text-sm font-medium text-[#0F172A] dark:text-white">India</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8">
                <h3 className="text-sm font-bold text-[#0F172A] dark:text-white mb-4 uppercase tracking-wider">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    { icon: Linkedin, href: "#", label: "LinkedIn" },
                    { icon: Github, href: "#", label: "GitHub" },
                    { icon: Twitter, href: "#", label: "Twitter" },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-10 h-10 rounded-lg border border-[#E2E8F0] dark:border-[#1E2A3A] flex items-center justify-center text-[#64748B] dark:text-[#94A3B8] hover:bg-[#1E3A8A] hover:text-white hover:border-[#1E3A8A] transition-all duration-200"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="card-base text-center py-16"
                >
                  <div className="w-16 h-16 bg-[#22C55E]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={24} className="text-[#22C55E]" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A] dark:text-white mb-2">Message Sent!</h3>
                  <p className="text-[#64748B] dark:text-[#94A3B8]">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="card-base">
                  <h2 className="text-xl font-extrabold text-[#0F172A] dark:text-white mb-6">Send a Message</h2>

                  {/* Type */}
                  <div className="flex gap-3 mb-6">
                    {["student", "client"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, type })}
                        className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 capitalize ${
                          formData.type === type
                            ? "bg-[#1E3A8A] text-white"
                            : "bg-[#E2E8F0] dark:bg-[#1E2A3A] text-[#64748B] dark:text-[#94A3B8] hover:bg-[#1E3A8A]/20"
                        }`}
                      >
                        {type === "student" ? "I'm a Student" : "I'm a Client"}
                      </button>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {[
                      { key: "name", label: "Full Name", placeholder: "Your name", required: true },
                      { key: "email", label: "Email Address", placeholder: "your@email.com", type: "email", required: true },
                      { key: "phone", label: "Phone", placeholder: "+91 XXXXX XXXXX" },
                      { key: "company", label: "Company / College", placeholder: "Where you work or study" },
                    ].map(({ key, label, placeholder, type = "text", required }) => (
                      <div key={key}>
                        <label className="block text-xs font-semibold text-[#0F172A] dark:text-white uppercase tracking-wider mb-1.5">
                          {label} {required && <span className="text-[#F97316]">*</span>}
                        </label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          required={required}
                          value={formData[key as keyof typeof formData]}
                          onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-lg border border-[#E2E8F0] dark:border-[#1E2A3A] bg-white dark:bg-[#0B0F19] text-[#0F172A] dark:text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-[#0F172A] dark:text-white uppercase tracking-wider mb-1.5">
                      Message <span className="text-[#F97316]">*</span>
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell us what you're looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-lg border border-[#E2E8F0] dark:border-[#1E2A3A] bg-white dark:bg-[#0B0F19] text-[#0F172A] dark:text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]/30 focus:border-[#1E3A8A] transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center text-base py-3.5">
                    Send Message <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
