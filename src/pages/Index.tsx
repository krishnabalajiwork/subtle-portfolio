import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingObjects from "@/components/FloatingObjects";
import GlassEffect from "@/components/GlassEffect";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <GlassEffect />
      <FloatingObjects />
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;