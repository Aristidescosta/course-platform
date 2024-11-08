import { Nunito } from "next/font/google";
import type { Metadata } from "next";

import { Header } from "@/components";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco.",
};

type IRootLayout = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="pt-AO">
      <body
        className={`${nunito.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
