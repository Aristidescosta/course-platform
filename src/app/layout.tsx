import { Nunito } from "next/font/google";
import { PropsWithChildren } from "react";
import type { Metadata } from "next";

import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodarSe - Os melhores cursos de programação gratuitos",
  description: "Os melhores cursos de programação gratuitos com a melhor experiência de aprendizado e foco",
};

interface IRootLayoutProps extends PropsWithChildren { }

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="pt-AO">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
