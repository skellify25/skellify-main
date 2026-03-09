import type { Metadata } from "next";
import { Target, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";
import { principles } from "@/constants/contact";

export const metadata: Metadata = {
  title: "About – Skellify",
  description: "Learn about Skellify's mission, vision, and story.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">About Skellify</span>
              <h1 className="text-[20px] md:text-[40px] font-extrabold text-foreground leading-tight tracking-tight mb-6">
              Learn Technology{" "}
                <span className="text-accent"> Build Real-World Skills.</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed">
                Skellify builds modern software systems and helps developers
                learn practical engineering through hands-on development,
                automation testing, and quality engineering practices.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">

              {[
                { value: "10+", label: "Students Trained" },
                { value: "5+", label: "Projects Delivered" },
                { value: "4+", label: "Programs" },
                { value: "ISO", label: "9001:2015 Certified" },
              ].map((stat) => (
                <div key={stat.label} className="card-base text-center">
                  <div className="text-3xl font-extrabold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Mission + Vision */}
      <section className="section-padding bg-surface">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-base">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Target size={22} className="text-primary" />
              </div>

              <h2 className="text-2xl font-extrabold text-foreground mb-4">
                Our Mission
              </h2>

              <p className="text-muted leading-relaxed">
                To bridge the gap between learning and real engineering by providing structured programs and hands-on project experience that prepare developers to contribute from day one.
              </p>
            </div>

            <div className="card-base">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Eye size={22} className="text-accent" />
              </div>

              <h2 className="text-2xl font-extrabold text-foreground mb-4">
                Our Vision
              </h2>

              <p className="text-muted leading-relaxed">
                A world where every developer has access to practical, industry-grade training — and where quality and automation are embedded into software culture from the start.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-xl">
          <div className="max-w-3xl mx-auto">
            <span className="section-tag">Company Story</span>
            <h2 className="text-[32px] font-extrabold text-foreground mb-6">
              How Skellify Started
            </h2>
            <div className="prose prose-sm max-w-none text-muted leading-relaxed space-y-4">
              <p>
                Skellify was born from a simple observation: traditional education systems teach developers what to think, not how to engineer. The gap between completing a course and contributing to a real production codebase was enormous — and growing.
              </p>

              <p>
                Our founders — engineers with backgrounds in software delivery and quality automation — set out to build an organization that didn't just teach concepts, but trained engineers to build, test, and ship software the way it's actually done in the industry.
              </p>

              <p>
                Today, Skellify combines structured learning programs with real engineering delivery, creating a virtuous cycle where students work on real projects, and clients benefit from the fresh perspectives and disciplined practices our engineers bring.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Core Principles */}
      <section className="section-padding bg-surface">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Principles</span>
            <h2 className="text-[32px] font-extrabold text-foreground">
              Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="card-base">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${p.color}14` }}
                >
                  <p.icon size={22} style={{ color: p.color }} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="section-padding bg-background text-center">
        <div className="container-xl">
          <h2 className="text-[32px] font-extrabold text-foreground mb-4">
            Work With Us
          </h2>
          <p className="text-muted mb-8 max-w-lg mx-auto">
            Whether you're looking to grow your skills or build software, Skellify has a path for you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/courses" className="btn-primary">
              Explore Courses <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}