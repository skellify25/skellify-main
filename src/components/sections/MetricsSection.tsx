"use client";
import { motion } from "motion/react";

const stats = [
  { label: "Successful Placements", value: "95%" },
  { label: "Automation Hours Saved", value: "2500+" },
  { label: "Live Engineering Projects", value: "15+" },
  { label: "Global Certifications", value: "ISO 9001" },
];

export function MetricsSection() {
  return (
    <section className="container-xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-primary/5 border border-primary/10 text-center"
          >
            <div className="text-3xl md:text-4xl font-black text-primary mb-2">{stat.value}</div>
            <div className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}