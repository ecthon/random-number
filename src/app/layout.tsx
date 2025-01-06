import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sorteador de Números - Gerador de Números Aleatórios Online",
  description:
    "Use nosso sorteador de números para gerar números aleatórios de forma rápida e fácil. Ideal para sorteios, loterias e muito mais.",
  keywords:
    "sorteador de números, gerador de números aleatórios, sorteios, loterias, números aleatórios online",
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7827471872817247"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={`${sora.variable} antialiased`}>{children}</body>
    </html>
  );
}
