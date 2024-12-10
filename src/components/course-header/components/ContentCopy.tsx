"use client";

import { MdCheck, MdContentCopy } from 'react-icons/md';
import React, { useEffect, useState } from 'react';

export interface IContentCopyProps {
  copyTitle: string;
  content: string;
}

export const ContentCopy = ({ content, copyTitle }: IContentCopyProps) => {
  const [wasCopied, setWasCopied] = useState(false);
  const handleCopyContent = () => {
    window.navigator.clipboard.writeText(content);
    setWasCopied(true);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (wasCopied) {
      timeout = setTimeout(() => setWasCopied(false), 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [wasCopied]);


  return (
    <>
      <span>{copyTitle}</span>

      <div className='flex items-center gap-2'>
        <input readOnly autoFocus onFocus={(e) => e.target.select()} className='bg-background p-1 px-2 rounded' type="text" value={content} />
        <button onClick={handleCopyContent}>
          {
            wasCopied ? <MdCheck className='text-primary' size={18} /> : <MdContentCopy size={18} />
          }
        </button>
      </div>
    </>
  );
};
