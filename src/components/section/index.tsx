import React from 'react';
import { Card } from '../card';

export const Section = () => {
    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>Todos os cursos</h2>
            <ul className='flex flex-col gap-2'>
                <li>
                    <Card
                        title="🏆 Curso de API Rest, Node e Typescript"
                        description={`
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `}
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        href="/cursos/123"
                    />
                </li>
                <li>
                    <Card
                        title="🏆 Curso de API Rest, Node e Typescript"
                        description={`
          Curso de NodeJS e Typescript iniciante. Esse curso é focado nas principais conceitos de um backend para crud. Vamos trabalhar com paginação, filtro, banco de dados sql, query builders, typescript e muito mais. É a porta de entrada para o mundo do Node JS no backend.\n\n#CODARSE
          `}
                        image="https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"
                        href="/cursos/123"
                    />
                </li>
                <li>
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
