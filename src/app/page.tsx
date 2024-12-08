import { Metadata } from "next";
import { Section } from "@/components";

export const metadata: Metadata = {
  title: "CodarSe - Página inicial",
};

export default function Home() {
  return (
    <main className="mt-8 flex justify-center">
      <div className="w-full min-[880px]:max-w-[880px]">
        <Section
          title="Veja mais cursos"
          variant="h-list"
          items={[{
            title: "🏆 Curso de API Rest, Node e Typescript",
            description: `
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `,
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            href: "/cursos/123"
          },
          {
            title: "🏆 Curso de API Rest, Node e Typescript",
            description: `
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `,
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            href: "/cursos/123"
          },
          {
            title: "🏆 Curso de API Rest, Node e Typescript",
            description: `
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `,
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            href: "/cursos/123"
          },
          {
            title: "🏆 Curso de API Rest, Node e Typescript",
            description: `
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `,
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            href: "/cursos/123"
          },
          {
            title: "🏆 Curso de API Rest, Node e Typescript",
            description: `
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `,
            image: "https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg",
            href: "/cursos/123"
          },]}
        />
      </div>
    </main>
  );
}
