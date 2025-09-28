import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import { ButtonStandard } from './ButtonStandard';

interface BlockEstimateProps {
  estimateMsg: string,
}

export function BlockEstimate({
  estimateMsg
}: BlockEstimateProps) {

  
  return (
    <div className="container mx-auto px-1">
      <div className="text-center mb-1">
        {estimateMsg && <h2 className="text-2xl desktop:text-5xl font-extrabold desktop:font-bold mb-2 text-blue">{estimateMsg}</h2>}
      </div>
      <div className="content flex justify-center">
        <ButtonStandard strURL="/estimate" className="m-4 bg-linear-to-b from-orange_light to-orange hover:bg-orange w-full desktop:w-96 h-[50px] text-2xl">
          Request a free estimate
        </ButtonStandard>

      </div>
    </div>
  );
};
