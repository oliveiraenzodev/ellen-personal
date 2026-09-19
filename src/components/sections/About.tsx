import Image from "next/image";
import { siteConfig } from "@/data/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { getAssetPath } from "@/utils/assets";

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__grid">
        <div className="about__visual" data-reveal="left">
          <div className="about__image">
            <Image
              src={getAssetPath("/images/ellen-treino.jpeg")}
              alt="Ellen Alves durante treino com halteres"
              fill
              sizes="(max-width: 767px) 100vw, 45vw"
            />
          </div>
          <div className="about__experience">
            <strong>5</strong>
            <span>anos de experiência</span>
          </div>
        </div>

        <div className="about__content" data-reveal="right">
          <p className="eyebrow">Sobre Ellen</p>
          <h2>Você não precisa de um treino genérico.</h2>
          <p className="about__intro">
            Quero construir com você uma estratégia que faça sentido para a sua realidade.
          </p>
          <p>
            Sou Ellen Alves, Personal Trainer, e há 5 anos acompanho pessoas que
            buscam emagrecimento e hipertrofia. Meu trabalho começa entendendo seu
            objetivo, sua rotina e o momento que você está vivendo.
          </p>
          <p>
            Atendo presencialmente em Salvador e também por consultoria online. Quero
            tornar seu processo mais claro, próximo e consistente, estando disponível
            para acompanhar cada etapa da sua evolução.
          </p>
          <div className="about__signature">
            <div>
              <strong>{siteConfig.professional.name}</strong>
              <span>{siteConfig.professional.role}</span>
            </div>
            <span>CREF {siteConfig.professional.cref}</span>
          </div>
          <CtaLink href={getWhatsAppUrl()} target="_blank" rel="noreferrer" variant="text">
            Conversar sobre meu objetivo
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
