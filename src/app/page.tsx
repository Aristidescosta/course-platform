import { Metadata } from "next";
import { Card } from "@/components";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function Home() {
  return (
    <main className="bg-background">
      <Card
        title="🏆 Curso de API Rest, Node e Typescript"
        description={`
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `}
        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
        href="/cursos/123"
      />
    </main>
  );
}
