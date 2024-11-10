import React from 'react';
import { Card } from '../card';

interface ISectionProps {
    title: string;
    variant: "grid" | "h-list"
}
export const Section = ({ title, variant = "grid" }: ISectionProps) => {
    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>{title}</h2>
            <ul data-variant={variant} className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 gap-2 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'>
                <li className='w-full data-[variant=h-list]:sm:w-72' data-variant={variant}>
                    <Card
                        title="🏆 Curso de API Rest, Node e Typescript"
                        description={`
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `}
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        href="/cursos/123"
                    />
                </li>
                <li className='w-full data-[variant=h-list]:sm:w-72' data-variant={variant}>
                    <Card
                        title="🏆 Curso de API Rest, Node e Typescript"
                        description={`
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `}
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        href="/cursos/123"
                    />
                </li>
                <li className='w-full data-[variant=h-list]:sm:w-72' data-variant={variant}>
                    <Card
                        title="🏆 Curso de API Rest, Node e Typescript"
                        description={`
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `}
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        href="/cursos/123"
                    />
                </li>
            </ul>
        </section>
    );
};
