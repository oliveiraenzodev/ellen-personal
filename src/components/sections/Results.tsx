import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { ResultsGallery } from "@/components/sections/ResultsGallery";

export function Results() {
  return (
    <section className="results section" id="resultados">
      <div className="container">
        <div className="results__header">
          <SectionHeading
            eyebrow="Resultados reais"
            title="Evolução construída com constância."
            description="Estes são registros reais de pessoas que acompanhei. Cada processo é individual e os resultados variam conforme rotina, adesão e ponto de partida."
            light
          />
          <p className="results__index" aria-hidden="true">
            04 / REGISTROS
          </p>
        </div>

        <ResultsGallery />

        <div className="results__cta">
          <p>Quero conhecer seu objetivo. Nosso primeiro passo pode ser uma conversa.</p>
          <CtaLink href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Quero começar meu processo
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
