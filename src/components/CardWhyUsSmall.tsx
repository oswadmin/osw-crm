import { siteConfig } from '@/config';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface CardWhyUsSmallProps {
  title?: string;
  children?: ReactNode;
}

export function CardWhyUsSmall({ 
  title, 
  children
}: CardWhyUsSmallProps) {
  return (
    <>
      <div className="flex flex-row items-center">
          
          <div className="h-[50px] w-[50px] relative">
            {children}
          </div>

          <h2 className="desktop:w-[126px] ml-2 text-xl font-bold">{title}</h2>
      </div>
    </>
  );
};
