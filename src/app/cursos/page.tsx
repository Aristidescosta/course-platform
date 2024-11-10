import { Section } from '@/components';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: "CodarSe - Todos os cursos",
};
function page() {
    return (
        <main>
            <Section title='Todos os cursos' variant='grid' />
        </main>
    );
}

export default page;