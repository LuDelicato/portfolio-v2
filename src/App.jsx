import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-300 antialiased selection:bg-zinc-800 selection:text-white">
      <header className="fixed top-0 left-0 w-full p-4 md:p-6 bg-[#0a0a0a]/80 backdrop-blur-md z-50 border-b border-zinc-900/50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img
              src="/logo.webp"
              alt="Luanna Delicato Logo"
              className="w-10 h-10 object-contain"
            />
          </a>

          <nav className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a href="#education" className="hover:text-white transition-colors">
              Education
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#hobbies" className="hover:text-white transition-colors">
              Hobbies
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="md:hidden text-xs font-semibold text-zinc-300 border border-zinc-800 px-5 py-2.5 rounded-full"
          >
            Let's Talk
          </a>
        </div>
      </header>

      {/* Desktop Left Navigation Menu */}
      <aside className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 flex-col items-start gap-4 z-40 max-h-[85vh] overflow-y-auto pr-4 scrollbar-none">
        <div className="flex flex-col gap-3 pl-4 border-l border-zinc-800/80">
          <a
            href="#hero"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold"
          >
            Intro
          </a>

          <a
            href="#experience"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold mt-1"
          >
            Experience
          </a>

          {/* Concentrix*/}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <a
              href="#company-concentrix"
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Concentrix
            </a>
          </div>

          {/* Airbnb*/}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <a
              href="#company-airbnb"
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Airbnb
            </a>
            <div className="flex flex-col gap-1.5 pl-3 border-l border-zinc-900/50 text-[10px] text-zinc-500">
              <a
                href="#role-experiences"
                className="hover:text-zinc-300 transition-colors"
              >
                Experiences Team
              </a>
              <a
                href="#role-digital"
                className="hover:text-zinc-300 transition-colors"
              >
                Digital Specialist
              </a>
              <a
                href="#role-t2"
                className="hover:text-zinc-300 transition-colors"
              >
                Resolution Specialist T2
              </a>
              <a
                href="#role-t1"
                className="hover:text-zinc-300 transition-colors"
              >
                Resolution Specialist T1
              </a>
              <a
                href="#role-community"
                className="hover:text-zinc-300 transition-colors"
              >
                Community Education
              </a>
            </div>
          </div>

          {/* Oldschool Gaia */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <a
              href="#company-oldschool"
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Oldschool Gaia
            </a>
          </div>

          {/* Teleperformance */}
          <div className="flex flex-col gap-2 pl-3 border-l border-zinc-900">
            <a
              href="#company-teleperformance"
              className="text-[11px] text-zinc-400 hover:text-white transition-colors font-medium"
            >
              Teleperformance
            </a>
          </div>

          <a
            href="#education"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold mt-2"
          >
            Education
          </a>
          <a
            href="#projects"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold"
          >
            Contact
          </a>
          <a
            href="#hobbies"
            className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-all hover:translate-x-1 font-semibold"
          >
            Hobbies
          </a>
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
