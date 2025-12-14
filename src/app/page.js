import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import HireMe from "../components/HireMe";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="font-mono bg-background min-h-screen bg-indigo-950 text-white">
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <HireMe />
      <Footer />
    </main>
  );
}