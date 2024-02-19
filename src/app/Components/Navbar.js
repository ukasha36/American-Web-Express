"use client";
import Image from "next/image";
import Link from "next/link";
import { global } from "styled-jsx/css";


import { Component, useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div  className="  md:h-[6rem] min-w-full">
      <nav className="w-full bg-white  top-0 left-0 right-0 z-10 md:pt-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between md:py-3  md:block">
              {/* LOGO */}
              <Link href="/">
              <div className=" md:w-full flex  ">
            <Image
              src="/companylogo.png"
              width={130}
              height={90}
              alt="logo "
              className=" sm:w-60 sm:h-28   md:w-60 md:h-16 object-contain"
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
                <li className="pb-3  sm:text-xl md:text-lg font-monte md:text-brand-50 font-semibold sm:text-brand-200  py-2 md:px-6 text-center border-b-2 md:border-b-0    border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent navbar-link">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                Home
                  </Link>
                  </li>
                <li className="pb-3  sm:text-xl  md:text-lg font-monte md:text-brand-50 font-semibold  sm:text-brand-200 py-2 md:px-6 text-center border-b-2 md:border-b-0    navbar-link">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About us 
                  </Link>
                </li>
                <li className="pb-3 sm:text-xl md:text-lg md:text-brand-50 sm:text-brand-200 font-monte py-2 px-6 text-center font-semibold border-b-2 md:border-b-0    border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent navbar-link">
                  <Link href="/service " onClick={() => setNavbar(!navbar)}>
                Services
                  </Link>
                </li>
                <li className="pb-3  sm:text-xl  md:text-lg md:text-brand-50 sm:text-brand-200 font-monte py-2 px-6 text-center font-semibold border-b-2 md:border-b-0     border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent navbar-link">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-3 sm:text-xl  md:text-lg md:text-brand-50  sm:text-brand-200 font-monte py-2 px-6 text-center font-semibold border-b-2 md:border-b-0   navbar-link">
                  <Link href="/packages" onClick={() => setNavbar(!navbar)}>
                    Packages
                    </Link>
                  </li>
                <li className="sm:pb-2 md:pb-2 md:w-40 sm:text-xl md:text-base  py-2 px-2 text-center hover:sm:bg-brand-100  font-monte hover:text-brand-300  md:rounded-md    font-semibold md:text-brand-100   md:border md:border-solid md:border-brand-100 sm:text-brand-200   ">
                  <Link href="/touch" onClick={() => setNavbar(!navbar)}>
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