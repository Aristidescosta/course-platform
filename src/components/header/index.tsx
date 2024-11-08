"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export const Header = () => {
    const currentPath = usePathname();

    return (
        <header>
            <nav className='flex items-center justify-center bg-primary py-4'>
                <ul className='flex gap-4'>
                    <li>
                        <Link className='border border-2 rounded-md p-2 font-bold hover:no-underline' href={"/"}>CODARSE</Link>
                    </li>
                    <li>
                        <Link href={"/"} data-active={currentPath === "/"} className='data-[active=true]:underline' >Página inicial</Link>
                    </li>
                    <li>
                        <Link href={"/cursos"} data-active={currentPath === "/cursos"} className='data-[active=true]:underline'>Cursos</Link>
                    </li>
                    <li className='flex gap-1 items-center'>
                        <Link href={"https://blog.codarse.com"} target='_blank'>Blog</Link>

                    </li>
                </ul>
            </nav>
        </header>
    );
};
