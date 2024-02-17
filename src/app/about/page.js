"use client";
import Image from "next/image";
import Link from "next/link";
import { global } from "styled-jsx/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

// Import Swiper React components
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function About() {
  return (
    <>
      <div className="bg-brand-100 flex sm:flex-col sm:items-center  sm:h-[43rem] md:flex-row md:h-screen min-w-full md:justify-evenly md:items-center">
        <div className="sm:h-3/5 sm:w-11/12 sm:justify-center md:h-3/5  md:w-2/5 pt-7 flex  flex-col text-pretty md:justify-evenly ">
          <h2 className=" sm:text-5xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-7xl font-monte font-extrabold   text-brand-500  sm:text-wrap md:text-clip md:leading-9  ">
         
            About US
          </h2>
          <p className=" sm:text-[0.8rem] md:text-lg   leading-6 mb-4 text-brand-500 font-monte   sm:text-justify  ">
            American Web Express offers a combination of web design and SEO
            services, helping businesses of all sizes achieve online success.
            Our team combines creative expertise with data-driven strategies to
            craft visually stunning websites that climb search engine rankings.
            With a focus on collaboration and delivering measurable results,
            they empower clients to reach their full digital potential.
          </p>
        </div>
        <div className=" md:h-full  md:w-2/5 md:pt-3 md:flex md:justify-start pl-2 md:items-center">
          <Image
            src="/landing.png"
            width={500}
            height={400}
            alt="logo"
            className=" md:h-[20rem] md:w-[35rem] "
          />
        </div>
      </div>

      {/* Section 2 */}

      <div className="sm:h-[43rem] md:h-[120vh] min-w-full flex md:justify-center  md:items-center">
        <div
          className="bg-cover bg-left bg-no-repeat md:w-[60rem] md:h-4/5"
          style={{
            backgroundImage: "url('/about6.jpg')",
            backgroundSize: "cover", // Adjust background size
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className=" md:absolute bg-brand-300 sm:h-3/5  sm:justify-center md:h-[30rem]  md:w-[26rem] pt-7 flex  flex-col text-pretty md:justify-evenly ">
          <div className="flex sm:h-5  md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className="h-[4rem] w-[5rem]"
            />
            <h4 className=" font-monte text-[12px] font-bold  pl-4 ">ABOUT US </h4>
          </div>
            <h2 className=" sm:text-5xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-3xl font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
              Craft Your Unique Web Creation
            </h2>
            <p className=" sm:text-[0.8rem] md:text-sm   leading-6 mb-4 text-brand-50 font-monte   sm:text-left  ">
              Embrace the digital era and make your mark with a website that
              goes beyond the ordinary. American Web Express offers innovative tools and
              professional support to help you create a stunning online presence
              that resonates with your audience and showcases your
              individuality. Let us guide you on a creative journey to develop a
              web masterpiece that stands out and leaves a lasting impression in
              the online world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
