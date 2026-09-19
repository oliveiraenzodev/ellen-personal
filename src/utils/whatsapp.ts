import { siteConfig } from "@/data/site";

const defaultMessage =
  "Olá, Ellen! Vi seu site e gostaria de saber mais sobre o acompanhamento.";

export function getWhatsAppUrl(message = defaultMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
