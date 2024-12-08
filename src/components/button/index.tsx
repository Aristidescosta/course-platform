import React from 'react';
import { CgShare } from 'react-icons/cg';

interface IButtonProps {
    title: string;
}

export const Button = ({ title }: IButtonProps) => {
    return (
        <button className='flex items-center gap-3 py-2 px-4 bg-paper rounded-full'>
            <CgShare />
            <span>{title}</span>
        </button>
    );
};
