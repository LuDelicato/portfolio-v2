import React from "react";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-12 px-6 mt-12 border-t border-zinc-900 bg-[#0a0a0a] flex flex-col items-center justify-center gap-6">
      {/* Keyframe for Heartbeat */}
      <style>
        {`
          @keyframes heartbeat {
            0%, 100% { transform: scale(1); }
            14% { transform: scale(1.25); }
            28% { transform: scale(1); }
            42% { transform: scale(1.25); }
            70% { transform: scale(1); }
          }
          .animate-heartbeat {
            animation: heartbeat 1.5s infinite;
          }
        `}
      </style>

      <button
        onClick={scrollToTop}
        className="group flex items-center justify-center p-3 rounded-full bg-[#111111] border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 transition-all duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        <ArrowUp
          size={18}
          className="group-hover:-translate-y-1 transition-transform duration-300"
        />
      </button>

      <div className="flex flex-col items-center gap-2.5">
        <span className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
          made with
          <Heart
            size={16}
            className="text-red-500 fill-red-500 animate-heartbeat drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]"
          />
          by
          <a
            href="https://github.com/LuDelicato"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-300 hover:text-white transition-colors font-semibold tracking-wide"
          >
            Luanna Delicato
          </a>
        </span>

        <span className="text-zinc-600 text-xs">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  );
}
