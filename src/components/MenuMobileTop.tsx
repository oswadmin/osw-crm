"use client"

import { ReactNode, useEffect, useRef, useState } from 'react';
import { ButtonMedia } from './ButtonMedia';
import { ClipboardListIcon, FacebookIcon, InstagramIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import { Button } from './ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from './ui/navigation-menu';
import { navConfig } from '@/config/navConfig';
import Link from 'next/link';
import { useServices } from './ServiceProvider';


interface MenuMobileTopProps {

}

export default  function MenuMobileTop({

}: MenuMobileTopProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const refService = useRef<HTMLLIElement>(null);

  const [isDropDownOpen, setIsDropDownOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const allServices = useServices();

  useEffect(() => {
    //console.log("isDropDownOpen:" + isDropDownOpen)

    if (refService.current) {
      if (isDropDownOpen) {
        refService.current.textContent = 'Service △';
      } else {
        refService.current.textContent = 'Service ▽';
      }
    }

  }, [isDropDownOpen])

  const showMenu = () => {
    //console.log("hideModal")
    overlayRef.current?.classList.remove("hidden")
    overlayRef.current?.classList.add("flex")
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`;
  }

  const hideMenu = () => {
    //console.log("hideModal")
    overlayRef.current?.classList.remove("flex")
    overlayRef.current?.classList.add("hidden")
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  function ModalNavMenu() {
    return (
      <>
        <nav className="text-blue text-3xl">
          <ul className="">
            <li className="cursor-pointer py-2">
              <Link href="/" key="nav_home" legacyBehavior passHref >
                <span onClick={hideMenu}>Home</span>
              </Link>
            </li>
            <li className="cursor-pointer py-2">
              <Link href="/estimate" key="nav_home" legacyBehavior passHref >
                <span onClick={hideMenu}>Estimate</span>
              </Link>
            </li>
            <li className="cursor-pointer hover:bg-gray-700 py-2" ><span ref={refService}>Service ▽</span>

              <ul className={`flex flex-col pl-4 text-xl  py-2 ${isDropDownOpen ? 'block' : 'hidden'}`}>
                {allServices.map((service, index: any) => (

                    
                      <li key={`navLi${index}`} className="hover:bg-gray-700  py-2" >
                        <Link key={`MenuDesktopLink_${service.slug.current}`} href={`/services/${service.slug.current}`} legacyBehavior passHref >
                          <span key={`navLidLinkSpan${index}`} onClick={hideMenu}>{service.name}</span>
                        </Link>
                      </li>
                    

                  ))
                }
              </ul>
            </li>
            {
              navConfig.mainNav.map((obj, index) => (

                <li key={`navLi2${index}`} className="cursor-pointer  py-2">
                  <Link key={`navLiLink2 ${index}`} href={obj.url.toString()} legacyBehavior passHref >
                    <span key={`navLinkSpan2${index}`} onClick={hideMenu}>{obj.menuName}</span>
                  </Link>
                </li>

              ))
            }
          </ul>
        </nav>

      </>
    )
  }



  return (
    <>
      <div
        ref={overlayRef}
        className={`fixed inset-0 z-50 overflow-y-auto bg-white bg-opacity-90 flex-col gap-4  hidden`}
      >

        {/* CLOSE MODAL BUTTON */}
        <div className='flex justify-end pt-6 pr-8'>
          <Button
            className={`bg-black rounded-full border-2 border-white shadow-md text-xl font-bold text-white hover:bg-black h-[60px]`}
            onClick={hideMenu}>
            &nbsp;X&nbsp;
          </Button>
        </div>

        <div className='flex items-start justify-center'>
          <ModalNavMenu />
        </div>


      </div>


      <div className="absolute right-0 top-5 flex justify-end pr-3 desktop:hidden">
        <Button
          className={`text-3xl font-bold text-blue_dark `}
          onClick={showMenu}>
          ☰
        </Button>

      </div>
    </>
  );
};
