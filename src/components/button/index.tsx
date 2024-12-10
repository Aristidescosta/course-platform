"use client";

import React, { useState } from 'react';
import { CgShare } from 'react-icons/cg';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ContentCopy, IContentCopyProps } from '../course-header/components/ContentCopy';
interface IButtonProps extends IContentCopyProps {
    title: string;
}

export const Button = ({ title, content, copyTitle }: IButtonProps) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    onMouseDown={() => setIsPressed(true)}
                    onMouseUp={() => setIsPressed(false)}
                    onMouseLeave={() => setIsPressed(false)}
                    className={`flex items-center gap-3 py-2 px-4 rounded-full bg-paper ${isPressed ? 'scale-95' : ''} transition-transform duration-150`}
                >
                    <CgShare />
                    <span>{title}</span>
                </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
                <DropdownMenu.Content className="p-2 bg-paper border border-primary rounded-lg flex flex-col gap-2 max-w-sm w-full min-w-72" sideOffset={5}>
                    <ContentCopy
                        content={content}
                        copyTitle={copyTitle}
                    />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};
