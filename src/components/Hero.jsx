import { heroData } from "../data/hero";
import { Download, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="px-6 pt-24 md:pt-40 pb-16 md:pb-24 max-w-6xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Profile Image Container */}
        <div className="col-span-1 lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            {/* Subtle external backdrop gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-800/40 to-zinc-700/20 rounded-full blur-2xl scale-105" />

            {/* circular crop frame with crisp border */}
            <div className="w-full h-full rounded-full overflow-hidden border border-zinc-800 ring-4 ring-zinc-900/50 bg-zinc-950 relative z-10">
              <img
                src="/profile.webp"
                alt={`${heroData.firstName} ${heroData.lastName}`}
                className="w-full h-full "
                style={{
                  objectFit: "cover",
                  objectPosition: "50% 20%",
                }}
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="col-span-1 lg:col-span-7 max-w-3xl text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-4 md:mb-6">
            {heroData.title}
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight mb-6 md:mb-8 leading-[1.1]">
            {heroData.firstName}
            <br className="hidden lg:block" />
            <span className="text-zinc-300"> {heroData.lastName}</span>
          </h1>

          <div className="space-y-4 md:space-y-6 text-zinc-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
            {heroData.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={heroData.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-2 bg-white text-black px-7 py-4 md:py-3.5 rounded-full font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto"
            >
              <Download size={18} /> Download Resume
            </a>

            <a
              href={heroData.contactLink}
              className="flex justify-center items-center gap-2 bg-[#111111] border border-zinc-800 text-white px-7 py-4 md:py-3.5 rounded-full font-semibold hover:bg-zinc-800 transition-colors w-full sm:w-auto"
            >
              <Mail size={18} className="text-zinc-400" /> Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
