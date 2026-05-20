import React, { useState, useEffect } from "react";
import { projectsData } from "../data/projectData";
import {
  Database,
  ArrowLeft,
  Terminal,
  ArrowDownUp,
  Info,
  Lightbulb,
  CheckCircle,
} from "lucide-react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  useEffect(() => {
    const handleHashRouting = () => {
      const hash = window.location.hash;

      if (hash.startsWith("#projects/")) {
        const projectSlug = hash.replace("#projects/", "");
        const matchedProject = projectsData.find((p) => p.slug === projectSlug);

        if (matchedProject) {
          setSelectedProject(matchedProject);
          // Smooth scroll to dashboard section
          setTimeout(() => {
            document
              .getElementById("projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else if (hash === "#projects") {
        setSelectedProject(null);
      }
    };

    // Run right away on page load
    handleHashRouting();

    // Listen for back/forward browser arrows or links changes
    window.addEventListener("hashchange", handleHashRouting);
    return () => window.removeEventListener("hashchange", handleHashRouting);
  }, []);

  const handleSelectProject = (project) => {
    window.location.hash = `#projects/${project.slug}`;
  };

  const handleBackToGallery = () => {
    window.location.hash = "#projects";
    setSelectedProject(null);
    setCurrentStepIdx(0);
  };

  if (!selectedProject) {
    return (
      <div
        className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900 transition-opacity duration-300"
        id="projects"
      >
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">
          Case Studies
        </p>
        <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
          Data Analytics & Integrity
        </h2>
        <p className="text-zinc-400 mb-12 max-w-xl text-sm md:text-base">
          Full technical walkthroughs of my data engineering projects.
        </p>

        <div className="max-w-2xl mx-auto">
          {projectsData.map((project) => (
            <button
              key={project.id}
              onClick={() => handleSelectProject(project)}
              className="w-full text-left bg-[#111111] border border-zinc-800/60 rounded-3xl overflow-hidden hover:border-zinc-700/60 transition-all duration-300 group flex flex-col focus:outline-none"
            >
              <div className="w-full h-48 overflow-hidden relative border-b border-zinc-900">
                <img
                  src={project.image}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.02] transition-all duration-500"
                  alt={project.title}
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 w-full flex justify-between items-center bg-[#111111]">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 block mb-1">
                    Database Project
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-zinc-200 transition-colors">
                    {project.title}
                  </h3>
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full shrink-0 group-hover:bg-white group-hover:text-black transition-all">
                  Explore Case Study →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  const stepData = selectedProject.steps[currentStepIdx];

  return (
    <div
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900 transition-opacity duration-300"
      id="projects"
    >
      <div className="flex justify-between items-center mb-10">
        <button
          onClick={handleBackToGallery}
          className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-white transition-colors focus:outline-none"
        >
          <ArrowLeft size={16} /> Back to Projects
        </button>

        <a
          href={selectedProject.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-xs font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors"
        >
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          View Repository
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-3 lg:sticky lg:top-32 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 border-b lg:border-b-0 border-zinc-900">
          <div className="flex lg:flex-col gap-4 lg:gap-3 lg:border-l lg:border-zinc-800 lg:ps-4 whitespace-nowrap lg:whitespace-normal">
            {selectedProject.steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setCurrentStepIdx(idx)}
                className={`text-xs uppercase tracking-widest transition-all focus:outline-none shrink-0 text-left ${
                  currentStepIdx === idx
                    ? "text-white font-bold lg:translate-x-1"
                    : "text-zinc-600 hover:text-zinc-400"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-9 transition-all duration-200">
          <div className="space-y-6">
            {stepData.isOverview ? (
              <div className="bg-[#111111] border border-zinc-800/60 p-6 md:p-8 rounded-3xl border-l-4 border-l-zinc-500">
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">
                  {stepData.label}
                </h4>
                <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                  {stepData.content}
                </p>
              </div>
            ) : (
              <>
                <div className="bg-[#111111] border border-zinc-800/60 p-6 md:p-8 rounded-3xl border-l-4 border-l-zinc-500 space-y-6">
                  <div>
                    <h6 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Info size={14} className="text-zinc-500" />
                      {stepData.id.startsWith("eda")
                        ? "Business Question"
                        : "The Challenge"}
                    </h6>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                      {stepData.problem}
                    </p>
                  </div>

                  <div className="border-t border-zinc-900 pt-4">
                    <h6 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Lightbulb size={14} className="text-zinc-500" />
                      My Strategy
                    </h6>
                    <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                      {stepData.thought}
                    </p>
                  </div>

                  <div className="border-t border-zinc-900 pt-4">
                    <h6 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <CheckCircle size={14} className="text-zinc-500" />
                      {stepData.id.startsWith("eda")
                        ? "Data Insight"
                        : "The Solution"}
                    </h6>
                    <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
                      {stepData.resolution}
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden shadow-inner">
                  <div className="bg-[#111111] px-4 py-2.5 border-b border-zinc-900 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono">
                      <Terminal size={12} /> SQL Implementation
                    </div>
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                  <pre className="p-5 overflow-x-auto">
                    <code className="text-zinc-300 text-xs md:text-sm font-mono block whitespace-pre leading-relaxed">
                      {stepData.query}
                    </code>
                  </pre>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-widest">
                    <ArrowDownUp size={14} className="text-zinc-500" />
                    <span>Data Integrity Check</span>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden">
                    <div className="p-3 px-4 text-xs font-bold bg-red-950/20 text-red-400 border-b border-zinc-900">
                      ● Source State
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-zinc-900 text-zinc-500 uppercase tracking-wider text-[10px]">
                            {Object.keys(stepData.before[0])
                              .filter(
                                (k) => k !== "isDeleted" && k !== "isModified",
                              )
                              .map((key) => (
                                <th
                                  key={key}
                                  className="py-3 px-4 font-semibold capitalize"
                                >
                                  {key.replace("_", " ")}
                                </th>
                              ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900/40">
                          {stepData.before.map((row, i) => (
                            <tr
                              key={i}
                              className={`transition-colors ${
                                row.isDeleted
                                  ? "bg-red-950/10 text-red-300/80 line-through"
                                  : "text-zinc-400"
                              }`}
                            >
                              {Object.keys(row)
                                .filter(
                                  (k) =>
                                    k !== "isDeleted" && k !== "isModified",
                                )
                                .map((key, j) => (
                                  <td
                                    key={j}
                                    className={`py-3 px-4 whitespace-nowrap ${
                                      row.isModified
                                        ? "bg-yellow-950/10 text-yellow-300/90"
                                        : ""
                                    }`}
                                  >
                                    {row[key] === null ||
                                    row[key] === "NULL" ? (
                                      <span className="text-zinc-700 font-bold italic">
                                        NULL
                                      </span>
                                    ) : (
                                      String(row[key])
                                    )}
                                  </td>
                                ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-zinc-950 border border-zinc-900 rounded-2xl overflow-hidden">
                    <div className="p-3 px-4 text-xs font-bold bg-emerald-950/20 text-emerald-400 border-b border-zinc-900">
                      ● Transformed State
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-zinc-900 text-zinc-500 uppercase tracking-wider text-[10px]">
                            {Object.keys(stepData.after[0])
                              .filter(
                                (k) => k !== "isDeleted" && k !== "isModified",
                              )
                              .map((key) => (
                                <th
                                  key={key}
                                  className="py-3 px-4 font-semibold capitalize"
                                >
                                  {key.replace("_", " ")}
                                </th>
                              ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-900/40 text-zinc-400">
                          {stepData.after.map((row, i) => (
                            <tr
                              key={i}
                              className="hover:bg-zinc-900/20 transition-colors"
                            >
                              {Object.keys(row)
                                .filter(
                                  (k) =>
                                    k !== "isDeleted" && k !== "isModified",
                                )
                                .map((key, j) => (
                                  <td
                                    key={j}
                                    className="py-3 px-4 whitespace-nowrap"
                                  >
                                    {row[key] === null ||
                                    row[key] === "NULL" ? (
                                      <span className="text-zinc-700 font-bold italic">
                                        NULL
                                      </span>
                                    ) : (
                                      String(row[key])
                                    )}
                                  </td>
                                ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
