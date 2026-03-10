"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import UnderConstruction from "@/components/UnderConstruction";
import api from "@/lib/api";
import { useEffect } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhySkellifySection } from "@/components/sections/WhySkellifySection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      {/* <HeroSection />
      <Services />
      <About />
      <UnderConstruction /> */}

      <HeroSection />
      <ProblemSection />
      <WhatWeDoSection />
      <ProgramsSection />
      <ServicesSection />
      <WhySkellifySection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
