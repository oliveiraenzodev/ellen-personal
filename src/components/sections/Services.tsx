import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Services() {
  return (
    <section className="services section" id="servicos">
      <div className="container">
        <div className="services__header">
          <SectionHeading
            eyebrow="Serviços"
            title="Acompanhamento que se adapta a você."
            description="Escolha o ponto de partida. O treinamento é construído de acordo com seu objetivo e sua rotina."
          />
        </div>

        <div className="services__grid">
          {siteConfig.services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-card__number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="differentials">
          <p className="eyebrow">O que você encontra aqui</p>
          <ul>
            {siteConfig.differentials.map((item) => (
              <li key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
