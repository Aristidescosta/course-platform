"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
    const currentPath = usePathname();

    return (
        <header>
            <nav className='flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6'>
                <button className='sm:hidden'>
                    icon
                </button>
                <ul className='flex gap-4'>
                    <li>
                        <Link className='border-2 rounded-md p-1 font-bold hover:no-underline' href={"/"}>CODARSE</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={"/"} data-active={currentPath === "/"} className='data-[active=true]:underline' >Página inicial</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={"/cursos"} data-active={currentPath === "/cursos"} className='data-[active=true]:underline'>Cursos</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={"https://blog.codarse.com"} target='_blank' className='flex gap-1 items-center'>
                            Blog
                            B
                        </Link>
                    </li>
                </ul>
                <h1 className='sm:hidden'>CodarSe - Página Inicial</h1>
            </nav>
        </header>
    );
};
