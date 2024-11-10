"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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

    return (
        <header>
            <nav className='flex items-center gap-6 justify-start md:justify-center bg-primary py-2 sm:py-4 px-6'>
                <button className='sm:hidden' onClick={toggleDrawer}>
                    icon
                </button>
                <ul className='flex gap-4 items-center' tabIndex={drawerOpen ? -1 : undefined}>
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
                                B
                            </Link>
                        </li>
                    </ul>
                </div>

                <h1 className='sm:hidden'>
                    {title}
                </h1>
            </nav>
        </header>
    );
};
