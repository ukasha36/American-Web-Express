"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';

import { global } from "styled-jsx/css";


import { Component, useState } from "react";



import { usePathname } from 'next/navigation';
 



function NavBar() {
   const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const isServicesPage = pathname === "/service";


  const handleNavLinkClick = () => {
    setNavbar(!navbar); // Toggle navbar state on click
  };

  return (
    <div  className={`  md:h-[5rem] min-w-full  ${isServicesPage || pathname === '/portfolio'  || pathname === '/about' ? "md:bg-brand-100" : "bg-brand-300" } `} >
      <nav className="w-full bg-white  top-0 left-0 right-0 z-10 md:pt-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between   md:block">
              {/* LOGO */}
              <Link href="/">
              <div className=" md:w-full flex  ">
            <Image
              src="/companylogo.png"
              width={130}
              height={90}
              alt="logo "
              className=" sm:w-[10rem] sm:h-[5rem]   md:w-48 md:h-16 object-contain"
            />
          </div>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2  rounded-md outline-none  "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <Image
                      src="\close.svg"
                      width={30}
                      height={30}
                      alt="logo"
                    />
                  ) : (
                    <Image
                      src="\hamburger.svg"
                      width={30}
                      height={30}
                      alt="logo"
               
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div  className=" md:w-[50rem]">
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex capitalize  font-monte ">
              <li className={`
          pb-3 sm:text-xl md:text-lg font-monte md:text-brand-50 font-semibold sm:text-brand-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent navbar-link
          ${pathname === '/' ? 'active' : ''}
        `}>
                  <Link href="/" onClick={handleNavLinkClick}>
                    Home
                  </Link>
                </li>

              <li className={`
          pb-3 sm:text-xl md:text-lg font-monte md:text-brand-50 font-semibold sm:text-brand-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent navbar-link
          ${pathname === '/about' ? 'md:text-brand-500' : ''}
        `}>
                  <Link href="/about" onClick={handleNavLinkClick}>
                    About us 
                  </Link>
                </li>

                    <li className={`
          pb-3 sm:text-xl md:text-lg font-monte md:text-brand-50 font-semibold sm:text-brand-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent navbar-link
          ${pathname === '/service' ? ' md:text-brand-500' : ''}
        `}>
                  <Link href="/service" onClick={handleNavLinkClick}>
                    Services
                  </Link>
                </li>

                <li className={`
          pb-3 sm:text-xl md:text-lg font-monte md:text-brand-50 font-semibold sm:text-brand-200 py-2 md:px-6 text-center border-b-2 md:border-b-0 border-purple-900 md:hover:text-purple-600 md:hover:bg-transparent navbar-link
          ${pathname === '/portfolio' ? 'md:text-brand-500' : ''}
        `}>
                  <Link href="/portfolio" onClick={handleNavLinkClick}>
                    Portfolio
                  </Link>
                </li>

                <li className={`
          sm:pb-2 md:pb-2 md:w-40 sm:text-xl md:text-base  py-2 px-2 text-center   font-monte  hover:md:bg-brand-100   hover:md:text-brand-300  md:rounded-md    font-semibold md:text-brand-100   md:border md:border-solid md:border-brand-100 sm:text-brand-200  
          ${pathname === '/touch' && '  ' || pathname === '/service'  && 'md:text-brand-50 md:border-brand-50' || pathname === '/portfolio'  && 'md:text-brand-50 md:border-brand-50' || pathname === '/about'  && 'md:text-brand-50 md:border-brand-50'}
        `}>
                  <Link href="/touch" onClick={handleNavLinkClick}>
                  Get in Touch
                  </Link>
                </li>
                  
            
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;