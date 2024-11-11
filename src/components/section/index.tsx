"use client";

import React, { UIEvent, useRef, useState } from 'react';
import { Card, ICardProps } from '../card';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface ISectionProps {
    title: string;
    items: ICardProps[];
    variant: "grid" | "h-list"
}
export const Section = ({ title, variant = "grid", items }: ISectionProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const [scrollAt, setScrollAt] = useState<"start" | "middle" | "end">("start");

    const scrollToPosition = (position: number) => {
        const currentScrollLeft = listRef.current?.scrollLeft || 0;
        listRef.current?.scrollTo({
            behavior: "smooth",
            left: position + currentScrollLeft,
            top: 0,
        });
    };

    const handleScroll = (e: UIEvent<HTMLUListElement, globalThis.UIEvent>) => {
        const currentScrollLeft = e.currentTarget?.scrollLeft || 0;
        const scrollBarWidth = e.currentTarget?.scrollWidth || 0;
        const clientWidth = e.currentTarget?.clientWidth || 0;
        if (currentScrollLeft === 0) {
            setScrollAt("start");
        } else if ((scrollBarWidth - clientWidth) === currentScrollLeft) {
            setScrollAt("end");
        } else setScrollAt("middle");
    };


    return (
        <section className='flex flex-col gap-4 px-4'>
            <h2 className='font-bold text-xl'>{title}</h2>
            <ul
                ref={listRef}
                onScroll={handleScroll}
                data-variant={variant}
                className='grid grid-cols-1 sm:grid-cols-none data-[variant=grid]:sm:grid-cols-2 data-[variant=grid]:md:grid-cols-3 gap-2 data-[variant=h-list]:sm:grid-flow-col data-[variant=h-list]:sm:overflow-x-auto'
            >

                {
                    variant === "h-list" &&
                    <button
                        onClick={() => scrollToPosition(-300)}
                        className='h-14 w-14 bg-primary rounded-full hidden sm:flex items-center transition-opacity justify-center sticky my-auto left-0 -ml-14 disabled:opacity-0 active:opacity-80'
                        disabled={scrollAt === "start"}
                    >
                        <MdKeyboardArrowLeft size={32} />
                    </button>
                }

                {
                    items.map((item) => (
                        <li key={item.title} className='w-full data-[variant=h-list]:sm:w-72' data-variant={variant}>
                            <Card {...item} />
                        </li>
                    ))
                }

                {
                    variant === "h-list" &&
                    <button
                        onClick={() => scrollToPosition(300)}
                        className='h-14 w-14 bg-primary rounded-full hidden sm:flex items-center transition-opacity justify-center sticky my-auto right-0 -ml-14 disabled:opacity-0 active:opacity-80'
                        disabled={scrollAt === "end"}
                    >
                        <MdKeyboardArrowRight size={32} />
                    </button>
                }
            </ul>
        </section>
    );
};
