import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Results } from "@/components/sections/Results";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ellen Alves",
    jobTitle: "Personal Trainer",
    telephone: "+55 71 99942-5112",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    sameAs: ["https://www.instagram.com/ellenalvestrainer/"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollReveal />
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Results />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
      <a
        className="whatsapp-float"
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Ellen pelo WhatsApp"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3A12.9 12.9 0 0 0 5.09 22.73L3 29l6.47-2.02A12.96 12.96 0 1 0 16.04 3Zm0 23.62c-2.05 0-4.05-.55-5.78-1.58l-.41-.24-3.84 1.2 1.25-3.73-.27-.43a10.72 10.72 0 1 1 9.05 4.78Zm5.88-8.03c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.69 9.69 0 0 1-1.79-2.23c-.19-.32-.02-.5.14-.66.15-.14.32-.37.49-.56.16-.19.21-.32.32-.54.11-.21.05-.4-.03-.56-.08-.16-.73-1.75-.99-2.39-.26-.63-.53-.54-.73-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.69s1.16 3.12 1.32 3.34c.16.21 2.28 3.48 5.52 4.88.77.33 1.37.53 1.84.68.77.25 1.47.21 2.03.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.37Z" />
        </svg>
      </a>
    </>
  );
}
