"use client";
import Image from "next/image";
import Link from "next/link";
import { global } from "styled-jsx/css";
import { Swiper, SwiperSlide } from "swiper/react";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './component.css'

function Footer() {
 
  return (
    <>
     <div className=" sm:h-[60rem] min-w-full md:h-[60vh] bg-[#083b7e]  pt-[2rem] mt-[2rem] footer ">
        <div className="  sm:flex-col sm:pl-4 md:pl-1 md:h-[70%]  w-full  flex md:items-center md:flex-row md:justify-evenly ">
        <div className="  sm:justify-evenly md:justify-evenly flex flex-col md:pl-[1rem] font-monte  sm:h-[16rem]  md:h-full md:w-1/4  xl:h-[90%]  ">
            <ol className=" font-semibold xl:text-[1.5rem] "> Quick Links </ol>
              <li className="  font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500  xl:text-[1.3rem] [list-style:none]" > Home</li>
              <li className=" font-monte font-medium md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " > About Us </li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " > Services</li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " > Portfolio</li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " > Contact Us</li>
          
          </div>
          <div className="  sm:justify-evenly md:justify-evenly flex flex-col  font-monte  sm:h-[13rem]  md:h-full md:w-1/4    ">
          <ol className="  font-semibold xl:text-[1.5rem] "> Services </ol>
              <li className="  font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500  xl:text-[1.3rem] [list-style:none]" >  Web Development</li>
              <li className=" font-monte font-medium md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " > Web Design </li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " > Graphic Design</li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-500 xl:text-[1.3rem] " >SEO & Marketing</li>
          
          </div>

          <div className="  sm:justify-evenly md:justify-evenly flex flex-col  font-monte  sm:h-[13rem]  md:h-full md:w-1/4    ">
          <ol className=" font-semibold xl:text-[1.5rem] "> Contact Us </ol>
 
              <li className="  text-brand-500 ">
                <div className=" flex  contact md:h-[2.5rem] ">
                  <Image
                    src="/location.svg"
                    width={100}
                    height={80}
                    alt="logo "
                    className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 xl:w-12  xl:h-10 "
                  /> 
                  <p className="xl:text-[1.3rem] " > Suite 1149 Unit 3A Hatton Garden, Holborn, London 
                   UK</p> 
                </div>
              </li>
              <li className="  text-brand-500 ">
              <div className=" flex contact md:h-[2.5rem] ">
                  <Image
                    src="/phone.svg"
                    width={100}
                    height={80}
                    alt="logo "
                    className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 xl:w-12  xl:h-10 "
                  /> 
                <p className="xl:text-[1.3rem] " > +1 818 650-9785</p>
                </div>
              </li>
              <li className="  text-brand-500 " >
              <div className=" flex contact md:h-[2.5rem] ">
                  <Image
                    src="/mail.svg"
                    width={100}
                    height={80}
                    alt="logo "
                    className="sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 xl:w-12  xl:h-10 "
                  /> 
                 <p className="xl:text-[1.3rem] " > info@americanwebexpress.com</p>
                </div>
              </li>
          </div>



          <div className="  sm:h-[10rem]  md:h-full md:w-1/5 flex flex-col  md:pt-[1.5rem] xl:pt-[3.5rem] ">
            <ol className="   font-semibold xl:text-[1.5rem]   "> Social Media Links  </ol>
              
              <div className="flex sm:justify-evenly  md:justify-between md:w-[70%] mt-[2rem] ">
              <li>
                <FontAwesomeIcon icon={faFacebook} className=" icon mr-4  " />
                  
              </li>
              <li>
              <FontAwesomeIcon icon={faInstagram} className=" icon mr-4  " />
              </li>
              <li>
              <FontAwesomeIcon icon={faLinkedinIn} className=" icon mr-4 " />
              </li>
              </div>
          
          </div>



       
      </div>
      </div>
      <div className="flex justify-center h-[2rem] items-center xl:h-[3rem]">

        <p className="text-[1.2rem] font-monte" > Copyright &copy; || All rights reserved</p>
        </div>
    </>
  );
}

export default Footer;