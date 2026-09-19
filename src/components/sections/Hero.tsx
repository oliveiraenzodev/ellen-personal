import Image from "next/image";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { CtaLink } from "@/components/ui/CtaLink";
import { getAssetPath } from "@/utils/assets";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">Personal Trainer • Salvador + Online</p>
          <h1>
            Seu objetivo.
            <span>Sua força.</span>
            Sua evolução.
          </h1>
          <p className="hero__lead">
            Eu preparo um treinamento personalizado para você buscar emagrecimento
            ou hipertrofia com estratégia, constância e acompanhamento de verdade.
          </p>
          <div className="hero__actions">
            <CtaLink href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
              Quero começar
            </CtaLink>
            <CtaLink href="#servicos" variant="secondary">
              Conhecer o acompanhamento
            </CtaLink>
          </div>
          <ul className="hero__facts" aria-label="Informações profissionais">
            <li>
              <strong>5 anos</strong>
              <span>de experiência</span>
            </li>
            <li>
              <strong>Salvador</strong>
              <span>atendimento presencial</span>
            </li>
            <li>
              <strong>Online</strong>
              <span>onde você estiver</span>
            </li>
          </ul>
        </div>

        <div className="hero__visual">
          <div className="hero__image-frame">
            <Image
              src={getAssetPath("/images/ellen-halteres.jpeg")}
              alt="Ellen Alves treinando com halteres"
              fill
              priority
              sizes="(max-width: 767px) 100vw, 48vw"
            />
          </div>
          <div className="hero__stamp" aria-label="Foco em emagrecimento e hipertrofia">
            <span>Foco do acompanhamento</span>
            <strong>
              Emagrecimento <em>+</em> Hipertrofia
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
}
