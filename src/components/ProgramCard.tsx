"use client"

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    Clock,
    Award,
    Monitor,
    CalendarDays,
    ExternalLink,
    CheckCircle2,
    X,
    Briefcase,
    type LucideIcon,
} from "lucide-react";
import Link from "next/link";


export interface Program {
    icon?: LucideIcon;
    title: string;
    description: string;
    level?: string;
    duration: string;
    mode: string;
    classesPerWeek: string;
    certificate: boolean;
    originalPrice: number;
    price: number;
    curriculum: string[];
    projects?: string[];
    outcomes?: string[];
    enrollUrl?: string;
    featured?: boolean;
}
function getDiscount(original: number, current: number): number {
    return Math.round(((original - current) / original) * 100);
}

function DetailModal({ program, onClose }: { program: Program; onClose: () => void }) {
    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={onClose}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-background/ backdrop-blur-md"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
                    className="relative z-10 w-full max-w-lg rounded-xl bg-card border border-border p-6 mx-4 shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-muted-foreground hover:text-card-foreground transition-colors cursor-pointer"
                    >
                        <X size={18} />
                    </button>
                    <h3 className="text-lg font-bold text-card-foreground mb-1">Curriculum & Details</h3>
                    <p className="text-sm text-muted-foreground mb-5">{program.title}</p>
                    <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-1">
                        <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                                Curriculum
                            </h4>
                            <ul className="space-y-2">
                                {program.curriculum.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5">
                                        <CheckCircle2 size={14} className="text-primary mt-0.5 shrink-0" />
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {program.projects && program.projects.length > 0 && (
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                                    Projects
                                </h4>
                                <ul className="space-y-2">
                                    {program.projects.map((p, i) => (
                                        <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                            <Briefcase size={13} className="text-accent shrink-0" /> {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {program.outcomes && program.outcomes.length > 0 && (
                            <div>
                                <h4 className="text-xs font-bold uppercase tracking-wider text-card-foreground mb-3">
                                    Outcomes
                                </h4>
                                <ul className="space-y-2">
                                    {program.outcomes.map((o, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                                            <Award size={13} className="text-primary mt-0.5 shrink-0" /> {o}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
export default function ProgramCard({
    program,
    index = 0,
}: {
    program: Program;
    index?: number;
}) {
    const [showDetail, setShowDetail] = useState(false);
    const discount = getDiscount(program.originalPrice, program.price);
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -4 }}
                className={`flex flex-col rounded-xl bg-card border p-5 transition-shadow ${program.featured
                        ? "border-accent/40 ring-1 ring-accent/20 shadow-md"
                        : "border-border hover:border-primary/30 hover:shadow-lg"
                    }`}
            >
                {program.featured && (
                    <span className="inline-block self-start bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full mb-3">
                        Most Popular
                    </span>
                )}
                {program.level && (
                    <span className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        {program.level}
                    </span>
                )}
                <h3 className="text-base font-bold text-card-foreground leading-snug mb-2">
                    {program.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 grow line-clamp-3">
                    {program.description}
                </p>
                
                <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                        <Clock size={13} className="text-primary" /> {program.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Award size={13} className="text-primary" /> Certificate
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Monitor size={13} className="text-primary" /> {program.mode}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <CalendarDays size={13} className="text-primary" /> {program.classesPerWeek}
                    </span>
                </div>
                
                <div className="mb-4 flex items-center gap-2">
                    <span className="text-xs text-muted-foreground line-through">
                        ₹{program.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-lg font-extrabold text-card-foreground">
                        ₹{program.price.toLocaleString("en-IN")}
                    </span>
                    {discount > 0 && (
                        <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">
                            {discount}% OFF
                        </span>
                    )}
                </div>
                
                <div className="flex gap-2 mt-auto">
                    <button
                        onClick={() => setShowDetail(true)}
                        className="flex-1 py-2 rounded-md border border-border text-xs font-semibold text-card-foreground hover:bg-accent-hover transition-colors"
                    >
                        View Details
                    </button>
                    <Link
                        href={program.enrollUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-md bg-accent text-center text-xs font-semibold text-primary-foreground hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-1"
                    >
                        Enroll <ExternalLink size={11} />
                    </Link>
                </div>
            </motion.div>
            {showDetail && (
                <DetailModal program={program} onClose={() => setShowDetail(false)} />
            )}
        </>
    );
}
