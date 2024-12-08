import React from 'react';

import { Button } from '../button';
import { CollapsableText } from './components/CollapsableText';

export const CourseHeader = () => {
    return (
        <div className='flex flex-col gap-2'>
            <h1 className='font-extrabold text-xl line-clamp-2'>🔔 NextJS, TailwindCSS e Typescript</h1>
            <CollapsableText numberOfLinesWhenClosed={3}>Este curso gratuito é um guia completo para desenvolvedores que desejam construir uma plataforma de cursos online moderna e integrada com a API do YouTube. Utilizando um stack de tecnologia de ponta, incluindo NextJS, TailwindCSS, e TypeScript, você aprenderá a criar uma aplicação web rica em funcionalidades, como Server-Side Rendering (SSR), Static Site Generation (SSG), e integrar com APIs RESTful. O que você vai aprender: NextJS: Dominar conceitos avançados como SSR e SSG para otimizar a performance e a SEO da sua plataforma. TailwindCSS: Utilizar este framework CSS para um design responsivo e altamente personalizável. TypeScript: Aplicar TypeScript no projeto para melhorar a escalabilidade e a manutenção do código. Integração com API do YouTube: Aprender a manipular a API do YouTube para incorporar vídeos e controlar funcionalidades do player diretamente na sua plataforma. Controle de Cache do NextJS: Implementar estratégias eficientes de cache para melhorar a performance da aplicação. Localstorage: Usar o localstorage para salvar progressos e aulas concluídas, melhorando a experiência do usuário. UX/UI: Projetar uma interface intuitiva que facilite a interação do usuário com a plataforma, aderindo às melhores práticas de design e usabilidade. HTML Semântico: Reforçar a importância do HTML semântico para acessibilidade e SEO. Deploy com Vercel: Executar o deploy da aplicação em um domínio personalizado utilizando a Vercel, explorando todas as funcionalidades desta poderosa plataforma de hospedagem. Para quem é este curso: Ideal para desenvolvedores web iniciantes, intermediários a avançados que querem aprimorar suas habilidades em desenvolvimento front-end utilizando tecnologias modernas e reais demandadas pelo mercado. Também é perfeito para aqueles que desejam aprender a integrar APIs externas em suas aplicações de forma eficaz. Pré-requisitos: Conhecimento básico de React Familiaridade com JavaScript e CSS Noções básicas de APIs Inicie agora mesmo e transforme sua carreira desenvolvendo aplicações web completas e altamente eficientes com as melhores tecnologias do mercado! #CODARSE</CollapsableText>
            <div className='flex gap-2 items-center'>
                <Button
                    title="Compartilhar"
                />
                <span>48 aulas</span>
            </div>
        </div>
    );
};
