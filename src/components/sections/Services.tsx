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
            description="Eu entendo seu ponto de partida e construo o treinamento de acordo com seu objetivo e sua rotina."
          />
        </div>

        <div className="services__grid">
          {siteConfig.services.map((service) => (
            <article className="service-card" data-reveal="up" key={service.number}>
              <span className="service-card__number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="differentials" data-reveal="up">
          <p className="eyebrow">O que eu ofereço a você</p>
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
