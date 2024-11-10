import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ICardProps {
    image: string;
    title: string;
    description: string;
    href: string;
}

export const Card: React.FC<ICardProps> = ({ image, description, href, title }) => {
    return (
        <Link href={href} className='hover:no-underline'>
            <article className='flex flex-col gap-4 p-2 rounded sm:hover:bg-primary'>
                <Image
                    priority
                    src={image}
                    alt={title}
                    width={1000}
                    height={0}
                    draggable={false}
                    className='aspect-video object-cover rounded-2xl sm:rounded '
                />
                <h4 className='line-clamp-2 font-extrabold text-lg'>{title}</h4>
                <p className='line-clamp-3 sm:line-clamp-4 md:line-clamp-5'>{description}</p>
            </article>
        </Link>
    );
};
