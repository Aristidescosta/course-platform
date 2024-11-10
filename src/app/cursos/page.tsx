import { Section } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "CodarSe - Todos os cursos",
};
function page() {
    return (
        <main className="mt-8 flex justify-center">
            <div className="min-[880px]:max-w-[880px]">
                <Section
                    title='Todos os cursos'
                    variant='grid'
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

export default page;