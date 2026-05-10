"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function Experience() {
  const { t } = useT();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="relative mt-16 pl-8 md:pl-12">
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-orange-500/60 via-zinc-800 to-transparent md:left-5" />

          <ul className="space-y-10">
            {t.experience.items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative"
              >
                <div className="absolute -left-8 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-orange-500/40 bg-zinc-950 text-orange-400 shadow-lg shadow-orange-500/10 md:-left-12">
                  {item.type === "work" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
                </div>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition-all hover:border-orange-500/30 hover:bg-zinc-900/70">
                  <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 px-2.5 py-1 font-mono text-xs text-orange-400">
                    <Calendar size={11} />
                    {item.period}
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-100">{item.title}</h3>
                  <div className="mt-0.5 text-sm text-orange-400">{item.org}</div>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                      {item.description}
                    </p>
                  )}
                  {item.tags && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
