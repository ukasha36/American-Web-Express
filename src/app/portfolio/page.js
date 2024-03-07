
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
  import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

  import Branding from "./branding/page";
  import Logo from "./logo/page";
  import Seo from "./seo/page";
  import Website from "./website/page";

export default function Packages() {

  const [activeTab, setActiveTab] = useState('website');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


    return (
   <>
       <div className="bg-brand-100 flex  sm:flex-col-reverse sm:h-[20rem] sm:items-center  md:relative md:flex-row md:h-[70vh] min-w-full md:justify-around md:items-center">
        <div className="  sm:flex sm:flex-col-reverse sm:h-[5rem] sm:justify-evenly sm:items-start  sm:pl-4    md:h-full  md:w-[5%] md:pt-3 md:flex md:justify-start  md:items-end ">
        <h2 className=" sm:text-[2.1rem] sm:mb-[1.4rem] sm:text-center md:absolute  md:bottom-[1rem] md:left-[2rem]  uppercase md:text-5xl md:text-left  font-monte font-extrabold   text-brand-500  sm:text-wrap md:text-clip   ">
            Portfolio
          </h2>
        </div>

        <div className="sm:h-[24rem] sm:bg-right sm:w-full sm:bg-cover sm:justify-center md:h-full md:bg-bottom md:pr-4 md:w-full  flex text-pretty md:justify-start md:items-center  "  style={{
            backgroundImage: "url('/portfolio.png')",
            backgroundRepeat:"no-repeat",
            opacity: " 0.5" // Center the background image
          }} >
          
        </div>
      </div>


                {/* Secttion 2  */}

                 

        <div className="flex-grow  sm:pl-[0.5rem]  xl:px-8 pt-8   xl:justify-center xl:h-[15rem]  xl:items-center">
          <div className="flex items-center mb-8 sm:flex-col md:flex ">
            <button
              onClick={() => handleTabClick("website")}
              className={`mr-4 px-4 py-2 rounded-md text-sm font-medium xl:w-40 xl:h-12  xl:text-[1.5rem] ${
                activeTab === "website" ? "bg-brand-200 text-brand-700" : "text-brand-600 hover:text-brand-700"
              }`}
            >
              Website
            </button>
            <button
              onClick={() => handleTabClick("logo")}
              className={`mr-4 px-4 py-2 rounded-md text-sm font-medium xl:w-40 xl:h-12 xl:text-[1.5rem] ${
                activeTab === "logo" ? "bg-brand-200 text-brand-700" : "text-brand-600 hover:text-brand-700"
              }`}
            >
              Logo
            </button>
            <button
              onClick={() => handleTabClick("seo")}
              className={`mr-4 px-4 py-2 rounded-md text-sm font-medium xl:w-40 xl:h-12 xl:text-[1.5rem] ${
                activeTab === "seo" ? "bg-brand-200 text-brand-700" : "text-brand-600 hover:text-brand-700"
              }`}
            >
              SEO
            </button>
            <button
              onClick={() => handleTabClick("branding")}
              className={`px-4 py-2 rounded-md text-sm font-medium xl:w-40 xl:h-12  xl:text-[1.5rem] ${
                activeTab === "branding" ? "bg-brand-200 text-brand-700" : "text-brand-600 hover:text-brand-700"
              }`}
            >
              Branding
            </button>
          </div>
          </div>
          {activeTab === 'website' && <Website/>}
          {activeTab === 'logo' && <Logo/>}
          {activeTab === 'seo' && <Seo/>}
          {activeTab === 'branding' && <Branding/>}

    
        
         </>
    );
  }
  