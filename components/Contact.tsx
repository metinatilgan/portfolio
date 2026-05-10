"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";

const EMAIL = "metinatilgan@gmail.com";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/metinatilgan", handle: "@metinatilgan" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/metin-atilgan-1a5611116/",
    handle: "metin-atilgan",
  },
];

export default function Contact() {
  const { t } = useT();

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950 p-8 md:p-16">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-orange-500/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-orange-700/20 blur-[120px]" />
          <div className="absolute inset-0 grid-bg opacity-30" />

          <div className="relative">
            <SectionHeading
              eyebrow={t.contact.eyebrow}
              title={t.contact.title}
              description={t.contact.description}
              align="center"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto mt-12 flex max-w-md justify-center"
            >
              <a
                href={`mailto:${EMAIL}`}
                className="group inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-base font-semibold text-black transition-all hover:bg-orange-400 hover:shadow-2xl hover:shadow-orange-500/40"
              >
                <Mail size={18} />
                {EMAIL}
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  whileHover={{ y: -3 }}
                  className="group flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 transition-all hover:border-orange-500/40 hover:bg-zinc-900/70"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-400">
                    <s.icon size={16} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-zinc-500">{s.label}</div>
                    <div className="truncate text-sm text-zinc-200">{s.handle}</div>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400"
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
