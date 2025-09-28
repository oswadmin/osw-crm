import Link from 'next/link';
import React, { ReactNode } from 'react';
import { Button } from './ui/button';
import Image from "next/image";
import { ButtonStandard } from './ButtonStandard';

const bgTest: String = '/OSW_Locations.webp'

let bgString: string;
let classNameString: string;

interface CardServicesProps {
  cardTitle: string;
  cardURL?: string;
  cardDesc?: string;
  imgURL?: string;
  imgScale?: string;
  imgLeft?: string;
  imgBottom?: string;
  children?: ReactNode;
  className?: string;
}

function DesktopServiceCard(cardTitle: string, cardURL: string, children: ReactNode) {
  return (
    <>
      {/* Outer Container*/}
      <section className='relative hidden desktop:flex w-[250px] h-[400px] justify-center rounded-xl shadow-2xl border border-orange mb-2'>

        <Button className="absolute w-full h-full rounded-xl  text-center align-bottom flex justify-center items-center text-3xl font-bold z-10 text-blue_dark card-service-text px-8 pb-3 " asChild>


          <Link href={cardURL} className="text-wrap hover:scale-105" >
            <h3 className="border-2 bg-orange rounded-full px-4">
              {cardTitle}
            </h3>
          </Link>

        </Button>


        <div className='flex w-full h-full rounded-xl relative overflow-hidden'>
          {children}
        </div>


      </section>
    </>
  )
}

function DesktopServiceDetailCard(cardTitle: string, cardDesc: string, children: ReactNode) {
  return (
    <>
      {/* Outer Container */}
      <section className={`hidden desktop:flex flex-col desktop:w-[250px] border border-orange bg-white rounded-xl shadow-2xl `}>

        {/* Image Container */}
        <div className='flex w-full h-[400px] rounded-tl-xl rounded-tr-xl relative overflow-hidden mb-2'>
          {children}
        </div>

        {/* Title Container */}
        <h3 className="text-blue_dark card-service-text text-center text-3xl font-bold mb-2">
          {cardTitle}
        </h3>

        {/* Description Container */}
        <p className="flex p-2 text-blue text-start relative text-lg ">
          {cardDesc}
        </p>
      </section>
    </>
  )

}

function MobileServiceCard(cardTitle: string, cardURL: string, children: ReactNode) {
  return (

    <div className={`desktop:hidden flex flex-col bg-white rounded-xl shadow-2xl`}>
      <ButtonStandard strURL={cardURL} className="bg-linear-to-b from-orange_light to-orange hover:bg-orange h-[50px] text-2xl">
        {cardTitle}
      </ButtonStandard>
    </div>
  )
}

function MobileServiceDetailCard(cardTitle: string, cardDesc: string, children: ReactNode) {
  return (
    <>

      {/* Outer Container */}
      <div className={`desktop:hidden flex flex-col w-[350px] border-orange bg-white rounded-xl shadow-2xl border mb-4`}>

        {/* Image Container */}
        <div className='flex flex-1 justify-center '>
          <div className='flex w-[350px] h-[576PX] rounded-tl-xl rounded-tr-xl relative overflow-hidden justify-center'>
            {children}
          </div>
        </div>

        {/* Title Container */}
        <div className="text-center flex-1 mt-4 mb-2 justify-center items-center text-3xl font-bold card-service-text">
          {cardTitle}
        </div>

        {/* Description Container */}
        <div className={`desktop:hidden flex flex-col w-[350px]`}>
          <div className="flex p-2 text-blue text-start relative text-xl ">
            {cardDesc}
          </div>
        </div>

      </div>
    </>
  )
}


export function CardServicesv4({
  cardTitle,
  cardURL = '',
  cardDesc = '',
  imgURL = '',
  imgScale = '1.0',
  imgLeft = '0px',
  imgBottom = '0px',
  children,
  className = ''

}: CardServicesProps) {

  return (
    <>

      {/* DESKTOP CARDS (CARDS WILL BE HIDDEN IN MOBILE VIEW)*/}
      {cardURL !== "" ? DesktopServiceCard(cardTitle, cardURL, children) : DesktopServiceDetailCard(cardTitle, cardDesc, children)}


      {/* MOBILE CARDS (CARDS WILL BE HIDDEN IN DESKTOP VIEW)*/}
      {cardURL !== "" ? MobileServiceCard(cardTitle, cardURL, children) : MobileServiceDetailCard(cardTitle, cardDesc, children)}

    </>
  );
};