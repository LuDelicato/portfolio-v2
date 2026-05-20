import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const channels = [
    {
      label: "Email",
      value: "delicato@outlook.pt",
      href: "mailto:delicato@outlook.pt",
      icon: <Mail size={20} />,
    },
    {
      label: "Phone",
      value: "+351 915 933 490",
      href: "tel:+351915933490",
      icon: <Phone size={20} />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/delicata",
      href: "https://www.linkedin.com/in/delicata",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      isExternal: true,
    },
    {
      label: "GitHub",
      value: "github.com/LuDelicato",
      href: "https://github.com/LuDelicato",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      isExternal: true,
    },
    {
      label: "Discord",
      value: "kawaiiqt",
      href: "https://discord.com/users/kawaiiqt",
      icon: (
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"></path>
          <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
        </svg>
      ),
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            Connection
          </p>
          <h2 className="text-4xl font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
            Whether you want to discuss operational optimization, database
            workflows, or potential collaborations, feel free to reach out
            through any of these platforms.
          </p>
        </div>

        <div className="lg:col-span-7 w-full space-y-3">
          {channels.map((channel, idx) => (
            <a
              key={idx}
              href={channel.href}
              target={channel.isExternal ? "_blank" : undefined}
              rel={channel.isExternal ? "noreferrer" : undefined}
              className="flex items-center justify-between p-5 bg-[#111111] border border-zinc-800/60 rounded-2xl hover:border-zinc-700/60 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors">
                  {channel.icon}
                </div>
                <div>
                  <small className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest block mb-0.5">
                    {channel.label}
                  </small>
                  <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors font-mono">
                    {channel.value}
                  </span>
                </div>
              </div>

              <div className="text-zinc-600 group-hover:text-zinc-400 transition-colors pr-1">
                <ArrowUpRight size={18} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
