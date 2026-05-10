"use client";

import { motion } from "framer-motion";
import { Fingerprint, Brain, Code2, Microscope, Wrench, FileCode } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";

const ICONS = [Fingerprint, Brain, Code2, Microscope, Wrench, FileCode];
const SKILL_BG = [
  "skill-bg-forensics",
  "skill-bg-ai",
  "skill-bg-dev",
  "skill-bg-research",
  "skill-bg-tools",
  "skill-bg-langs",
];

export default function Skills() {
  const { t } = useT();
  const total = String(t.skills.categories.length).padStart(2, "0");

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-zinc-950/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="mt-16 gap-5 md:columns-2">
          {t.skills.categories.map((cat, i) => {
            const Icon = ICONS[i] ?? Code2;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.article
                key={cat.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
                className="group relative mb-5 block break-inside-avoid overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/40 hover:bg-zinc-900/70"
              >
                <div aria-hidden className={`skill-bg ${SKILL_BG[i] ?? "skill-bg-dev"}`} />
                <div className="pointer-events-none absolute -top-12 -right-12 h-32 w-32 rounded-full bg-orange-500/0 blur-3xl transition-all duration-500 group-hover:bg-orange-500/20" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/5 text-orange-400 ring-1 ring-orange-500/20">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-[10px] tracking-wider text-zinc-600">
                      {num} / {total}
                    </span>
                  </div>

                  <h3 className="mt-4 text-xl font-semibold text-zinc-100">{cat.title}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{cat.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-1 font-mono text-[11px] leading-tight text-zinc-400 transition-colors group-hover:border-zinc-700 group-hover:text-zinc-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
