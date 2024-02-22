"use client";
import Image from "next/image";
import Link from "next/link";
import { global } from "styled-jsx/css";
import { Swiper, SwiperSlide } from "swiper/react";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
 

function Footer() {
 
  return (
    <>
     <div className=" sm:h-[55rem] min-w-full md:h-[60vh] bg-brand-500   ">
        <div className=" md:h-2/5  w-full  flex md:justify-between">
          <div className=" md:w-full flex  ">
            <Image
              src="/companylogo.png"
              width={150}
              height={120}
              alt="logo "
              className=" sm:w-60 sm:h-28   md:w-80 md:h-28 object-none"
            />
          </div>
        </div>
        <div className="  sm:flex-col sm:pl-4 md:pl-1 md:h-2/4  w-full  flex md:flex-row md:justify-evenly ">
          <div className=" sm:h-[10rem]  md:h-full md:w-1/4 flex md:justify-center ">
            <ol className=" sm:justify-evenly    flex flex-col font-monte  ">
              <li className=" font-monte font-semibold md:text-[1.2rem]  md:mb-5 "> Quick Links </li>
              <li className=" font-monte font-medium md:text-[14px] md:mb-2  text-brand-400"> Home</li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-400 "> About</li>
              <li className="  font-monte font-medium md:text-[14px] md:mb-2 text-brand-400" >Clintele</li>
              <li className="  font-monte font-medium md:text-[14px] md:mb-2 text-brand-400 ">Features </li>
            </ol>
          </div>
          <div className=" sm:h-[10rem]  md:h-full md:w-1/4 flex ">
            <ol className=" sm:justify-evenly md:justify-normal flex flex-col  font-monte ">
              <li className=" font-monte font-semibold md:text-[1.2rem] md:mb-5 " >Services</li>
              <li className="  font-monte font-medium  md:text-[14px] md:mb-2 text-brand-400 " > Web Development</li>
              <li className=" font-monte font-medium md:text-[14px] md:mb-2 text-brand-400 " > Web Design</li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-400 " > Graphic Design</li>
              <li className=" font-monte font-medium  md:text-[14px] md:mb-2 text-brand-400 " > SEO & Marketing </li>
            </ol>
          </div>


          <div className=" sm:h-[15rem]  md:h-full md:w-1/4 flex">
            <ol className=" sm:justify-evenly md:justify-normal  flex flex-col ">
              <li className=" font-monte font-semibold md:text-[1.2rem]  md:mb-5  "> Contact Us </li>
              <li className=" md:mb-3  text-brand-400 ">
                <div className=" flex ">
                  <Image
                    src="/location.svg"
                    width={100}
                    height={80}
                    alt="logo "
                    className=" sm:h-[2.5rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-2 "
                  />{" "}
                  Suite 1149 Unit 3A, 34-35 Hatton Garden, Holborn, London 
                   UK
                </div>
              </li>
              <li className="md:mb-3  text-brand-400 ">
              <div className=" flex ">
                  <Image
                    src="/phone.svg"
                    width={100}
                    height={80}
                    alt="logo "
                    className=" sm:h-[2.5rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 "
                  />{" "}
                  +11122244455
                </div>
              </li>
              <li className="md:mb-3 text-brand-400 " >
              <div className=" flex ">
                  <Image
                    src="/mail.svg"
                    width={100}
                    height={80}
                    alt="logo "
                    className=" sm:h-[2.5rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1"
                  />{" "}
                  hello@awh.com
                </div>
              </li>
            </ol>
          </div>



          <div className="  sm:h-[10rem]  md:h-full md:w-1/5 flex ">
            <ol className=" sm:justify-evenly md:justify-normal   flex flex-col ">
              <li className=" font-monte font-semibold md:text-[1.2rem]  md:mb-5 " > Social Media Links </li>
              <div className="flex sm:justify-evenly  md:justify-between md:w-[70%] ">
              <li>
        
                <FontAwesomeIcon icon={faFacebook} className=" icon mr-4 " />
                  
              </li>
              <li>
              <FontAwesomeIcon icon={faInstagram} className=" icon mr-4  " />
              </li>
              <li>
              <FontAwesomeIcon icon={faLinkedinIn} className=" icon mr-4 " />
              </li>
              </div>
            </ol>
          </div>

       
      </div>
      </div>
    </>
  );
}

export default Footer;