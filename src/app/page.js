import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";
import FreelanceProjects from "@/components/FreeelanceProjects";

export default function Home() {
  return (
    <main className="font-sans bg-background min-h-screen text-foreground">
      <Header />
      <Hero />
      <FreelanceProjects />
      <Projects />
      <Technologies />
      <About />
      <HireMe />
      <Footer />
    </main>
  );
}