"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  MessageCircle,
  CalendarDays,
  FileText,
  ExternalLink,
  Send,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { WHATSAPP_LINK, CALENDAR_LINK, GOOGLE_FORM_CONTACT_URL } from "@/constants/contact";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
};

const contactDetails = [
  { icon: Mail, label: "Email", value: "official.skellify@gmail.com", href: "mailto:official.skellify@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 70705 84967", href: "tel:+917070584967" },
  { icon: MapPin, label: "Location", value: "Ranchi, Jharkhand, India" },
];

const socials = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const actions = [
  {
    icon: FileText,
    title: "Fill Inquiry Form",
    description: "Submit our official form so we can understand your goals before connecting.",
    cta: "Open Inquiry Form",
    ctaIcon: ExternalLink,
    href: GOOGLE_FORM_CONTACT_URL,
    variant: "success" as const,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    description: "Need a quick answer? Chat with our team directly.",
    cta: "Start Chat",
    ctaIcon: ArrowRight,
    href: WHATSAPP_LINK,
    variant: "success" as const,
  },
  {
    icon: CalendarDays,
    title: "Book a Meeting",
    description: "Schedule a 30-minute discovery call at your convenience.",
    cta: "Pick a Time",
    ctaIcon: ArrowRight,
    href: CALENDAR_LINK,
    variant: "success" as const,
  },
];

const fields = [
  { key: "name", label: "Full Name", placeholder: "Your name", required: true },
  { key: "email", label: "Email Address", placeholder: "your@email.com", type: "email", required: true },
  { key: "phone", label: "Phone", placeholder: "+91 XXXXX XXXXX" },
  { key: "company", label: "Company / College", placeholder: "Where you work or study" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", message: "", type: "student",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key: string, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <section className="pt-24 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
            Contact
          </span>
          <h1 className="text-3xl md:text-[38px] font-extrabold text-foreground leading-tight tracking-tight mb-3">
            Get in Touch with{" "}
            <span className="text-accent">Skellify</span>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Whether you're a student looking to upskill or a business seeking engineering
            services — we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ── Contact info chips ── */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {contactDetails.map(({ icon: Icon, label, value, href }) => {
            const Wrapper = href ? motion.a : motion.div;
            const wrapperProps = href
              ? { href, target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={label}
                variants={item}
                whileHover={{ y: -2 }}
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 cursor-pointer"
                {...(wrapperProps as any)}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon size={17} className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-card-foreground truncate">{value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>
      </section>

      {/* ── Main content: Form + Actions ── */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ── Left: Message form (3 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="lg:col-span-3 rounded-xl border border-border bg-card p-6 sm:p-8"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-sk-success/15 flex items-center justify-center mb-4">
                    <CheckCircle2 size={28} className="text-sk-success" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">Message Sent!</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-lg font-bold text-card-foreground mb-1">Send a Message</h2>
                    <p className="text-xs text-muted-foreground">We typically respond within a few hours.</p>
                  </div>

                  {/* Type toggle */}
                  <div className="flex gap-2 p-1 rounded-lg bg-background">
                    {["student", "client"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => update("type", type)}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-all duration-200 capitalize ${formData.type === type
                          ? "bg-primary text-neutral-100 shadow-sm"
                          : "text-foreground hover:text-foreground"
                          }`}
                      >
                        {type === "student" ? "I'm a Student" : "I'm a Client"}
                      </button>
                    ))}
                  </div>

                  {/* Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {fields.map(({ key, label, placeholder, type = "text", required }) => (
                      <div key={key} className="space-y-1.5">
                        <label className="text-xs font-semibold text-card-foreground">
                          {label}
                          {required && <span className="text-accent ml-0.5">*</span>}
                        </label>
                        <input
                          type={type}
                          required={required}
                          placeholder={placeholder}
                          value={(formData as Record<string, string>)[key]}
                          onChange={(e) => update(key, e.target.value)}
                          className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-card-foreground">
                      Message <span className="text-accent">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your goals…"
                      value={formData.message}
                      onChange={(e) => update("message", e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    Send Message <Send size={15} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Right: Quick actions + socials (2 cols) ── */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {actions.map(({ icon: Icon, title, description, cta, ctaIcon: CtaIcon, href, variant }) => (
              <motion.div
                key={title}
                variants={item}
                className="rounded-xl border border-border bg-card p-5 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${variant === "success" ? "bg-sk-success/10" : "bg-primary/10"
                    }`}>
                    <Icon size={16} className={variant === "success" ? "text-sk-success" : "text-primary"} />
                  </div>
                  <h3 className="text-sm font-bold text-card-foreground">{title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{description}</p>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-2.5 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${variant === "success"
                    ? "bg-accent text-primary-foreground"
                    : "bg-primary text-primary-foreground"
                    }`}
                >
                  {cta} <CtaIcon size={14} />
                </motion.a>
              </motion.div>
            ))}

            {/* Socials */}
            {/* <motion.div variants={item} className="rounded-xl border border-border bg-card p-5">
              <h3 className="text-sm font-bold text-card-foreground mb-3">Follow Us</h3>
              <div className="flex gap-2">
                {socials.map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  >
                    <Icon size={16} />
                  </Link>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}