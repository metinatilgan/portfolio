"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowUpRight,
  Brain,
  BriefcaseBusiness,
  CheckCheck,
  CheckCircle2,
  CalendarDays,
  Crown,
  FileText,
  Folder,
  Github,
  Globe2,
  Grid2X2,
  Heart,
  History,
  Lock,
  LogOut,
  Mail,
  Megaphone,
  MessageCircle,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  User,
  Users,
  Zap,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";
import { withBase } from "@/lib/basePath";

export default function Projects() {
  const { t } = useT();

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {t.projects.items.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 transition-all hover:border-orange-500/40 ${p.featured ? "md:col-span-2" : ""}`}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
                <ProjectVisual
                  imageLabel={t.projects.imageLabel}
                  status={p.status}
                  visual={p.visual}
                />

                <div className="absolute right-4 top-4 flex gap-2">
                  {p.repo && (
                    <a
                      href={p.repo}
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-950/70 text-zinc-300 backdrop-blur transition-colors hover:bg-zinc-800 hover:text-white"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-black transition-colors hover:bg-orange-400"
                      aria-label="Demo"
                    >
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                {p.status && (
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                    {p.visual === "forumanne" ? <Globe2 size={13} /> : <Apple size={13} />}
                    {p.status}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-zinc-100 transition-colors group-hover:text-orange-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-800 bg-zinc-950/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/metinatilgan"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-orange-500/40 hover:text-white"
          >
            <Github size={16} />
            {t.projects.moreOnGithub}
            <ArrowUpRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectVisual({
  imageLabel,
  status,
  visual,
}: {
  imageLabel: string;
  status?: string;
  visual?: "psikoplanner" | "taskagent" | "forumanne" | "familyshield";
}) {
  if (visual === "psikoplanner") {
    return <PsikoPlannerShowcase status={status} />;
  }

  if (visual === "taskagent") {
    return <TaskAgentShowcase status={status} />;
  }

  if (visual === "forumanne") {
    return <ForumAnneShowcase status={status} />;
  }

  if (visual === "familyshield") {
    return <FamilyShieldShowcase status={status} />;
  }

  return (
    <>
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl transition-all duration-700 group-hover:bg-orange-500/50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="font-mono text-xs uppercase tracking-widest text-zinc-600 transition-colors group-hover:text-orange-400">
          {imageLabel}
        </div>
      </div>
    </>
  );
}

function PsikoPlannerShowcase({ status }: { status?: string }) {
  return (
    <div className="psiko-showcase" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="psiko-orbit psiko-orbit-one" />
      <div className="psiko-orbit psiko-orbit-two" />

      <div className="psiko-icon-tile">
        <img className="project-icon-image" src={withBase("/project-icons/psikoplanner.png")} alt="" />
      </div>

      <div className="psiko-device psiko-device-home">
        <PhoneDashboard />
      </div>
      <div className="psiko-device psiko-device-login">
        <PhoneLogin />
      </div>
      <div className="psiko-device psiko-device-settings">
        <PhoneSettings />
      </div>
      <div className="psiko-device psiko-device-clients">
        <PhoneClients />
      </div>

      <div className="psiko-caption">
        <span className="psiko-caption-dot" />
        {status ?? "App Store'da yayında"}
      </div>
    </div>
  );
}

function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="psiko-phone-shell">
      <div className="psiko-phone-notch" />
      <div className="psiko-phone-screen">
        <div className="psiko-screen-fit">{children}</div>
      </div>
    </div>
  );
}

function PhoneLogin() {
  return (
    <PhoneShell>
      <div className="psiko-login-hero">
        <div className="psiko-login-mark">
          <Brain size={18} />
        </div>
        <strong>PsikoPlanner</strong>
        <span>Profesyonel dijital ajandanız</span>
      </div>
      <h4>Tekrar Hoş Geldiniz</h4>
      <div className="psiko-field">
        <Mail size={13} />
        <span>E-posta</span>
      </div>
      <div className="psiko-field">
        <Lock size={13} />
        <span>Şifre</span>
      </div>
      <div className="psiko-disabled-button">Giriş Yap</div>
      <div className="psiko-oauth-grid">
        <span>Google</span>
        <span>Apple</span>
      </div>
    </PhoneShell>
  );
}

function PhoneDashboard() {
  const stats = [
    { icon: CalendarDays, label: "Bugünkü Seanslar", value: "0" },
    { icon: Users, label: "Aktif Danışanlar", value: "0" },
    { icon: CalendarDays, label: "Bu Hafta", value: "0" },
    { icon: Grid2X2, label: "Aylık Gelir", value: "₺0" },
  ];

  return (
    <PhoneShell>
      <div className="psiko-screen-title">
        <span>Merhaba,</span>
        <strong>fnbmtn</strong>
      </div>
      <div className="psiko-stat-grid">
        {stats.map(({ icon: Icon, label, value }) => (
          <div className="psiko-stat" key={label}>
            <Icon size={14} />
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <div className="psiko-panel">
        <CalendarDays size={28} />
        <span>Yaklaşan seans yok</span>
      </div>
      <PsikoTabBar active="home" />
    </PhoneShell>
  );
}

function PhoneSettings() {
  return (
    <PhoneShell>
      <h4 className="psiko-page-heading">Ayarlar</h4>
      <div className="psiko-profile-row">
        <div>
          <User size={16} />
        </div>
        <span>
          <strong>fnbmtn</strong>
          <small>fnbmtn@hotmail.com</small>
        </span>
      </div>
      <div className="psiko-pro-row">
        <Crown size={17} />
        <span>
          <strong>Pro'ya Geç</strong>
          <small>5 danışana kadar ücretsiz</small>
        </span>
      </div>
      <div className="psiko-settings-list">
        <span>Terapist Profili</span>
        <span>Dil · Türkçe</span>
        <span>Yedekleme ve Geri Yükleme</span>
        <span>Versiyon · 1.0.0</span>
      </div>
      <PsikoTabBar active="settings" />
    </PhoneShell>
  );
}

function PhoneClients() {
  return (
    <PhoneShell>
      <div className="psiko-clients-head">
        <h4>Danışanlar</h4>
        <Settings size={15} />
      </div>
      <div className="psiko-search">
        <Search size={14} />
        <span>Danışan ara...</span>
      </div>
      <div className="psiko-empty">
        <Users size={30} />
        <strong>Henüz danışan eklenmemiş</strong>
      </div>
      <div className="psiko-fab">
        <Plus size={18} />
      </div>
      <PsikoTabBar active="clients" />
    </PhoneShell>
  );
}

function PsikoTabBar({ active }: { active: "home" | "clients" | "settings" }) {
  return (
    <div className="psiko-tabbar">
      <Grid2X2 size={13} className={active === "home" ? "text-sky-400" : ""} />
      <CalendarDays size={13} />
      <Users size={13} className={active === "clients" ? "text-sky-400" : ""} />
      <Settings size={13} className={active === "settings" ? "text-sky-400" : ""} />
    </div>
  );
}

function TaskAgentShowcase({ status }: { status?: string }) {
  return (
    <div className="taskagent-showcase" aria-hidden="true">
      <div className="taskagent-floor" />
      <div className="taskagent-axis taskagent-axis-one" />
      <div className="taskagent-axis taskagent-axis-two" />

      <div className="taskagent-icon-card">
        <img className="project-icon-image" src={withBase("/project-icons/taskagent.png")} alt="" />
      </div>

      <div className="taskagent-device taskagent-device-focus">
        <TaskFocusScreen />
      </div>
      <div className="taskagent-device taskagent-device-today">
        <TaskTodayScreen />
      </div>
      <div className="taskagent-device taskagent-device-profile">
        <TaskProfileScreen />
      </div>
      <div className="taskagent-device taskagent-device-tasks">
        <TaskTasksScreen />
      </div>

      <div className="taskagent-caption">
        <span className="taskagent-caption-dot" />
        {status ?? "App Store'da yayında"}
      </div>
    </div>
  );
}

function TaskAgentMark() {
  return (
    <div className="taskagent-mark">
      <div className="taskagent-mark-loop" />
      <div className="taskagent-mark-arrow" />
      <div className="taskagent-mark-a">A</div>
    </div>
  );
}

function TaskPhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="taskagent-phone-shell">
      <div className="taskagent-phone-notch" />
      <div className="taskagent-phone-screen">
        <div className="taskagent-screen-fit">{children}</div>
      </div>
    </div>
  );
}

function TaskTopBar() {
  return (
    <div className="taskagent-topbar">
      <div className="taskagent-mini-icon">
        <TaskAgentMark />
      </div>
      <span>
        <strong>TaskAgent</strong>
        <small>Odak Alanı</small>
      </span>
      <div className="taskagent-add">
        <Plus size={15} />
      </div>
    </div>
  );
}

function TaskTodayScreen() {
  return (
    <TaskPhoneShell>
      <TaskTopBar />
      <h4>Bugünün Odağı</h4>
      <div className="taskagent-empty-card">
        <FileText size={16} />
        <strong>Bugün için görev yok</strong>
        <span>Yeni bir görev oluşturabilir ya da boş alanın tadını çıkarabilirsin.</span>
      </div>
      <h5>Hızlı Alanlar</h5>
      <div className="taskagent-area-grid">
        <div>
          <Heart size={15} />
          <strong>Sağlık</strong>
          <span>0 aktif görev</span>
        </div>
        <div>
          <BriefcaseBusiness size={15} />
          <strong>İş</strong>
          <span>0 aktif görev</span>
        </div>
      </div>
      <TaskTabBar active="today" />
    </TaskPhoneShell>
  );
}

function TaskFocusScreen() {
  return (
    <TaskPhoneShell>
      <TaskTopBar />
      <div className="taskagent-kicker">ÇALIŞMA ALANI / BUGÜN</div>
      <div className="taskagent-hello">Merhaba, Metin.</div>
      <p className="taskagent-subcopy">Sıradaki önemli işleri daha sakin gör.</p>
      <div className="taskagent-focus-card">
        <span>ODAK AKIŞI</span>
        <strong>0%</strong>
        <div className="taskagent-lightning">
          <Zap size={18} />
        </div>
        <div className="taskagent-progress" />
        <div className="taskagent-focus-stats">
          <b>0/0<br /><small>Tamamlandı</small></b>
          <b>0<br /><small>Açık Görev</small></b>
        </div>
      </div>
      <TaskTabBar active="today" />
    </TaskPhoneShell>
  );
}

function TaskProfileScreen() {
  return (
    <TaskPhoneShell>
      <TaskTopBar />
      <div className="taskagent-avatar">ME</div>
      <div className="taskagent-name">Metin ATILGAN</div>
      <div className="taskagent-email">fnbmtn@hotmail.com</div>
      <div className="taskagent-profile-card">
        <label>AD SOYAD</label>
        <div>Metin ATILGAN</div>
        <label>UNVAN</label>
        <div />
        <button>
          <CheckCircle2 size={14} />
          Profili Kaydet
        </button>
      </div>
      <div className="taskagent-legal-card">
        <ShieldCheck size={15} />
        <span>Gizlilik Politikası</span>
        <FileText size={15} />
        <span>Kullanım Şartları</span>
        <LogOut size={15} />
        <span>Çıkış Yap</span>
      </div>
      <TaskTabBar active="profile" />
    </TaskPhoneShell>
  );
}

function TaskTasksScreen() {
  return (
    <TaskPhoneShell>
      <TaskTopBar />
      <div className="taskagent-kicker">GÜNLÜK ODAK</div>
      <div className="taskagent-task-title">
        <span>Görevler</span>
        <button>
          <Plus size={13} />
          Yeni
        </button>
      </div>
      <div className="taskagent-search-row">
        <Search size={14} />
        <span>Başlığa göre ara</span>
      </div>
      <div className="taskagent-progress-card">
        <strong>İLERLEME</strong>
        <span>0 aktif görev kaldı.</span>
        <i />
      </div>
      <div className="taskagent-empty-card compact">
        <FileText size={15} />
        <strong>Eşleşen görev yok</strong>
      </div>
      <TaskTabBar active="tasks" />
    </TaskPhoneShell>
  );
}

function TaskTabBar({ active }: { active: "today" | "tasks" | "profile" }) {
  return (
    <div className="taskagent-tabbar">
      <Target size={13} className={active === "today" ? "taskagent-active-tab" : ""} />
      <CheckCheck size={13} className={active === "tasks" ? "taskagent-active-tab" : ""} />
      <History size={13} />
      <Folder size={13} />
      <SlidersHorizontal size={13} className={active === "profile" ? "taskagent-active-tab" : ""} />
    </div>
  );
}

function ForumAnneShowcase({ status }: { status?: string }) {
  return (
    <div className="forumanne-showcase" aria-hidden="true">
      <div className="forumanne-orbit forumanne-orbit-one" />
      <div className="forumanne-orbit forumanne-orbit-two" />

      <div className="forumanne-logo-tile">
        <img className="project-icon-image" src={withBase("/project-icons/forumanne.svg")} alt="" />
      </div>

      <div className="forumanne-browser forumanne-browser-main">
        <ForumHomePanel />
      </div>
      <div className="forumanne-browser forumanne-browser-topics">
        <ForumTopicsPanel />
      </div>
      <div className="forumanne-browser forumanne-browser-special">
        <ForumSpecialPanel />
      </div>

      <div className="forumanne-caption">
        <span className="forumanne-caption-dot" />
        {status ?? "Yayında olan forum sitesi"}
      </div>
    </div>
  );
}

function ForumAnneMark() {
  return (
    <div className="forumanne-mark">
      <div className="forumanne-mark-back" />
      <div className="forumanne-mark-mother" />
      <div className="forumanne-mark-baby" />
      <div className="forumanne-mark-cradle" />
    </div>
  );
}

function ForumHomePanel() {
  return (
    <div className="forumanne-panel">
      <div className="forumanne-page-fit">
        <div className="forumanne-chrome">
          <span />
          <span />
          <span />
        </div>
        <div className="forumanne-site-head">
          <ForumAnneMark />
          <div>
            <strong>ForumAnne</strong>
            <span>Annelik Yolculuğunda Birlikte</span>
          </div>
        </div>
        <div className="forumanne-nav">
          <span>Giriş Yap</span>
          <span>Kayıt Ol</span>
          <b>Portal</b>
          <b>Forums</b>
          <b>Arama</b>
        </div>
        <div className="forumanne-strip">Anneler Kulübü</div>
        <div className="forumanne-ad">
          <Megaphone size={13} />
          <span>Reklam alanı - iletişim: iletisim@forumanne.com</span>
        </div>
        <div className="forumanne-table">
          <div className="forumanne-table-head">
            <span>Konular</span>
            <span>Son Mesaj</span>
          </div>
          <ForumRow title="Yasal Uyarı ve Sorumluluk Reddi" meta="65 mesaj" />
          <ForumRow title="Gizlilik Politikası" meta="38 mesaj" />
        </div>
      </div>
    </div>
  );
}

function ForumTopicsPanel() {
  return (
    <div className="forumanne-panel compact">
      <div className="forumanne-page-fit">
        <div className="forumanne-strip">Genel</div>
        <ForumRow title="Duyurular" meta="Yasal Uyarı..." />
        <ForumRow title="Tanışma Köşesi" meta="Gönderi Yok" />
        <ForumRow title="Öneri ve İstekler" meta="Gönderi Yok" />
        <div className="forumanne-strip muted">Sınıf Anneleri</div>
        <ForumRow title="Okul Öncesi Anneleri" meta="3-6 yaş oyun..." />
      </div>
    </div>
  );
}

function ForumSpecialPanel() {
  return (
    <div className="forumanne-panel compact special">
      <div className="forumanne-page-fit">
        <div className="forumanne-strip">Özel Durumlu Çocuk Anneleri</div>
        <ForumRow title="DEHB Anneleri" meta="Öğretmenlerle..." />
        <ForumRow title="Otizm Anneleri" meta="Kaynaştırma eğitimi..." />
        <ForumRow title="Alerjik Çocuk Anneleri" meta="Alerji aşısı..." />
        <ForumRow title="Bağımlılıkla Mücadele Eden Anneler" meta="Tedavi sonrası..." />
      </div>
    </div>
  );
}

function ForumRow({ title, meta }: { title: string; meta: string }) {
  return (
    <div className="forumanne-row">
      <MessageCircle size={15} />
      <span>
        <strong>{title}</strong>
        <small>Forum paylaşım alanı</small>
      </span>
      <em>{meta}</em>
    </div>
  );
}

function FamilyShieldShowcase({ status }: { status?: string }) {
  return (
    <div className="familyshield-showcase" aria-hidden="true">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="familyshield-orbit familyshield-orbit-one" />
      <div className="familyshield-orbit familyshield-orbit-two" />

      <div className="familyshield-icon-tile">
        <img className="project-icon-image" src={withBase("/familyshield/icon.png")} alt="" />
      </div>

      <div className="familyshield-device familyshield-device-home">
        <FamilyShieldPhoto src={withBase("/familyshield/home.jpg")} />
      </div>
      <div className="familyshield-device familyshield-device-child">
        <FamilyShieldPhoto src={withBase("/familyshield/child.jpg")} />
      </div>
      <div className="familyshield-device familyshield-device-qr">
        <FamilyShieldPhoto src={withBase("/familyshield/qr.jpg")} />
      </div>
      <div className="familyshield-device familyshield-device-schedule">
        <FamilyShieldPhoto src={withBase("/familyshield/schedule.jpg")} />
      </div>

      <div className="familyshield-caption">
        <span className="familyshield-caption-dot" />
        {status ?? "Geliştirme aşamasında"}
      </div>
    </div>
  );
}

function FamilyShieldPhoto({ src }: { src: string }) {
  return (
    <div className="familyshield-phone-shell">
      <div className="familyshield-phone-notch" />
      <img className="familyshield-phone-photo" src={src} alt="" />
    </div>
  );
}
