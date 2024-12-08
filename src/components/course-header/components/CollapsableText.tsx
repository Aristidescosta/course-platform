"use client";

import React, { useState } from 'react';

interface ICollapsableTextProps extends React.PropsWithChildren {
  numberOfLinesWhenClosed: number;
}

export const CollapsableText = ({ numberOfLinesWhenClosed, children }: ICollapsableTextProps) => {
  const [open, setOpen] = useState(true);


  return (
    <div className='flex flex-col items-end'>
      <p
        data-open={open}
        style={{ "--number-of-lines-when-closed": numberOfLinesWhenClosed } as React.CSSProperties}
        className='data-[open=true]:line-clamp-[var(--number-of-lines-when-closed)] transition-all ease-in-out delay-1000'>
        {children}
      </p>
      <button data-open={open} onClick={() => setOpen(!open)} className='bg-paper rounded border cursor-pointer border-primary px-1 data-[open=true]:-mt-6'>
        {
          open ? "Ver mais" : "Ver menos"
        }
      </button>
    </div>
  );
};
