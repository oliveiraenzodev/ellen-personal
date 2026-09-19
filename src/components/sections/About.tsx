import Image from "next/image";
import { siteConfig } from "@/data/site";
import { CtaLink } from "@/components/ui/CtaLink";
import { getWhatsAppUrl } from "@/utils/whatsapp";

export function About() {
  return (
    <section className="about section" id="sobre">
      <div className="container about__grid">
        <div className="about__visual" data-reveal="left">
          <div className="about__image">
            <Image
              src="/images/ellen-treino.jpeg"
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
            Precisa de uma estratégia que faça sentido para a sua realidade.
          </p>
          <p>
            Ellen Alves é Personal Trainer e atua há 5 anos acompanhando pessoas
            que buscam emagrecimento e hipertrofia. Seu trabalho parte de um olhar
            individual para o objetivo, a rotina e o momento de cada aluno.
          </p>
          <p>
            Com atendimento presencial em Salvador e consultoria online, a proposta
            é tornar o processo mais claro, próximo e consistente, com disponibilidade
            para acompanhar cada etapa da evolução.
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
