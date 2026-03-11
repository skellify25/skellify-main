"use client"

import { BookOpen, Clock, Award, ArrowRight } from "lucide-react";
import CourseCards from "@/components/Courses";
import InternshipCards from "@/components/Training";
import { motion } from "motion/react";

const Training = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero */}
            <section className="pt-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent bg-accent/10 px-4 py-1.5 rounded-full mb-4">
                        Learning Programs
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight tracking-tight mb-4">
                        Training Program Built for{" "}
                        <span className="text-accent">Real Skills</span>
                    </h1>
                    <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    Industry-oriented training programs designed to give you real work experience through live projects, guided mentorship, and professional certification — not simulated tasks.
                    </p>
                    <div className="flex flex-wrap gap-6">
                        {[
                            { icon: BookOpen, label: "6 Programs" },
                            { icon: Clock, label: "3–4 Months" },
                            { icon: Award, label: "ISO Certified" },
                        ].map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Icon size={16} className="text-primary" />
                                {label}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl font-extrabold text-foreground mb-6"
                >
                    Internships
                </motion.h2>
                <InternshipCards />
            </section>

            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-2xl font-extrabold text-foreground mb-3">Ready to Enroll?</h2>
                    <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                        Get in touch with our team to find the right program for your background and goals.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-sm hover:opacity-90 transition-opacity"
                    >
                        Contact Us <ArrowRight size={16} />
                    </a>
                </motion.div>
            </section>
        </div>
    );
};

export default Training;
