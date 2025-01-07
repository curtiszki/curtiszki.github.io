import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { HeroHighlight } from "@/components/ui/hero-highlight";

export default function Home() {
  return (
    <main className="w-full h-[100%] relative overflow-hidden mx-auto bg-black text-white">
      <HeroHighlight
          containerClassName={`relative w-full bg-transparent`}
          className={'opacity-100 h-full flex flex-col items-center justify-center'}
      >
        <Hero/>
        <Projects />
        <About />
        <Contact />
      </HeroHighlight>
    </main>
  );
}
