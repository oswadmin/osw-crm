import React, { ReactNode } from 'react';

interface CardWhyUsLargeProps {
  title: string;
  cardText: string;
  children?: ReactNode;
  className?: string;
}

export function CardWhyUsLarge({
  title,
  cardText,
  children,
  className = ''
}: CardWhyUsLargeProps) {
  return (
    <>
      <div className="flex flex-col w-[220px]
      rounded-xl border bg-white shadow-2xl border-orange gap-y-4  p-2">
        <div className='flex h-[50px] justify-center relative'>
          <div className="flex h-[50px] w-[50px] relative">
            {children}
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-blue h-[calc(2em+0.5rem)] ">
          <span className="inline-block leading-tight line-clamp-2">
            {title}
          </span>
        </h2>
        <p className="text-center">{cardText}</p>
      </div>
    </>
  );
};
