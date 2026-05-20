import React from "react";
import {
  Shield,
  Trophy,
  Activity,
  Scissors,
  Palette,
  Code,
  BookOpen,
  Music,
  ArrowUpRight,
} from "lucide-react";

export default function Hobbies() {
  const tftMilestones = [
    "8-Player Free-for-All Focus",
    "Dynamic Resource Management",
    "High-Pressure Decision Making",
  ];

  const favoriteMedia = [
    { name: "Solo Leveling", type: "Manga" },
    { name: "Death Note", type: "Anime" },
    { name: "The Girl with the Dragon Tattoo", type: "Book" },
    { name: "Never Flinch", type: "Book" },
  ];

  return (
    <section
      id="hobbies"
      className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900"
    >
      <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-2">
        Life Architecture
      </p>
      <h2 className="text-4xl font-bold text-white mb-16 tracking-tight">
        Personal Drive & Interests
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[auto]">
        {/* Highlight Card: Personal Transformation & Movement */}
        <div className="md:col-span-8 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Activity size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Mind, Body & Movement
            </h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
              Prioritizing physical movement has been a profound catalyst for my
              focus and discipline. Over the past few years, I committed to a
              massive personal wellness and health transformation, completely
              reclaiming my energy and mobility.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              Today, I channel that drive into active, technical sports. I'm
              deep into learning inline skating, pushing my progression month
              over month, and hitting the gym for high-intensity RPM cycling.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-md">
              Inline Skating
            </span>
            <span className="text-[11px] font-medium text-zinc-300 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-md">
              RPM Cycling
            </span>
            <span className="text-[11px] font-medium text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-3 py-1.5 rounded-md font-semibold">
              65kg+ Weight Loss so far
            </span>
          </div>
        </div>

        {/* Card 2: Jiu-Jitsu */}
        <div className="md:col-span-4 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Shield size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Martial Arts</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Training Jiu-Jitsu is an ongoing lesson in discipline and
              strategy. It is a ground-based martial art centered on patience,
              framing, and precise timing, requiring absolute focus to
              systematically solve defensive crises and advance through tight
              spaces.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-between pt-4 border-t border-zinc-900">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Rank Status
            </span>
            <span className="text-xs font-mono text-zinc-300 bg-zinc-950 border border-zinc-900 px-3 py-1.5 rounded-md font-semibold">
              White Belt (3 Stripes)
            </span>
          </div>
        </div>

        {/* Card 3: Strategic Gaming & Esports */}
        <div className="md:col-span-6 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Trophy size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Esports & Strategy
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              For me, competitive gaming is the ultimate exercise in real-time
              problem solving. I play Teamfight Tactics at a high level,
              reaching Diamond by focusing on long-term consistency rather than
              short-term gains. The game is essentially a complex mathematical
              puzzle where you manage fluctuating economies and probability
              systems against seven other players. Staying at the top demands
              absolute tactical patience, calculated risk-taking, and the
              ability to stay calm and analytical when a situation gets chaotic.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {tftMilestones.map((milestone, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2.5 py-1.5 rounded-md"
              >
                {milestone}
              </span>
            ))}
          </div>
        </div>

        {/* Card 4: Board Games & Social Strategy */}
        <div className="md:col-span-6 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Trophy size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Board Games & Gamification
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I love analyzing mechanics and complex system constraints, which
              naturally translates into a massive passion for modern strategy
              board games. Gathering around a table to figure out complex
              systems with friends keeps my mind sharp. I'm highly competitive,
              but I deeply value staying humble, analyzing mistakes, and
              learning from a loss.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Lost Ruins of Arnak
            </span>
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Catan
            </span>
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Bamboo
            </span>
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Dungeons & Dragons
            </span>
          </div>
        </div>

        {/* Card 5: Creative Paint & Street Art */}
        <div className="md:col-span-4 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Palette size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Visual Art & Murals
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Painting, graffiti, and abstract mediums are my main creative
              outlets. I've collaborated under the Oldschool Gaia collective,
              producing personalized art pieces and helping on large-scale mural
              arts for community public institutions, as well as contributing to
              underground subculture events like Cars & Cans.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Mural Work
            </span>
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Graffiti Culture
            </span>
          </div>
        </div>

        {/* Card 6: Purpose-Driven Dev & Automation */}
        <div className="md:col-span-4 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Code size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Utility Coding
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I code with a clear purpose. I love identifying minor frictions or
              repetitive tasks in the daily lives of my friends and family.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Scripting Workflows
            </span>
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Task Automation
            </span>
          </div>
        </div>

        {/* Card 7: Crochet & Amigurumis */}
        <div className="md:col-span-4 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Scissors size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Crochet & Focus
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              To wind down and reset my focus, I do crochet and create custom
              amigurumis and a lot of scarfs as well!
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Amigurumi Design
            </span>
            <span className="text-[11px] font-medium text-zinc-400 bg-zinc-900 border border-zinc-800/80 px-3 py-1.5 rounded-md">
              Crafting
            </span>
          </div>
        </div>

        {/* Card 8: Reading & Literary Media */}
        <div className="md:col-span-7 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <BookOpen size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Literature & Media
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Deep-dive storytelling is another space I enjoy exploring. I read
              everything from psychological investigative thrillers to
              fast-paced narrative systems.
            </p>
          </div>
          <div className="mt-6">
            <div className="flex flex-wrap gap-1.5">
              {favoriteMedia.map((item, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-mono text-zinc-400 bg-zinc-950 border border-zinc-900 px-2.5 py-1.5 rounded-md"
                >
                  {item.name} ({item.type})
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 9: Spotify  */}
        <div className="md:col-span-5 bg-[#111111] border border-zinc-800/60 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-zinc-700/60 transition-colors group">
          <div>
            <div className="p-3 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-zinc-400 group-hover:text-white transition-colors w-fit mb-6">
              <Music size={22} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Acoustic Fuel</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Music runs constantly in the background of everything I create and
              optimize. Heavy metal and underground hip hop are my absolute
              go-to.
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-zinc-900">
            <a
              href="https://open.spotify.com/user/6x83y1ywxlou2xr8wclbcnfez?si=5fc7da2a0b844ce1"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-between bg-zinc-950 border border-zinc-900 rounded-xl p-4 text-xs font-semibold text-zinc-300 hover:text-white hover:border-zinc-800 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Explore My Playlists
              </span>
              <ArrowUpRight size={16} className="text-zinc-600" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
