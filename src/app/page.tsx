"use client";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import UnderConstruction from "@/components/UnderConstruction";
import api from "@/lib/api";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Hero />
      <Services />
      <About />
      <UnderConstruction />
    </main>
  );
}
