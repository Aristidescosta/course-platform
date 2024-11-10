"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdDehaze, MdOpenInNew } from 'react-icons/md';

export const Header = () => {
    const [title, setTitle] = useState("CodarSe");
    const [drawerOpen, setDrawerOpen] = useState(false);
    const currentPath = usePathname();

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);
    const onClose = () => setDrawerOpen(false);

    useEffect(() => {
        setTitle(document.title);
        onClose();
    }, [currentPath]);

    useEffect(() => {
        const handle = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handle);

        // Limpe o ouvinte de eventos quando o componente for desmontado
        return () => window.removeEventListener("keydown", handle);
    }, []);

    return (
        <header>
            <nav className='fixed top-0 left-0 right-0 flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6'>
                <button className='sm:hidden' onClick={toggleDrawer}>
                    <MdDehaze size={24} />
                </button>
                <ul className='flex gap-4 items-center' tabIndex={drawerOpen ? -1 : 0}>
                    <li>
                        <Link className='border-2 rounded-md p-1 font-bold hover:no-underline outline-offset-4' href={"/"}>CODARSE</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={"/"} data-active={currentPath === "/"} className='data-[active=true]:underline outline-offset-4' >Página inicial</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={"/cursos"} data-active={currentPath === "/cursos"} className='data-[active=true]:underline outline-offset-4'>Cursos</Link>
                    </li>
                    <li className='hidden sm:block'>
                        <Link href={"https://blog.codarse.com"} target='_blank' className='flex gap-1 items-center outline-offset-4'>
                            Blog
                            <MdOpenInNew size={24} />
                        </Link>
                    </li>
                </ul>
                <div
                    tabIndex={drawerOpen ? 0 : -1}
                    data-open={drawerOpen}
                    onClick={onClose}
                    className='fixed top-0 left-0 bottom-0 right-0 bg-gradient-to-r transition-transform from-background data-[open=false]:-translate-x-full'
                >
                    <ul onClick={e => e.stopPropagation()} className='flex flex-col p-4 w-60 gap-4 bg-background h-full'>
                        <li data-active={currentPath === "/"} className='data-[active=true]:border-b-white border-b transition ease-out duration-500 hover:border-b-white border-b-transparent'>
                            <Link className='hover:no-underline' href={"/"} >Página inicial</Link>
                        </li>
                        <li data-active={currentPath === "/cursos"} className='data-[active=true]:border-b-white border-b transition ease-out duration-500 hover:border-b-white border-b-transparent'>
                            <Link className='hover:no-underline' href={"/cursos"} >Cursos</Link>
                        </li>
                        <li className=''>
                            <Link href={"https://blog.codarse.com"} target='_blank' className='flex gap-1 items-center'>
                                Blog
                                <MdOpenInNew size={24} />
                            </Link>
                        </li>
                    </ul>
                </div>

                <h1 className='sm:hidden line-clamp-1'>
                    {title}
                </h1>
            </nav>
            <div className='h-14 sm:h-[72px]' />
        </header>
    );
};
