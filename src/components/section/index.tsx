"use client";

import React, { useRef } from 'react';
import { Card, ICardProps } from '../card';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface ISectionProps {
    title: string;
    items: ICardProps[];
    variant: "grid" | "h-list"
}
export const Section = ({ title, variant = "grid", items }: ISectionProps) => {

    const listRef = useRef<HTMLUListElement>(null);

    const scrollToPosition = (position: number) => {
        const currentScrollPosition = listRef.current?.scrollLeft || 0;
        listRef.current?.scrollTo({
            behavior: "smooth",
            left: position + currentScrollPosition,
            top: 0,
        });
    };


    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>{title}</h2>
            <ul
                ref={listRef}
                data-variant={variant}
                className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 gap-2 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
            >

                <button onClick={() => scrollToPosition(-300)} className='h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky my-auto left-0 -ml-14'>
                    <MdKeyboardArrowLeft size={32} />
                </button>

                {
                    items.map((item) => (
                        <li key={item.title} className='w-full data-[variant=h-list]:sm:w-72' data-variant={variant}>
                            <Card {...item} />
                        </li>
                    ))
                }

                <button
                    onClick={() => scrollToPosition(300)}
                    className='h-14 w-14 bg-primary rounded-full flex items-center justify-center sticky my-auto right-0 -ml-14'
                >
                    <MdKeyboardArrowRight size={32} />
                </button>
            </ul>
        </section>
    );
};
