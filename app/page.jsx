"use client"
//Components
import Hero from "@/components/Hero";
import About2 from "@/components/About2";
import Services from "@/components/ui/Services";
import Work from "@/components/Work";
import Reviews from "@/components/Reviews";
import Cta from "@/components/Cta";
import Projects from "./projects/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <main id="home-section">
      <Hero />
      <About2 />
      <Services />
      {/* <Work /> */}
      <Reviews />
      {/* <Cta /> */}
      <Projects />
      <Contact />
    </main>
  );
}
