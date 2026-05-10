"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Languages, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";
import { withBase } from "@/lib/basePath";

const FACT_ICONS = [MapPin, Calendar, Languages, Clock];

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-16 grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-orange-500/30 to-orange-700/10 blur-2xl" />
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950">
                <img
                  src={withBase("/profile.jpg")}
                  alt={t.about.photoLabel}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute -right-2 top-6 max-w-[14rem] rounded-2xl border border-zinc-800 bg-zinc-900/85 p-3 backdrop-blur md:-right-4 md:top-8"
              >
                <div className="text-[10px] uppercase tracking-wider text-zinc-500">
                  {t.about.currentLabel}
                </div>
                <div className="mt-0.5 whitespace-pre-line font-mono text-[11px] leading-tight text-orange-400">
                  {t.about.currentValue}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-8 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-3 backdrop-blur"
              >
                <div className="text-xs text-zinc-500">{t.about.availabilityLabel}</div>
                <div className="flex items-center gap-1.5 text-sm text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {t.about.availabilityValue}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-3"
          >
            <div className="space-y-5 text-zinc-300">
              {t.about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-lg leading-relaxed"
                      : "leading-relaxed text-zinc-400"
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {t.about.facts.map((f, i) => {
                const Icon = FACT_ICONS[i] ?? MapPin;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                    className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 px-4 py-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400">
                      <Icon size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-zinc-500">{f.label}</div>
                      <div className="truncate text-sm text-zinc-200">{f.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
