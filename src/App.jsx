import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function App() {
  const scrollToSection = (id) => {
    // Comunica com o Experience.jsx para expandir a empresa se estiver fechada
    window.dispatchEvent(new CustomEvent("expand-and-scroll", { detail: id }));

    // Scroll suave para o elemento
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }

    // Mantém o URL perfeitamente limpo em delicato.pt sem '#'
    window.history.replaceState(null, "", window.location.pathname);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white">
      <header className="fixed top-0 left-0 w-full p-4 md:p-6 bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="/logo.webp"
              alt="Luanna Delicato Logo"
              className="w-10 h-10 object-contain"
            />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("hobbies")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Hobbies
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection("contact")}
            className="md:hidden text-xs font-semibold text-zinc-300 border border-zinc-800 px-5 py-2.5 rounded-full cursor-pointer"
          >
            Let's Talk
          </button>
        </div>
      </header>

      {/* Desktop Left Navigation Menu */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-start gap-4 z-40 max-h-[85vh] overflow-y-auto pr-4 scrollbar-none">
        <div className="flex flex-col gap-3 pl-4 border-l border-zinc-800/80 text-left">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold text-left cursor-pointer"
          >
            Intro
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold mt-1 text-left cursor-pointer"
          >
            Experience
          </button>

          {/* Nox Medical */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-nox")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Nox Medical
            </button>
          </div>

          {/* Kneip */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-kneip")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Kneip
            </button>
          </div>

          {/* Airbnb */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-airbnb")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Airbnb
            </button>
            <div className="flex flex-col gap-1.5 pl-3 border-l border-zinc-900/50 text-[10px] text-zinc-500">
              <button
                onClick={() => scrollToSection("role-experiences")}
                className="hover:text-zinc-300 transition-colors text-left cursor-pointer"
              >
                Experiences Team
              </button>
              <button
                onClick={() => scrollToSection("role-digital")}
                className="hover:text-zinc-300 transition-colors text-left cursor-pointer"
              >
                Digital Specialist
              </button>
              <button
                onClick={() => scrollToSection("role-resolution")}
                className="hover:text-zinc-300 transition-colors text-left cursor-pointer"
              >
                Resolution Specialist T2
              </button>
              <button
                onClick={() => scrollToSection("role-community")}
                className="hover:text-zinc-300 transition-colors text-left cursor-pointer"
              >
                Community Education
              </button>
            </div>
          </div>

          {/* Instacart */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-instacart")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Instacart
            </button>
          </div>

          {/* Millennium BCP */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-millennium")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Millennium BCP
            </button>
          </div>

          {/* Oldschool Gaia */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-oldschool")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Oldschool Gaia
            </button>
          </div>

          {/* Teleperformance */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <button
              onClick={() => scrollToSection("company-teleperformance")}
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium text-left cursor-pointer"
            >
              Teleperformance
            </button>
          </div>

          <button
            onClick={() => scrollToSection("education")}
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold mt-2 text-left cursor-pointer"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold text-left cursor-pointer"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("hobbies")}
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold text-left cursor-pointer"
          >
            Hobbies
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold text-left cursor-pointer"
          >
            Contact
          </button>
        </div>
      </aside>

      <main className="lg:pl-32">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Hobbies />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
