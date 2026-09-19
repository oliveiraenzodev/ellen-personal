import Image from "next/image";
import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import { SocialIconLink } from "@/components/ui/SocialIconLink";

export function Header() {
  const whatsappUrl = getWhatsAppUrl();

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#inicio" aria-label="Ellen Alves - início">
          <Image
            src="/images/logo-ellen-alves.png"
            alt="Ellen Alves Personal Trainer"
            width={1280}
            height={384}
            priority
          />
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteConfig.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-social" aria-label="Redes sociais de Ellen Alves">
          <SocialIconLink
            network="whatsapp"
            href={whatsappUrl}
            label="Falar com Ellen pelo WhatsApp"
          />
          <SocialIconLink
            network="instagram"
            href={siteConfig.contact.instagram}
            label="Acessar Instagram de Ellen Alves"
          />
        </div>

        <details className="mobile-menu">
          <summary aria-label="Abrir menu de navegação">
            <span>Menu</span>
            <span className="mobile-menu__icon" aria-hidden="true" />
          </summary>
          <nav className="mobile-menu__panel" aria-label="Navegação mobile">
            {siteConfig.navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              Falar no WhatsApp
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
