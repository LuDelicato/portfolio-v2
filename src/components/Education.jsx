import { educationData, certificationsData } from "../data/education";
import { GraduationCap, Award, ExternalLink, Library } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">
        Learning
      </p>
      <h2 className="text-4xl font-bold text-white mb-16">
        Education & Certifications
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Academic History */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-zinc-500" size={24} />
            <h3 className="text-2xl font-semibold text-white">
              Academic History
            </h3>
          </div>

          <div className="space-y-6">
            {educationData.map((item) => (
              <div
                key={item.id}
                className="bg-[#111111] border border-zinc-800/60 p-6 rounded-2xl hover:border-zinc-700 transition-colors flex gap-5 items-start"
              >
                <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-md bg-white border border-zinc-700/50 overflow-hidden">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={`${item.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <Library size={20} className="text-zinc-600" />
                  )}
                </div>

                <div className="flex-1 flex flex-col">
                  <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                    {item.degree}
                  </h4>

                  <div className="flex items-center justify-between text-sm flex-wrap gap-2 mb-3">
                    <span className="font-medium text-zinc-400">
                      {item.school}
                    </span>
                    <span className="bg-zinc-900/80 px-3 py-1 rounded-md border border-zinc-800 text-zinc-300">
                      {item.year}
                    </span>
                  </div>

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors w-fit"
                    >
                      <ExternalLink size={14} className="text-zinc-500" />
                      Verify Credential
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Additional Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-zinc-500" size={24} />
            <h3 className="text-2xl font-semibold text-white">
              Additional Certifications
            </h3>
          </div>

          <div className="bg-[#111111] border border-zinc-800/60 p-6 rounded-2xl">
            <div className="flex flex-col gap-6">
              {certificationsData.map((cert, index) => (
                <div key={index} className="flex gap-4 items-start group">
                  {/* Certification Logo Node */}
                  <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-md bg-white border border-zinc-700/50 overflow-hidden">
                    {cert.logo ? (
                      <img
                        src={cert.logo}
                        alt={`${cert.name} badge`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Award size={20} className="text-zinc-600" />
                    )}
                  </div>

                  {/* Certification Details */}
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-zinc-200 leading-snug mb-1">
                      {cert.name}
                    </h4>
                    <div className="text-xs text-zinc-500 mb-2">
                      {cert.issuer}
                    </div>

                    {cert.link && cert.link !== "#" && (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors w-fit"
                      >
                        <ExternalLink size={12} className="text-zinc-500" />
                        View Badge
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
