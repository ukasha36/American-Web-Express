
"use client";
import  { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-free/css/all.css";
import React from 'react'

// Import Swiper React components
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


const Slider = () => {
  return (
    <>
    <div className=" sm:min-w-full sm:h-[6rem]  bg-brand-500  flex justify-center items-end">
    <h2 className=" sm:text-5xl font-monte">Reviews</h2>
  </div>

  <Swiper
    className=" sm:h-[35rem] min-w-full md:h-[60vh] bg-brand-500 md:pt-4 font-monte  xl:h-[55vh] "
    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
    slidesPerView={1}
    breakpoints={{
      640: {
        slidesPerView: 2, // Show 2 slides on medium screens
        spaceBetween: 20, // Adjust spacing on medium screens
      },
      1024: {
        slidesPerView: 3, // Show 3 slides on large screens
        spaceBetween: 15, // Adjust spacing on large screens
      },
    }}
    direction="horizontal" // Set direction to vertical
    loop={true}
    autoplay={{
      delay: 2200,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true, // Enable pagination dots
    }}
    onSlideChange={() => console.log("slide change")}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <div className=" sm:w-[22rem]   md:m-1 sm:h-[20rem] md:w-[20rem] md:h-[15rem]  bg-brand-300 md:ml-10 flex flex-col border-full xl:h-80 xl:w-[30rem] ">
        <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
          <div className=" sm:pl-3  flex flex-col justify-center md:w-32 md:items-center xl:w-[12rem] xl:items-start">
            <h3 className="sm:text-xl md:text-base xl:text-[1.6rem] "> Evanna Lynch </h3>
            <Image
              src="/reviews.png"
              width={100}
              height={80}
              alt="logo "
              className=" sm:h-[2.5rem] xl:h-12 xl:w-32 "
            />
          </div>
          <div className=" flex h-full w-24 xl:10rem  ">
            <Image
              src="/client3.png"
              width={150}
              height={120}
              alt="logo "
              className=" sm:w-60 sm:h-32   md:h-24 md:w-32 object-none"
            />
          </div>
        </div>
        <div className="  sm:p-4  md:h-2/4 md:w-full">
          <p className="sm:text-[1.3rem]  md:leading-tight  sm:p-3 sm:text-left  text-brand-50    md:pl-2 md:text-[1.2rem] font-medium font-monte xl:text-[1.4rem]  ">
            Remarkably smooth working with them, and I absolutely adore
            every design they created for me
          </p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className=" sm:w-[22rem] sm:h-[20rem] md:w-[20rem] md:h-[15rem]  bg-brand-300 md:ml-10 flex flex-col border-full xl:h-80 xl:w-[30rem] ">
        <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
          <div className=" sm:pl-3 md:pl-2  flex flex-col justify-center md:w-32 md:items-center xl:items-start ">
            <h3 className="sm:text-xl md:text-base  xl:text-[1.9rem] "> Cidalia </h3>
            <Image
              src="/reviews.png"
              width={100}
              height={80}
              alt="logo "
              className=" sm:h-[2.5rem] xl:h-12 xl:w-32 "
            />
          </div>
          <div className=" flex h-full w-24">
            <Image
              src="/client3.png"
              width={150}
              height={120}
              alt="logo "
              className=" sm:w-60 sm:h-32   md:h-24 md:w-32 object-none"
            />
          </div>
        </div>
        <div className="  sm:p-4  md:h-2/4 md:w-full">
          <p className=" sm:text-[1.3rem] md:leading-tight sm:p-3 sm:text-left  text-brand-50  md:text-left md:text-[1.1rem] font-medium md:pl-2 font-monte xl:text-[1.4rem]  ">
            Working with them was incredibly smooth, and I absolutely adore
            every design they created for me.
          </p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className=" sm:w-[22rem] sm:h-[20rem] md:w-[20rem] md:h-[15rem]  bg-brand-300 md:ml-10 flex flex-col border-full xl:h-80 xl:w-[30rem] ">
        <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
          <div className=" sm:pl-3 flex flex-col justify-center md:w-32 md:items-center  xl:w-[14rem] xl:items-start ">
                    <h3 className="sm:text-xl md:text-base  xl:text-[1.9rem] ">  Jason knight </h3>
            <Image
              src="/reviews.png"
              width={100}
              height={80}
              alt="logo "
              className=" sm:h-[2.5rem] xl:h-12 xl:w-32 "
            />
          </div>
          <div className=" flex h-full w-24">
            <Image
              src="/client3.png"
              width={150}
              height={120}
              alt="logo "
              className=" sm:w-60 sm:h-32   md:h-24 md:w-32 object-none"
            />
          </div>
        </div>
        <div className="  sm:p-4  md:h-2/4 md:w-full">
          <p className=" sm:text-[1.3rem]  md:text-lg md:leading-tight sm:p-3 sm:text-left  md:text-[1.2rem] font-monte font-medium text-brand-50  md:text-left md:pl-2  xl:text-[1.4rem]   ">
            Working with Chris at American Web Express was worthwhile. They
            were eager to please and ultimately delivered as promised.
          </p>
        </div>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div className=" sm:w-[22rem] sm:h-[23rem] md:w-[20rem] md:h-[19rem]  bg-brand-300 md:ml-8 flex flex-col border-full  xl:w-[30rem] xl:h-[20rem] ">
        <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
          <div className=" sm:pl-3 flex flex-col justify-center md:w-32 md:items-center xl:w-[16rem] xl:items-start ">
            <h3 className="sm:text-xl md:text-base xl:text-[1.9rem] "> Robert Brown</h3>
            <Image
              src="/reviews.png"
              width={100}
              height={80}
              alt="logo "
              className=" sm:h-[2.5rem] xl:h-12 xl:w-32 "
            />
          </div>
          <div className=" flex h-full w-24">
            <Image
              src="/client3.png"
              width={150}
              height={120}
              alt="logo "
              className=" sm:w-60 sm:h-32   md:h-24 md:w-32 object-none"
            />
          </div>
        </div>
        <div className="  sm:p-3  md:h-2/4 md:w-full">
          <p className=" sm:text-[1.1rem] md:text-[1.1rem] font-medium md:leading-tight sm:p-3 sm:text-left  text-brand-50 md:p-1 md:text-left md:pl-2 font-monte xl:text-[1.4rem]  ">
            American Web Express are excellent. Quick and efficient with
            nothing being too much trouble. Would recommend to anyone
            looking for SEO, web dev, Gfx , ppc.
          </p>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>

  </>

  )
}

export default Slider ;