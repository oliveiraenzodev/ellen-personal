import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ellen Alves | Personal Trainer em Salvador e Online",
  description:
    "Treinamento personalizado para emagrecimento e hipertrofia com Ellen Alves. Atendimento presencial em Salvador e consultoria online.",
  keywords: [
    "personal trainer Salvador",
    "consultoria online",
    "treinamento personalizado",
    "emagrecimento",
    "hipertrofia",
    "Ellen Alves",
  ],
  openGraph: {
    title: "Ellen Alves | Personal Trainer",
    description:
      "Seu objetivo, sua força, sua evolução. Atendimento presencial em Salvador e acompanhamento online.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellen Alves | Personal Trainer",
    description: "Treinamento personalizado em Salvador e online.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#090a0a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
