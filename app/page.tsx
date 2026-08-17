import About from "@/components/home/About";
import Awards from "@/components/home/Awards";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import VideoBanner from "@/components/home/VideoBanner";
import HomeEffects from "@/components/providers/HomeEffects";

export default function HomePage() {
  return (
    <main>
      <HomeEffects />
      <Hero />
      <VideoBanner />
      <About />
      <Projects />
      <Gallery />
      <Awards />
    </main>
  );
}
