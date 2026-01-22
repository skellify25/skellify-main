"use client";
import { motion } from "motion/react";
import { BookOpen, Code2, Smartphone, Zap, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BackgroundBeams } from "./ui/background-beams";

const transformationSteps = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    from: "Theory",
    to: "Practical Skills",
    description: "Hands-on learning through projects, assignments, and real use-cases",
    color: "blue",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    from: "Beginner",
    to: "Developer",
    description: "Structured courses to build strong foundations in software development",
    color: "purple",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    from: "Ideas",
    to: "Applications",
    description: "Transform ideas into web and mobile applications through guided development",
    color: "emerald",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    from: "Manual Work",
    to: "Automated Systems",
    description: "Implement automation and testing solutions for efficient digital workflows",
    color: "orange",
  },
];

const colorClasses: Record<
  string,
  { bg: string; text: string; border: string }
> = {
  blue: {
    bg: "bg-blue-500/10 dark:bg-blue-500/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  purple: {
    bg: "bg-purple-500/10 dark:bg-purple-500/20",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  emerald: {
    bg: "bg-emerald-500/10 dark:bg-emerald-500/20",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  orange: {
    bg: "bg-orange-500/10 dark:bg-orange-500/20",
    text: "text-orange-600 dark:text-orange-400",
    border: "border-orange-200 dark:border-orange-800",
  },
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 rounded-[20px] bg-linear-to-b from-slate-100 dark:from-transparent dark:to-transparent to-transparent opacity-50 dark:opacity-80"></div>
      <BackgroundBeams className="absolute inset-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Bridging <span className="text-primary">Learning</span> and{" "}
            <span className="text-primary">Technology</span>
          </h2>
          <p className="text-base text-secondary leading-relaxed">
            Skellify is an education and technology platform that helps students
            build real-world software skills and supports businesses with reliable
            digital solutions, automation, and system development.
          </p>
        </motion.div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {transformationSteps.map((step, idx) => {
            const colors = colorClasses[step.color];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                  "relative p-6 rounded-2xl border backdrop-blur-sm",
                  "bg-white/50 dark:bg-slate-900/50",
                  colors.border
                )}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    colors.bg,
                    colors.text
                  )}
                >
                  {step.icon}
                </div>

                {/* From → To */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">
                    {step.from}
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className={cn("font-semibold", colors.text)}>
                    {step.to}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Want to learn, build, or automate something meaningful?{" "}
            <span className="font-semibold text-foreground">
              We&apos;re here to help.
            </span>
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="px-3 py-[6px] w-full sm:w-fit bg-emerald-500/20 border border-emerald-400 dark:bg-emerald-500/70 text-black dark:text-white text-base font-medium rounded-xl shadow-lg hover:bg-emerald-500/50 dark:hover:bg-emerald-500/50 transition-all flex items-center justify-center gap-2 mx-auto"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
