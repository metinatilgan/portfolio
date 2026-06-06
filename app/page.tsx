import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Metin Atılgan",
  url: "https://metinatilgan.github.io/portfolio",
  image: "https://metinatilgan.github.io/portfolio/profile.jpg",
  email: "metinatilgan@gmail.com",
  description:
    "Adli bilişim, dijital davranış analizi, psikoloji ve yapay zekâ destekli sistemler üzerine çalışan multidisipliner bir araştırmacı ve geliştirici.",
  jobTitle: "Researcher & Full-Stack Developer",
  knowsAbout: [
    "Digital Forensics",
    "Adli Bilişim",
    "Psikoloji",
    "Yapay Zekâ",
    "React Native",
    "iOS Development",
    "Full-Stack Development",
  ],
  sameAs: ["https://github.com/metinatilgan"],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative min-h-screen">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
