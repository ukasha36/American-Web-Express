"use client";
import Image from "next/image";
import Link from "next/link";
 

import { Component, useState } from "react";

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-white  top-0 left-0 right-0 z-10 md:pt-2">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-cyan-600 font-bold "> American Web Express</h2>
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
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex  ">
                <li className="pb-3  sm:text-xl md:text-lg font-sans md:text-brand-50 font-semibold sm:text-brand-200  py-2 md:px-6 text-center border-b-2 md:border-b-0    border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent navbar-link">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                Home
                  </Link>
                  </li>
                <li className="pb-3  sm:text-xl  md:text-lg font-sans md:text-brand-50 font-semibold  sm:text-brand-200 py-2 md:px-6 text-center border-b-2 md:border-b-0    navbar-link">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About us 
                  </Link>
                </li>
                <li className="pb-3 sm:text-xl md:text-lg md:text-brand-50 sm:text-brand-200 font-sans py-2 px-6 text-center font-semibold border-b-2 md:border-b-0    border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent navbar-link">
                  <Link href="/service " onClick={() => setNavbar(!navbar)}>
                Services
                  </Link>
                </li>
                <li className="pb-3  sm:text-xl  md:text-lg md:text-brand-50 sm:text-brand-200 font-sans py-2 px-6 text-center font-semibold border-b-2 md:border-b-0     border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent navbar-link">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
                <li className="pb-3 sm:text-xl  md:text-lg md:text-brand-50  sm:text-brand-200 font-sans py-2 px-6 text-center font-semibold border-b-2 md:border-b-0   navbar-link">
                  <Link href="/packages" onClick={() => setNavbar(!navbar)}>
                    Packages
                    </Link>
                  </li>
                <li className="sm:pb-3 md:pb-2  sm:text-xl md:text-lg hover:sm:bg-brand-100  font-sans hover:text-brand-300  rounded-md    font-semibold md:text-brand-50  md:border-2 md:border-solid md:border-brand-100 sm:text-brand-200   py-2 px-6 text-center   navbar-link">
                  <Link href="touch" onClick={() => setNavbar(!navbar)}>
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