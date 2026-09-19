import Image from "next/image";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { SocialIconLink } from "@/components/ui/SocialIconLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          <Image
            src="/images/logo-ellen-alves.png"
            alt="Ellen Alves Personal Trainer"
            width={1280}
            height={384}
          />
          <p>Eu acompanho seu processo com estratégia, proximidade e respeito ao seu ritmo.</p>
        </div>

        <div>
          <p className="footer-title">Atendimento</p>
          <p>Salvador - Bahia</p>
          <p>Presencial e online</p>
          <p>CREF {siteConfig.professional.cref}</p>
        </div>

        <div>
          <p className="footer-title">Contato</p>
          <div className="footer-social" aria-label="Redes sociais de Ellen Alves">
            <SocialIconLink
              network="whatsapp"
              href={getWhatsAppUrl()}
              label={`WhatsApp de Ellen Alves: ${siteConfig.contact.whatsappDisplay}`}
            />
            <SocialIconLink
              network="instagram"
              href={siteConfig.contact.instagram}
              label={`Instagram de Ellen Alves: ${siteConfig.contact.instagramHandle}`}
            />
          </div>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Ellen Alves. Todos os direitos reservados.</p>
        <a href="#inicio">Voltar ao topo ↑</a>
      </div>
    </footer>
  );
}
