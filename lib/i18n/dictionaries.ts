export type Locale = "tr" | "en";

export type Dict = {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
    contactCta: string;
    menuLabel: string;
  };
  hero: {
    badge: string;
    greeting: string;
    roles: string[];
    description: string;
    contactBtn: string;
    cvBtn: string;
    projectsBtn: string;
    stats: { value: string; label: string }[];
    scrollLabel: string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    photoLabel: string;
    currentLabel: string;
    currentValue: string;
    availabilityLabel: string;
    availabilityValue: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  skills: {
    eyebrow: string;
    title: string;
    description: string;
    categories: { title: string; description: string; skills: string[] }[];
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    items: {
      type: "work" | "edu";
      title: string;
      org: string;
      period: string;
      description: string;
      tags?: string[];
    }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    moreOnGithub: string;
    imageLabel: string;
    items: {
      title: string;
      description: string;
      tags: string[];
      demo?: string;
      repo?: string;
      featured?: boolean;
      status?: string;
      visual?: "psikoplanner" | "taskagent" | "forumanne" | "familyshield";
    }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
  footer: {
    copyright: string;
    builtWith: string;
  };
};

export const dictionaries: Record<Locale, Dict> = {
  tr: {
    nav: {
      about: "Hakkımda",
      skills: "Yetenekler",
      experience: "Deneyim",
      projects: "Projeler",
      contact: "İletişim",
      contactCta: "İletişim",
      menuLabel: "Menü",
    },
    hero: {
      badge: "Yeni projelere açığım",
      greeting: "Merhaba, ben",
      roles: [
        "Adli Bilişim Uzmanı",
        "Psikolog · Teknoloji Bağımlılığı Araştırmacısı",
        "Full-Stack Geliştirici",
      ],
      description:
        "Psikoloji, adli bilişim ve yapay zekâ destekli dijital davranış araştırmalarını birleştiren multidisipliner bir araştırmacı ve geliştirici.",
      contactBtn: "İletişime Geç",
      cvBtn: "CV İndir",
      projectsBtn: "Projeleri Gör",
      stats: [
        { value: "10+", label: "Yıl Deneyim" },
        { value: "5+", label: "Tamamlanan Proje" },
        { value: "3", label: "Disiplin" },
      ],
      scrollLabel: "Aşağı kaydır",
    },
    about: {
      eyebrow: "Hakkımda",
      title: "Kısaca Ben",
      description:
        "Multidisipliner bir bakış açısıyla teknoloji ve insan davranışının kesişiminde.",
      photoLabel: "profil fotoğrafı",
      currentLabel: "Şu an",
      currentValue: "Bağımsız Araştırmacı\nSerbest Adli Bilişim Uzmanı",
      availabilityLabel: "Açık Çalışma",
      availabilityValue: "Yeni Projelere Açık",
      paragraphs: [
        "Metin Atılgan; adli bilişim, dijital davranış analizi, psikoloji ve yapay zekâ destekli sistemler üzerine çalışan multidisipliner bir araştırmacı ve geliştiricidir. Mobil uygulama geliştirme, sayısal görüntü işleme, dijital delil analizi, kullanıcı deneyimi araştırmaları ve davranışsal veri yorumlama alanlarında teknik projeler yürütmektedir. Çalışmaları; insan davranışı, teknoloji kullanımı ve veri odaklı analiz yöntemlerinin kesişim noktasına odaklanmaktadır.",
        "11 yılı aşkın adli bilişim deneyimine sahip olan Metin Atılgan, teknik uzmanlığını psikoloji altyapısıyla birleştirerek dijital davranış ve teknoloji bağımlılığı alanlarında araştırmalar yürütmektedir. Sayısal görüntü inceleme, mobil cihaz analizi, veri korelasyonu, HTS/CDR tabanlı konum analizi, yapay zekâ destekli görüntü değerlendirme sistemleri ve kullanıcı merkezli mobil uygulama mimarileri üzerine çalışmaktadır. Özellikle karmaşık veri kümelerinin analiz edilmesi, davranışsal örüntülerin tespiti ve teknik sistemlerin insan odaklı tasarlanması konularına ilgi duymaktadır.",
        "Metin Atılgan, çalışmalarında analitik problem çözme yaklaşımını disiplinler arası düşünce yapısıyla birleştirmektedir. Teknik sistemlerin yalnızca mühendislik perspektifiyle değil; bilişsel, davranışsal ve kullanıcı deneyimi boyutlarıyla birlikte ele alınması gerektiğine inanmaktadır. Araştırma ve geliştirme süreçlerinde veri odaklı karar verme, sistem optimizasyonu, kullanıcı etkileşimi analizi ve ölçeklenebilir mimari tasarımı öncelikli yaklaşım alanları arasında yer almaktadır.",
      ],
      facts: [
        { label: "Konum", value: "Zonguldak, Türkiye" },
        { label: "Doğum Yılı", value: "1986" },
        { label: "Diller", value: "Türkçe · İngilizce" },
        { label: "Çalışma Saati", value: "7/24" },
      ],
    },
    skills: {
      eyebrow: "Yetenekler",
      title: "Uzmanlık Alanları",
      description:
        "Adli bilişimden yapay zekâya, mobil geliştirmeden davranış araştırmasına çok disiplinli bir uzmanlık seti.",
      categories: [
        {
          title: "Adli Bilişim",
          description: "Mobil cihaz, dijital delil ve görüntü analizi",
          skills: [
            "Mobil cihaz adli incelemesi",
            "HTS/CDR veri analizi",
            "Baz istasyonu korelasyonu",
            "Dijital delil bütünlüğü",
            "Metadata/EXIF inceleme",
            "Dosya sistemi analizi",
            "Log korelasyonu",
            "Silinmiş veri kurtarma",
            "Timeline analizi",
            "Sayısal görüntü inceleme",
            "ELA/CFA/CLA doğrulama",
            "Hash doğrulama (MD5/SHA256)",
            "Chain of Custody",
            "Olay yeri veri toplama",
            "Mobil uygulama artefaktı",
            "Ağ trafiği inceleme",
            "Siber olay analizi",
          ],
        },
        {
          title: "Yapay Zekâ & Veri",
          description: "Görüntü değerlendirme, davranış analizi, makine öğrenmesi",
          skills: [
            "AI destekli görüntü değerlendirme",
            "Davranışsal veri analizi",
            "Veri korelasyonu",
            "Örüntü tespiti",
            "ML tabanlı sınıflandırma",
            "AI-assisted forensic analysis",
            "Data preprocessing",
            "Feature extraction",
            "Anomaly detection",
            "NLP destekli metin analizi",
            "Predictive analytics",
            "Kullanıcı davranışı modelleme",
            "Computer vision",
            "Karar destek sistemleri",
          ],
        },
        {
          title: "Geliştirme",
          description: "Mobil, backend ve cross-platform sistem geliştirme",
          skills: [
            "React Native & Expo",
            "Swift / Kotlin native",
            "TypeScript / JavaScript",
            "Node.js backend",
            "REST API & auth",
            "Supabase / Firebase",
            "PostgreSQL",
            "Scalable architecture",
            "State management",
            "Offline-first mobile",
            "UI/UX implementation",
            "Real-time sync",
            "Performance optimization",
            "Cross-platform development",
          ],
        },
        {
          title: "Araştırma",
          description: "Dijital davranış, teknoloji bağımlılığı ve UX araştırmaları",
          skills: [
            "Davranışsal psikoloji",
            "Teknoloji bağımlılığı",
            "Dijital davranış araştırmaları",
            "UX araştırmaları",
            "İnsan-bilgisayar etkileşimi (HCI)",
            "Bilişsel süreç analizi",
            "Davranış örüntüleri",
            "Veri temelli kullanıcı araştırması",
            "Teknoloji kullanım alışkanlıkları",
            "Dijital wellbeing",
            "Davranışsal veri yorumlama",
            "Araştırma metodolojisi",
            "Disiplinler arası çalışmalar",
          ],
        },
        {
          title: "Araçlar",
          description: "Forensic, AI/ML, geliştirme ve veri analizi araçları",
          skills: [
            "Cellebrite UFED",
            "Magnet AXIOM",
            "Autopsy",
            "FTK Imager",
            "Oxygen Forensics",
            "MOBILedit Forensic",
            "Cellebrite Physical Analyzer",
            "Cellebrite Inspector",
            "Wireshark",
            "Burp Suite",
            "Volatility",
            "OpenCV",
            "TensorFlow",
            "PyTorch",
            "QGIS",
            "G-NetTrack Pro",
            "CellMapper",
            "Network Cell Info Lite",
            "Android Studio",
            "Xcode",
            "VS Code",
            "Git / GitHub",
            "Docker",
          ],
        },
        {
          title: "Diller",
          description: "Programlama dilleri ve geliştirme paradigmaları",
          skills: [
            "Python",
            "JavaScript / TypeScript",
            "Swift",
            "Kotlin",
            "SQL",
            "Bash",
            "REST API integration",
            "Async programming",
            "OOP",
            "Modern frontend architecture",
            "Veri işleme scriptleri",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Deneyim",
      title: "Yolculuğum",
      description:
        "Akademik gelişim ve mesleki tecrübenin disiplinler arası çakıştığı bir yolculuk.",
      items: [
        {
          type: "edu",
          title: "PDR Tezli Yüksek Lisans Programı",
          org: "Bülent Ecevit Üniversitesi",
          period: "2025 — 2027",
          description: "",
        },
        {
          type: "work",
          title: "Serbest Adli Bilişim Uzmanı",
          org: "Bağımsız",
          period: "2013 — Günümüz",
          description:
            "Yaklaşık 3.500 vaka dosyası için ekspertiz raporu düzenleme — sayısal görüntü işleme/inceleme ve adli bilişim incelemesi alanlarında uzman değerlendirme.",
          tags: ["Adli Bilişim", "Sayısal Görüntü İşleme", "Ekspertiz Raporu"],
        },
        {
          type: "edu",
          title: "Psikoloji",
          org: "Bülent Ecevit Üniversitesi",
          period: "2021 — 2024",
          description: "",
        },
        {
          type: "edu",
          title: "Adli Bilişim Tezli Yüksek Lisans Programı",
          org: "Ankara Üniversitesi",
          period: "2015 — 2017",
          description: "",
        },
        {
          type: "edu",
          title: "Eğitim Fakültesi",
          org: "Gazi Üniversitesi",
          period: "2004 — 2008",
          description: "",
        },
      ],
    },
    projects: {
      eyebrow: "Projeler",
      title: "Üzerinde Çalıştığım Şeyler",
      description: "Seçili işlerden bir kesit. Tüm liste için GitHub profilime göz atabilirsin.",
      moreOnGithub: "GitHub'da daha fazlası",
      imageLabel: "proje görseli",
      items: [
        {
          title: "PsikoPlanner",
          description:
            "Psikologlar ve danışmanlar için danışan, seans, takvim ve abonelik yönetimini tek ekranda toplayan; App Store'da yayında olan iOS ajanda uygulaması.",
          tags: ["TypeScript", "React Native", "Expo", "Swift", "iOS"],
          featured: true,
          status: "App Store'da yayında",
          visual: "psikoplanner",
        },
        {
          title: "TaskAgent",
          description:
            "Günlük odak, görevler, çalışma alanları ve profil/premium akışlarını sade bir iOS deneyiminde birleştiren; App Store'da yayında olan görev yönetimi uygulaması.",
          tags: ["TypeScript", "React Native", "Expo", "Swift", "iOS"],
          status: "App Store'da yayında",
          visual: "taskagent",
        },
        {
          title: "www.ForumAnne.com",
          description:
            "Annelerin gebelik, çocuk gelişimi, okul, sağlık ve özel durumlar üzerine paylaşım yapabildiği; şu an yayında olan topluluk odaklı forum sitesi.",
          tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
          status: "Yayında olan forum sitesi",
          visual: "forumanne",
        },
        {
          title: "FamilyShield",
          description:
            "Aile içi ekran süresi yönetimini, QR ile cihaz eşlemeyi, izin programlarını ve uygulama bazlı kuralları tek iOS deneyiminde toplayan ebeveyn kontrol uygulaması.",
          tags: ["TypeScript", "React Native", "Expo", "Swift", "iOS"],
          status: "Geliştirme aşamasında",
          visual: "familyshield",
        },
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Birlikte çalışalım",
      description: "Yeni bir proje, iş fırsatı ya da sadece bir merhaba — kutum açık.",
    },
    footer: {
      copyright: "Tüm hakları saklıdır.",
      builtWith: "Next.js + Tailwind ile yapıldı",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      contactCta: "Contact",
      menuLabel: "Menu",
    },
    hero: {
      badge: "Open to new projects",
      greeting: "Hi, I'm",
      roles: [
        "Digital Forensics Expert",
        "Psychologist · Digital Addiction Researcher",
        "Full-Stack Developer",
      ],
      description:
        "A multidisciplinary researcher and developer combining psychology, digital forensics, and AI-driven digital behavior research.",
      contactBtn: "Get in Touch",
      cvBtn: "Download CV",
      projectsBtn: "See Projects",
      stats: [
        { value: "10+", label: "Years of Experience" },
        { value: "5+", label: "Projects Completed" },
        { value: "3", label: "Disciplines" },
      ],
      scrollLabel: "Scroll down",
    },
    about: {
      eyebrow: "About",
      title: "A Bit About Me",
      description:
        "At the intersection of technology and human behavior, through a multidisciplinary lens.",
      photoLabel: "profile photo",
      currentLabel: "Currently",
      currentValue: "Independent Researcher\nFreelance Digital Forensics Expert",
      availabilityLabel: "Availability",
      availabilityValue: "Open to New Projects",
      paragraphs: [
        "Metin Atılgan is a multidisciplinary researcher and developer working in the fields of digital forensics, digital behavior analysis, psychology, and AI-assisted systems. He develops technical projects focused on mobile application development, digital image processing, digital evidence analysis, user experience research, and behavioral data interpretation. His work primarily focuses on the intersection of human behavior, technology usage, and data-driven analytical methodologies.",
        "With more than 11 years of experience in digital forensics, Metin Atılgan combines his technical expertise with a psychology background to conduct research in digital behavior and technology addiction. His work includes digital image examination, mobile device analysis, data correlation, HTS/CDR-based location analysis, AI-assisted image evaluation systems, and user-centered mobile application architectures. He is particularly interested in analyzing complex datasets, identifying behavioral patterns, and designing technically robust yet human-centered systems.",
        "Metin Atılgan combines analytical problem-solving with an interdisciplinary mindset in his work. He believes that technical systems should be evaluated not only from an engineering perspective, but also through cognitive, behavioral, and user experience dimensions. His primary areas of focus in research and development include data-driven decision making, system optimization, user interaction analysis, and scalable architecture design.",
      ],
      facts: [
        { label: "Location", value: "Zonguldak, Türkiye" },
        { label: "Born", value: "1986" },
        { label: "Languages", value: "Turkish · English" },
        { label: "Working Hours", value: "24/7" },
      ],
    },
    skills: {
      eyebrow: "Skills",
      title: "Areas of Expertise",
      description:
        "From digital forensics to AI, mobile development to behavioral research — a multidisciplinary expertise set.",
      categories: [
        {
          title: "Digital Forensics",
          description: "Mobile device, digital evidence and image analysis",
          skills: [
            "Mobile device forensics",
            "HTS/CDR data analysis",
            "Cell tower correlation",
            "Digital evidence integrity",
            "Metadata/EXIF examination",
            "File system analysis",
            "Log correlation",
            "Deleted data recovery",
            "Timeline analysis",
            "Digital image examination",
            "ELA/CFA/CLA verification",
            "Hash verification (MD5/SHA256)",
            "Chain of Custody",
            "On-site data collection",
            "Mobile app artifacts",
            "Network traffic analysis",
            "Cyber incident analysis",
          ],
        },
        {
          title: "AI & Data",
          description: "Image evaluation, behavior analysis, machine learning",
          skills: [
            "AI-assisted image evaluation",
            "Behavioral data analysis",
            "Data correlation",
            "Pattern detection",
            "ML-based classification",
            "AI-assisted forensic analysis",
            "Data preprocessing",
            "Feature extraction",
            "Anomaly detection",
            "NLP-driven text analysis",
            "Predictive analytics",
            "User behavior modeling",
            "Computer vision",
            "Decision support systems",
          ],
        },
        {
          title: "Development",
          description: "Mobile, backend and cross-platform system development",
          skills: [
            "React Native & Expo",
            "Swift / Kotlin native",
            "TypeScript / JavaScript",
            "Node.js backend",
            "REST API & auth",
            "Supabase / Firebase",
            "PostgreSQL",
            "Scalable architecture",
            "State management",
            "Offline-first mobile",
            "UI/UX implementation",
            "Real-time sync",
            "Performance optimization",
            "Cross-platform development",
          ],
        },
        {
          title: "Research",
          description: "Digital behavior, technology addiction and UX research",
          skills: [
            "Behavioral psychology",
            "Technology addiction",
            "Digital behavior research",
            "UX research",
            "Human-Computer Interaction (HCI)",
            "Cognitive process analysis",
            "Behavior patterns",
            "Data-driven user research",
            "Technology usage habits",
            "Digital wellbeing",
            "Behavioral data interpretation",
            "Research methodology",
            "Interdisciplinary studies",
          ],
        },
        {
          title: "Tools",
          description: "Forensic, AI/ML, development and data analysis tools",
          skills: [
            "Cellebrite UFED",
            "Magnet AXIOM",
            "Autopsy",
            "FTK Imager",
            "Oxygen Forensics",
            "MOBILedit Forensic",
            "Cellebrite Physical Analyzer",
            "Cellebrite Inspector",
            "Wireshark",
            "Burp Suite",
            "Volatility",
            "OpenCV",
            "TensorFlow",
            "PyTorch",
            "QGIS",
            "G-NetTrack Pro",
            "CellMapper",
            "Network Cell Info Lite",
            "Android Studio",
            "Xcode",
            "VS Code",
            "Git / GitHub",
            "Docker",
          ],
        },
        {
          title: "Languages",
          description: "Programming languages and development paradigms",
          skills: [
            "Python",
            "JavaScript / TypeScript",
            "Swift",
            "Kotlin",
            "SQL",
            "Bash",
            "REST API integration",
            "Async programming",
            "OOP",
            "Modern frontend architecture",
            "Data processing scripts",
          ],
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "My Journey",
      description:
        "A journey where academic development and professional experience converge across disciplines.",
      items: [
        {
          type: "edu",
          title: "Counseling Psychology M.Sc. (Thesis)",
          org: "Bülent Ecevit University",
          period: "2025 — 2027",
          description: "",
        },
        {
          type: "work",
          title: "Freelance Digital Forensics Expert",
          org: "Independent",
          period: "2013 — Present",
          description:
            "Prepared expert reports for approximately 3,500 case files — covering digital image processing/examination and digital forensics analysis.",
          tags: ["Digital Forensics", "Digital Image Processing", "Expert Reports"],
        },
        {
          type: "edu",
          title: "Psychology",
          org: "Bülent Ecevit University",
          period: "2021 — 2024",
          description: "",
        },
        {
          type: "edu",
          title: "Digital Forensics M.Sc. (Thesis)",
          org: "Ankara University",
          period: "2015 — 2017",
          description: "",
        },
        {
          type: "edu",
          title: "Faculty of Education",
          org: "Gazi University",
          period: "2004 — 2008",
          description: "",
        },
      ],
    },
    projects: {
      eyebrow: "Projects",
      title: "Things I've Worked On",
      description: "A selection of work. Check out my GitHub profile for the full list.",
      moreOnGithub: "More on GitHub",
      imageLabel: "project image",
      items: [
        {
          title: "PsikoPlanner",
          description:
            "A live App Store iOS planner for psychologists and counselors, bringing clients, sessions, calendars and subscription flows into one mobile workspace.",
          tags: ["TypeScript", "React Native", "Expo", "Swift", "iOS"],
          featured: true,
          status: "Live on the App Store",
          visual: "psikoplanner",
        },
        {
          title: "TaskAgent",
          description:
            "A live App Store iOS task manager that combines daily focus, tasks, work areas and profile/premium flows in a calm mobile experience.",
          tags: ["TypeScript", "React Native", "Expo", "Swift", "iOS"],
          status: "Live on the App Store",
          visual: "taskagent",
        },
        {
          title: "www.ForumAnne.com",
          description:
            "A live community forum where mothers share around pregnancy, child development, school, health and special-needs topics.",
          tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
          status: "Live forum website",
          visual: "forumanne",
        },
        {
          title: "FamilyShield",
          description:
            "An iOS parental control app that brings family screen-time management, QR-based device pairing, allowance schedules and per-app rules into one mobile experience.",
          tags: ["TypeScript", "React Native", "Expo", "Swift", "iOS"],
          status: "In active development",
          visual: "familyshield",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work together",
      description: "A new project, a job opportunity, or just to say hi — my inbox is open.",
    },
    footer: {
      copyright: "All rights reserved.",
      builtWith: "Built with Next.js + Tailwind",
    },
  },
};
