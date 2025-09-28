import React from 'react';
import { CardWhyUsSmall } from './CardWhyUsSmall';
import Image from 'next/image';
import { ButtonStandard } from './ButtonStandard';
import { siteConfig, messageConfig } from '@/config';
import ModalMenu from "@/components/MenuMobileTop";
import PageHeader from "@/components/PageHeader";

interface PageTitleSectionProps {
  title?: string;
  imgURL?: string;
  imgAlt?: string;
}

export function PageTitleSection({
  title,
  imgURL = '/OSW_DECK1.webp',
  imgAlt = "",
}: PageTitleSectionProps) {
  return (
    <>
      <section
        className="bg-cover bg-center bg-no-repeat bg-[#fed7aa]/70 bg-blend-overlay bg- min-h-[400px]" // Added min-h-screen, removed absolute and relative
        style={{
          backgroundImage: `url(${imgURL})`,
          backgroundPosition: "center bottom",

        }}
        id={title}
      >
        <div className="relative z-10"> {/* Keep relative z-10 on the inner div */}
          <ModalMenu/>
          <PageHeader/>

          <div className="container flex flex-col items-center desktop:pt-8 p-2 gap-4 min-h-[325px]">
            <div className="flex-1 flex-col justify-center space-y-6 ">
              <h1 className="font-extrabold desktop:font-bold text-5xl desktop:text-6xl text-blue text-center ">
                {title}
              </h1>

              <p className="font-bold text-lg desktop:text-2xl text-blue text-center">
                {messageConfig.OSW_MSG_TagLine}
              </p>

              <div className='flex justify-center'>
                <ButtonStandard strURL="/estimate" className="w-full desktop:w-96 h-[50px] bg-linear-to-b from-orange_light to-orange hover:bg-orange text-xl desktop:text-2xl">
                  Request a free estimate
                </ButtonStandard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container flex flex-col desktop:flex-row mt-4 desktop:mx-auto p-2 gap-2 justify-items-start desktop:justify-around desktop:items-center">
        <CardWhyUsSmall title="Quick & Easy">
          <Image
            src='/OSW_Icon_Lightning.webp'
            alt="Quick & Easy"
            width={50}
            height={50}
            className=""
          />
        </CardWhyUsSmall>
        <CardWhyUsSmall title="Eco-Friendly Options">
          <Image
            src='/OSW_Icon_Eco1.webp'
            alt="Eco-Friendly Options"
            width={50}
            height={50}
            className=""
          />
        </CardWhyUsSmall>

        <CardWhyUsSmall title="Licensed & Insured">
          <Image
            src='/OSW_Icon_Shield.webp'
            alt="Licensed & Insured"
            width={50}
            height={50}
            className=""
          />
        </CardWhyUsSmall>
        <CardWhyUsSmall title="Satisfaction Guaranteed">
          <Image
            src={siteConfig.OSW_IMG.OSW_Icon_Satisfaction}
            alt="Satisfaction Guaranteed"
            width={50}
            height={50}
            className=""
          />
        </CardWhyUsSmall>
      </div>
    </>
  );
}