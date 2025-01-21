import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="w-full min-h-[100%] relative overflow-hidden mx-auto bg-slate-900 text-white px-0 text-left text-md sm:text-base lg:text-lg sm:px-[10px] md:px-[8px] lg:px-[4px] leading-snug sm:leading-normal md:leading-relaxed selection:bg-indigo-700 selection:text-slate-50">
      <HeroHighlight>
        <Hero/>
        <Projects />
        <About />
        <Contact />
      </HeroHighlight>
    </main>
  );
}
