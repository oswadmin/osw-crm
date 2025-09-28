"use client"

import Link from 'next/link';
import Image from "next/image";
import React, { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ButtonMedia } from './ButtonMedia';
import { CaseLower, FacebookIcon, InstagramIcon, MailIcon, ArrowUp, PhoneIcon } from 'lucide-react';
import { siteConfig } from '@/config';
import { ScrollPage } from '@/lib/pageScroll'; 
import { useServices } from './ServiceProvider';


interface PageFooterProps {
  showTop?: boolean;
}

export default function PageFooter({
  showTop = true,
}: PageFooterProps) {

  const oswServices = useServices();

  const topRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const footerImg = useRef<HTMLImageElement>(null);


  // Function to calculate and update background position
  const updateBackgroundPosition = () => {
    if (!footerRef.current || !footerImg.current) return;

    const windowWidth = window.innerWidth;
    const imageAspectRatio = footerImg.current.naturalWidth / footerImg.current.naturalHeight;
    const newHeight = Math.floor(windowWidth / imageAspectRatio);
    //image.style.height = `${newHeight}px`;

    const footerRect = footerRef.current.getBoundingClientRect();
    const footerHeight = Math.floor(footerRect.height);
    //console.log("footerHeight:" + footerHeight);
    //console.log('imgHeight:' + newHeight);

    // Calculate the parallax offset
    const parallaxRange = newHeight - footerHeight;
    //console.log("parallaxRange:" + parallaxRange)


    const footerTop = Math.max(footerRect.top + window.scrollY);
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    //console.log("wh:" + windowHeight + " sY:" + window.scrollY)

    if (window.scrollY >= windowHeight && showTop) {
      topRef.current?.classList.remove("hidden")
    } else {
      topRef.current?.classList.add("hidden")
    }

    // Calculate how far the footer is from the viewport bottom
    const distanceFromViewportBottom = Math.floor(windowHeight - (footerTop - scrollPosition));
    //console.log("windowHeight:" + windowHeight)
    //console.log("distanceFromViewportBottom:" + distanceFromViewportBottom)

    let offset = (distanceFromViewportBottom / windowHeight) * parallaxRange;
    //let offset = parallaxRange;
    //console.log("offset:" + offset)

    // Clamp the offset
    offset = Math.max(0, Math.min(offset, parallaxRange));
    //console.log("offset:" + offset)

    // Apply the background position
    footerRef.current.style.backgroundPosition = `center ${-offset}px`;
  };


  const handleScrollToTop = () => {
    //console.log('handleScrollToTop')
    ScrollPage({})
  };


  useEffect(() => {
    //console.log('Component mounted!');

    // Call the function initially
    updateBackgroundPosition();

    // Add scroll and resize listeners
    window.addEventListener('scroll', updateBackgroundPosition);
    window.addEventListener('resize', updateBackgroundPosition);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateBackgroundPosition);
      window.removeEventListener('resize', updateBackgroundPosition);
    };
  }, []);




  return (
    <>

      {/* TODO:  Remove image.  But, ScrollToTop button is dependent on it. */}
      <Image ref={footerImg} alt="bgImgRef" src='/OSW_SURFACE1.webp}' width="1" height="1" className='hidden' />

      <footer
        ref={footerRef}
        className={`relative flex-1 flex-col mt-auto bg-cover bg-no-repeat`}
        style={{
          //backgroundImage: `url(${siteConfig.OSW_IMG.SURFACE1})`,
          //willChange: 'background-position',
        }}>




        {/* <div className='relative flex-1 flex justify-center h-12 bg-orange bg-opacity-50 '>
      
        <div className="flex-1 bg-orange_light footer-scalap" />
        <div className="flex-1 bg-orange_light  footer-scalap" />
        <div className="flex-1 bg-orange_light  footer-scalap" />
      </div> */}

        {/* <div className='pt-20 z-20 w-auto min-h-[300px] bg-orange bg-opacity-50 '> */}
        <div className='pt-20 z-20 w-auto min-h-[300px] bg-linear-to-b from-white to-orange_light'>

          <div className="container flex-1 flex justify-stretch items-start pb-6">

            {/*****************************************************************/}
            {/* MEDIA BLOCK */}
            {/*****************************************************************/}


            <div className="flex-1 flex flex-col items-center gap-y-2">

              {/* FOOTER LOGO*/}
              <a href="/" className='hidden desktop:flex' aria-label='Orange Soft Wash Home'>
                <Image
                  src='/OSW_Logo_3_Transparent.webp'
                  alt="Orange Soft Wash Logo, Home"
                  width={200}
                  height={197}
                  className="scale-[70%] hover:scale-[75%] "
                />
              </a>

              {/* MEDIA BUTTONS CONTAINER */}
              <div className='hidden desktop:flex justify-center'>

                {/* INSTAGRAM BUTTON */}
                <a href={siteConfig.OSW_Links.Instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" >
                  <Image
                    src="/MediaIcon_Instagram.webp"
                    alt="Instagram"
                    width={40}
                    height={40}
                    className="mr-2 border border-orange rounded-full"
                  />
                </a>

                {/* FACEBOOK BUTTON */}
                <a href="https://www.facebook.com/profile.php?id=61570206387732#" aria-label='Facebook' target="_blank" rel="noopener noreferrer"  >
                  <Image
                    src="/MediaIcon_Facebook.webp"
                    alt="Facebook"
                    width={40}
                    height={40}
                    className="mr-2 border border-orange rounded-full"
                  />
                </a>
                {/* NEXTDOOR BUTTON */}
                <a href="https://nextdoor.com/pages/orange-soft-washing-westerville-oh/" aria-label='Facebook' target="_blank" rel="noopener noreferrer" >
                  <Image
                    src="/MediaIcon_NextDoor.webp"
                    alt="NextDoor"
                    width={40}
                    height={40}
                    className="border border-orange rounded-full"
                  />
                </a>

              </div>

              {/* LOCATIONS LINK */}
              <Link href="/#Locations" className='hidden desktop:flex text-blue font-bold text-lg hover:scale-105' aria-label='Service Locations'>Service Locations</Link>

              {/* COPYWRIGHT TEXT */}
              <div className='flex text-sm text-center text-blue font-semibold'>
                &copy; 2025 Orange Soft Wash, LLC.<br />All rights reserved.
              </div>
            </div>



            {/*****************************************************************/}
            {/* SERVICES BLOCK */}
            {/*****************************************************************/}
            <div className="hidden desktop:flex flex-1  flex-col items-start space-y-4 text-blue border-l-2 border-l-blue font-bold mt-10">
              <h2 className='text-3xl font-bold border-l-8 border-blue pl-4'>Services</h2>
              <div className='flex-1 flex flex-col ml-6 space-y-2 '>


                {oswServices.map((service: any, index: any) => (

                      <Link href={`/services/${service.slug.current}`} key={`MenuFooterServiceLink_${service.slug.current}`} className='hover:scale-105' >{service.name}</Link>

                  ))

                }
              </div>

            </div>


            {/* CONTACT US BLOCK */}
            <div className="hidden desktop:flex flex-1 flex-col items-start space-y-4 text-blue  border-l-2 border-l-blue font-bold mt-10 ">
              <h2 className='text-3xl font-bold border-l-8 border-l-blue pl-4'>Contact Us</h2>

              <div className='flex items-center pl-6'>
                {/* PHONE BUTTON */}
                <ButtonMedia strURL={`tel:${siteConfig.OSW_Phone}`} aria_label='Contact sales by phone'>
                  <PhoneIcon className="w-6 h-6 text-orange" />
                </ButtonMedia>

                <a href={`tel:${siteConfig.OSW_Phone}`} className='hover:scale-105'>
                  {siteConfig.OSW_Phone}
                </a>
              </div>

              <div className='flex items-center pl-6'>
                {/* Mail BUTTON */}
                <ButtonMedia strURL={`mailto:${siteConfig.OSW_Email_Sales}`} aria_label='Contact sales by email'>
                  <MailIcon className="w-6 h-6 text-orange" />
                </ButtonMedia>
                <a href={`mailto:${siteConfig.OSW_Email_Sales}`} className='hover:scale-105'>
                  {siteConfig.OSW_Email_Sales}
                </a>


              </div>

            </div>
          </div>

        </div>


        <div ref={topRef} className="hidden  fixed bottom-20 desktop:bottom-4
       right-1 p-3 z-9990">
          <Button
            className={`rounded-full text-blue text-2xl font-bold h-[100px] flex-col`}
            onClick={handleScrollToTop}
          >
            <ArrowUp className='text-4xl' />Top
          </Button>

        </div>



      </footer>



    </>
  );
};