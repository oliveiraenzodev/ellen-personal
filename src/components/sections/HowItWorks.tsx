import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HowItWorks() {
  return (
    <>
      <section className="process section" id="como-funciona">
        <div className="container process__grid">
          <SectionHeading
            eyebrow="Como funciona"
            title="Do primeiro contato ao primeiro treino."
            description="Um caminho simples para entender sua necessidade e encontrar o acompanhamento ideal."
          />

          <ol className="process__steps">
            {siteConfig.process.map((step) => (
              <li key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="faq section" aria-labelledby="faq-title">
        <div className="container faq__grid">
          <div>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 id="faq-title">Antes de começar.</h2>
          </div>
          <div className="faq__list">
            {siteConfig.faqs.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  {item.question}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
