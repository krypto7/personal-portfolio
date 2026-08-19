import About from "@/components/home/About";
import Awards from "@/components/home/Awards";
import Gallery from "@/components/home/Gallery";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import VideoBanner from "@/components/home/VideoBanner";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <VideoBanner />
      <About />
      <Projects />
      <Gallery />
      <Awards />
    </main>
  );
}
