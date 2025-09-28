import React, { ReactNode } from 'react';

interface BlockAccordianProps {
  children: ReactNode,
}

export function BlockAccordian({
  children
}: BlockAccordianProps) {

  
  return (
    <div className="flex flex-col desktop:flex-row justify-center items-center ">
        <div className="flex flex-col text-lg px-6 desktop:w-2/3 w-full">
          
          {children}

      </div>
    </div>
  );
};
