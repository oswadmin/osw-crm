"use client"

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ClipboardListIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/button';
import Image from "next/image";


export default function ModalOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);


  const showModal = () => {
    //console.log("hideModal")
    overlayRef.current?.classList.remove("hidden")
    overlayRef.current?.classList.add("flex")
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }

  const hideModal = () => {
    //console.log("hideModal")
    overlayRef.current?.classList.remove("flex")
    overlayRef.current?.classList.add("hidden")
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };


  return (
    <>
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-white bg-opacity-90 z-9999 flex-col items-end justify-end pb-6 pr-8 gap-4 overlay hidden`}
        onClick={hideModal}
      >

        {/* ESTIMATE BUTTON */}
        <div className='flex flex-row items-center gap-x-4 text-2xl'>
          <span className='rounded-[12px] bg-white border border-orange px-2 opacity-80'>Estimate</span>
          <Button className="bg-orange hover:bg-orange rounded-full shadow-lg text-2xl font-bold text-blue_dark h-[60px] w-[60px]">
            <a href="/estimate"  >
              <ClipboardListIcon className='text-white' />
            </a>
          </Button>
        </div>

        {/* Phone BUTTON */}
        <div className='flex flex-row items-center gap-x-4 text-2xl'>
          <span className='rounded-[12px] bg-white border border-orange px-2 opacity-80'>Phone</span>
          <Button className="bg-lime-700 hover:bg-lime-700 rounded-full shadow-lg text-2xl font-bold text-white h-[60px] w-[60px]">
            <a href={`tel:${siteConfig.OSW_Phone}`}  >
              <PhoneIcon className='text-whate' />
            </a>
          </Button>
        </div>

        {/* EMAIL BUTTON */}
        <div className='flex flex-row items-center gap-x-4 text-2xl'>
          <span className='rounded-[12px] bg-white border border-orange px-2 opacity-80'>Email</span>
          <Button className="bg-blue hover:bg-blue rounded-full shadow-lg text-2xl font-bold text-white h-[60px] w-[60px]">
            <a href={`mailto:${siteConfig.OSW_Email_Sales}`}  >
              <MailIcon className='text-white' />
            </a>
          </Button>
        </div>



        {/* FACEBOOK BUTTON */}
        <div className='flex flex-row items-center gap-x-4 text-2xl'>
          <span className='rounded-[12px] bg-white border border-orange px-2 opacity-80'>Facebook</span>
          <a href={siteConfig.OSW_Links.Facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer" className='rounded-full shadow-lg' >
            <Image
              src="/MediaIcon_Facebook.webp"
              alt="Facebook"
              width={60}
              height={60}
              className=""
            />
          </a>
        </div>

        {/* INSTAGRAM BUTTON */}
        <div className='flex flex-row items-center gap-x-4 text-2xl'>
          <span className='rounded-[12px] bg-white border border-orange px-2 opacity-80'>Instagram</span>

          <a href={siteConfig.OSW_Links.Instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className='rounded-full shadow-lg' >
            <Image
              src="/MediaIcon_Instagram.webp"
              alt="Instagram"
              width={60}
              height={60}
              className=""
            />
          </a>

        </div>



        {/* CLOSE MODAL BUTTON */}
        <Button
          className={`bg-black rounded-full shadow-lg text-xl font-bold text-white hover:bg-black h-[60px] w-[60px]`}
          onClick={hideModal}>
          &nbsp;X&nbsp;
        </Button>

      </div>


      <div className="desktop:hidden fixed bottom-3 right-2 p-3 z-9990">
        <Button
          className={`bg-blue rounded-full border-2 border-white shadow-md text-2xl font-bold text-white hover:bg-blue h-[60px]`}
          onClick={showModal}>
          ...
        </Button>

      </div>
    </>
  );
};
