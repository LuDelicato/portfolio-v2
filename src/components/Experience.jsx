import React, { useState, useEffect } from "react";
import { experienceData } from "../data/experience";
import {
  Briefcase,
  Award,
  ExternalLink,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Experience() {
  // Initialize state with only the first company block expanded
  const [expandedCompanies, setExpandedCompanies] = useState({
    1: true,
  });

  const toggleCompany = (companyId) => {
    setExpandedCompanies((prev) => ({
      ...prev,
      [companyId]: !prev[companyId],
    }));
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      let targetSlug = "";
      let isRole = false;

      if (hash.startsWith("#role-")) {
        targetSlug = hash.replace("#role-", "");
        isRole = true;
      } else if (hash.startsWith("#company-")) {
        targetSlug = hash.replace("#company-", "");
      } else {
        return;
      }

      // Find the company containing either the matched company slug or nested role slug
      const parentCompany = experienceData.find((job) => {
        const companySlug = job.company
          .toLowerCase()
          .split(" ")[0]
          .replace(/[^a-z0-9]/g, "");
        if (!isRole) return companySlug === targetSlug;

        return job.roles.some((role) => {
          const roleSlug = role.title
            .toLowerCase()
            .split(" ")[0]
            .replace(/[^a-z0-9]/g, "");
          return roleSlug === targetSlug || role.id === targetSlug;
        });
      });

      if (parentCompany) {
        setExpandedCompanies((prev) => ({
          ...prev,
          [parentCompany.id]: true,
        }));

        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-900/60 transition-all duration-500"
    >
      <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">
        Career Path
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
        Professional Experience
      </h2>

      <div className="max-w-3xl">
        <div className="relative border-l border-zinc-800 ml-4 md:ml-6 space-y-12 pb-4">
          {experienceData.map((jobBlock) => {
            const isExpanded = !!expandedCompanies[jobBlock.id];
            const companySlug = jobBlock.company
              .toLowerCase()
              .split(" ")[0]
              .replace(/[^a-z0-9]/g, "");

            return (
              <div
                key={jobBlock.id}
                id={`company-${companySlug}`}
                className="relative pl-10 md:pl-16 scroll-mt-24"
              >
                <span className="absolute -left-[24px] flex h-12 w-12 items-center justify-center rounded-md bg-white ring-[6px] ring-[#0a0a0a] border border-zinc-700/50 z-10 overflow-hidden">
                  {jobBlock.logo ? (
                    <img
                      src={jobBlock.logo}
                      alt={`${jobBlock.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Briefcase size={18} className="text-zinc-500" />
                  )}
                </span>

                <button
                  onClick={() => toggleCompany(jobBlock.id)}
                  className="w-full flex justify-between items-center text-left mb-6 group focus:outline-none"
                >
                  <div className="pr-4">
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                      {jobBlock.company}
                    </h3>
                    <div className="text-xs md:text-sm text-zinc-500 mt-1 flex flex-wrap items-center gap-x-2">
                      {jobBlock.totalDuration && (
                        <>
                          <span>{jobBlock.totalDuration}</span>
                          <span className="hidden sm:inline">·</span>
                        </>
                      )}
                      <span>{jobBlock.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-zinc-500 group-hover:text-zinc-300 shrink-0 transition-colors">
                    <span className="text-xs font-medium uppercase tracking-wider hidden sm:inline opacity-60 group-hover:opacity-100 transition-opacity">
                      {isExpanded ? "Hide Details" : "Show Details"}
                    </span>
                    <div className="p-1.5 rounded-lg bg-zinc-900/50 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                      {isExpanded ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="overflow-hidden space-y-10">
                    <div className="space-y-10 mt-2">
                      {jobBlock.roles.map((role) => {
                        const roleSlug = role.title
                          .toLowerCase()
                          .split(" ")[0]
                          .replace(/[^a-z0-9]/g, "");

                        return (
                          <div
                            key={role.id}
                            id={`role-${roleSlug}`}
                            className="relative scroll-mt-28"
                          >
                            {jobBlock.roles.length > 1 && (
                              <span className="absolute -left-[45px] md:-left-[69px] top-2 flex h-3 w-3 rounded-full bg-zinc-700 ring-[4px] ring-[#0a0a0a]"></span>
                            )}

                            <div className="flex flex-col">
                              <h4 className="text-lg md:text-xl font-semibold text-zinc-200">
                                {role.title}
                              </h4>
                              <div className="text-xs md:text-sm text-zinc-500 mt-1">
                                {role.date}
                              </div>

                              <div className="mt-4 mb-4">
                                <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 px-3 py-1.5 rounded-md border border-zinc-800">
                                  {role.short}
                                </span>
                              </div>

                              <ul className="list-disc list-outside ml-4 space-y-3 text-zinc-400 text-sm marker:text-zinc-700">
                                {role.details.map((detail, idx) => (
                                  <li
                                    key={idx}
                                    className="leading-relaxed pl-1"
                                  >
                                    {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {jobBlock.certifications && (
                      <div className="mt-8 bg-[#111111] border border-zinc-800/60 rounded-xl p-5">
                        <h4 className="text-sm font-semibold text-zinc-300 mb-4 flex items-center gap-2">
                          <Award size={16} className="text-zinc-500" />
                          Earned during tenure
                        </h4>
                        <div className="flex flex-col gap-3">
                          {jobBlock.certifications.map((cert, idx) => (
                            <a
                              key={idx}
                              href={cert.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm text-zinc-400 flex items-center gap-2 hover:text-white transition-colors group"
                            >
                              <ExternalLink
                                size={14}
                                className="text-zinc-600 group-hover:text-zinc-400"
                              />
                              {cert.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
