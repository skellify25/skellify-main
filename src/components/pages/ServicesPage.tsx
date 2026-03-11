import type { Metadata } from "next";
import {
  ArrowRight,
  Globe,
  Smartphone,
  TestTube2,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import { services } from "@/constants/contact";

export const metadata: Metadata = {
  title: "Engineering Services – Skellify",
  description:
    "Web Development, Website Designing, App Development, Automation testing, and quality engineering services by Skellify.",
};


export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="container-xl">
          <div className="max-w-3xl">
            <span className="section-tag">
              Engineering Services
            </span>

            <h1 className="text-[40px] md:text-[52px] font-extrabold text-foreground leading-tight tracking-tight mb-6">
              Software Engineering{" "}
              <span className="text-primary">That Delivers</span>
            </h1>

            <p className="text-lg text-muted leading-relaxed mb-8">
              End-to-end development, testing, and automation
              services from engineers who practice what they
              teach.
            </p>

            <Link
              href="/contact"
              className="btn-primary text-base px-8 py-3.5"
            >
              Request Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-surface">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-base flex flex-col"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${service.color}14`,
                    }}
                  >
                    <service.icon
                      size={22}
                      style={{ color: service.color }}
                    />
                  </div>

                  <h2 className="text-xl font-extrabold text-foreground">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    What's Included
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature: string) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2
                          size={13}
                          className="mt-0.5 shrink-0"
                          style={{
                            color: service.color,
                          }}
                        />

                        <span className="text-xs text-muted">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                    Deliverables
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((d) => (
                      <span
                        key={d}
                        className="text-xs font-medium px-2.5 py-1 rounded-md"
                        style={{
                          background: `${service.color}10`,
                          color: service.color,
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-xl">
          <div className="text-center mb-12">
            <span className="section-tag">Our Approach</span>

            <h2 className="text-[32px] font-extrabold text-foreground">
              Engineering Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              "Discovery & Planning",
              "Design & Architecture",
              "Build & Test",
              "Deploy & Support",
            ].map((step, i) => (
              <div key={step}>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-extrabold mx-auto mb-4">
                  {i + 1}
                </div>

                <h3 className="text-sm font-bold text-foreground">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-xl text-center">
          <h2 className="text-[32px] font-extrabold text-foreground mb-4">
            Ready to Start a Project?
          </h2>

          <p className="text-muted mb-8 max-w-lg mx-auto">
            Tell us about your requirements and we'll put together
            the right team and approach.
          </p>

          <Link
            href="/contact"
            className="btn-primary"
          >
            Request Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}