import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Marquee } from "@/components/Marquee";
import { Nav } from "@/components/Nav";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <main id="main">
        <About />
        <Impact />
        <Experience />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
