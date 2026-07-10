import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/lib/i18n/LanguageProvider";
import "./globals.css";

const SITE_URL = "https://metinatilgan.github.io/portfolio";
const TITLE = "Metin Atılgan — Portfolio & CV";
const DESCRIPTION =
  "Adli bilişim, dijital davranış analizi, psikoloji ve yapay zekâ destekli sistemler üzerine çalışan multidisipliner bir araştırmacı ve geliştirici.";

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: "%s · Metin Atılgan",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  applicationName: "Metin Atılgan — Portfolio",
  authors: [{ name: "Metin Atılgan", url: SITE_URL }],
  creator: "Metin Atılgan",
  publisher: "Metin Atılgan",
  keywords: [
    "Metin Atılgan",
    "Adli Bilişim",
    "Digital Forensics",
    "Psikoloji",
    "Yapay Zekâ",
    "React Native",
    "iOS",
    "Full-Stack Developer",
    "Sayısal Görüntü İşleme",
    "Portfolio",
    "CV",
  ],
  category: "technology",
  alternates: {
    canonical: SITE_URL,
    languages: {
      tr: SITE_URL,
      en: SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Metin Atılgan — Portfolio",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Metin Atılgan — Portfolio & CV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className="dark" suppressHydrationWarning>
      <body className="noise-bg" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
