import Image from "next/image";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { CtaLink } from "@/components/ui/CtaLink";
import { SocialIconLink } from "@/components/ui/SocialIconLink";

export function FinalCTA() {
  return (
    <section className="final-cta" id="contato">
      <div className="final-cta__image" aria-hidden="true">
        <Image
          src="/images/ellen-barra.jpeg"
          alt=""
          fill
          sizes="100vw"
        />
      </div>
      <div className="container final-cta__content" data-reveal="up">
        <p className="eyebrow">Seu primeiro passo é agora</p>
        <h2>Vamos construir sua evolução?</h2>
        <p>
          Me conte seu objetivo e vamos descobrir qual acompanhamento faz sentido
          para a sua realidade.
        </p>
        <div className="final-cta__actions">
          <CtaLink href={getWhatsAppUrl()} target="_blank" rel="noreferrer">
            Entre em contato
          </CtaLink>
          <SocialIconLink
            className="final-cta__instagram"
            network="instagram"
            href={siteConfig.contact.instagram}
            label={`Acessar Instagram de Ellen Alves: ${siteConfig.contact.instagramHandle}`}
          />
        </div>
      </div>
    </section>
  );
}
