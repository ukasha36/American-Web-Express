"use client";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-free/css/all.css";

// Import Swiper React components
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "../Components/slider.js";

function Banner() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);

  return (
    <>
      {/* Section 1  */}
      <div className=" sm:flex sm:justify-center md:flex  sm:h-[52rem] md:h-screen min-w-full md:justify-center xl:items-center xl:h-[75vh]">
        <div className="  sm:flex  sm:flex-col md:flex-row bg-[#083b7e] w-[90%] h-[90%] border-[1px]  border-[transparent] rounded-[30px] text-[white] justify-evenly">
          <div className=" sm:pt-2 sm:h-1/2   md:h-[100%]  md:w-2/5  xl:h-[75%] xl:w-[38%]  sm:justify-end  md:pt-7 flex  flex-col text-pretty md:justify-center  xl:justify-center ">
            <div className="flex sm:h-5 sm:mb-[1rem] md:mb-[0.2rem]  md:h-[5rem] w-[20rem] items-center xl:w-[23rem] ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className="h-[4rem] w-[5rem]"
              />
              <h4
                className=" font-monte text-[12px] font-bold  pl-1 xl:text-[1.1rem] text-brand-500 "
                data-aos="fade-right"
              >
                GROUP OF PROFESSIONALS
              </h4>
            </div>
            <div className="w-full sm:h-3/4  md:h-3/6 md:flex md:flex-col justify-around pl-4 pr-3  ">
              <h1
                className=" sm:text-2xl  md:text-4xl font-monte font-extrabold capitalize text-brand-100  sm:text-wrap md:text-clip md:leading-9  xl:leading-[3rem]  mb-4 "
                data-aos="fade-right"
              >
                Certified solutions to empower your vision.
              </h1>
              <p
                className=" sm:text-justify sm:max-w-[300px] sm:text-sm md:max-w-max leading-6 mb-4 text-brand-500 font-monte    xl:text-[1.3rem] xl:leading-[2rem]  "
                data-aos="fade-right"
              >
                We are a leading software development & marketing company in USA,
                providing cutting-edge digital solutions. Specializing in
                software apps, web dev, and social & content marketing..
              </p>
              <button
                className="sm:text-[1rem] sm:pr-[0.8rem] sm:pl-[0.8rem] md:pb-2 md:w-40  md:text-base 1920:text-[1.3rem]  1920:pt-[0.7rem] 1920:pb-[0.7rem] sm:py-2 sm:px-2 text-center hover:sm:bg-brand-100  font-monte hover:text-brand-300  rounded-md    font-medium text-brand-500   border md:border-solid border-brand-100  xl:text-[1.3rem]  "
                data-aos="flip-up"
              >
                <Link href="/about">Read More</Link>
              </button>
            </div>
          </div>
          <div className="  sm:justify-center   md:h-full  md:w-[30%] md:pt-3 flex md:justify-start pl-2  xl:justify-end">
            <Image
              src="/services.svg"
              width={500}
              height={400}
              alt="logo"
              className=" h-full  md:w-[400px]  xl:w-[501px]  sm:w-[250px]"
            />
          </div>
        </div>
      </div>
      {/* Section 2  */}
      <div className="bg-brand-500 font-monte flex sm:flex-col md:flex-row  sm:p-4 sm:justify-between sm:h-[53rem] md:h-[70vh] min-w-full   md:justify-center xl:pl-[2rem] xl:h-[45vh]">
        <div className="    md:w-2/4 flex flex-col justify-center">
          <div className="flex sm:h-9  md:h-9 w-full  ">
            <Image
              src="/line.svg"
              width={30}
              height={10}
              alt="logo "
              className="h-6 xl:h-[2rem] xl:w-[50px] "
            />
            <h4 className=" xl:text-[1.3rem]"> 100% GURANTEED RESULTS </h4>
          </div>
          <div className="text-pretty md:w-11/12 ">
            <h1 className="   sm:text-2xl  md:text-4xl  font-monte font-extrabold capitalize text-brand-400  sm:text-balance md:text-clip sm:leading-7  md:leading-9 mb-4 xl:text-[1.7rem] ">
              Professional Tech Solutions, USA
            </h1>
            <p className="text-brand-50 sm:text-justify font-medium font-monte xl:text-[1.3rem] ">
              We are dedicated to providing top-notch software and marketing
              solutions, constantly investing in our team development to tackle
              your challenges effectively. With creativity, strategic planning,
              and the latest techniques, we aim to surpass expectations and
              achieve excellence in every project. As pioneers in our industry,
              we are always pushing boundaries to deliver outstanding results
              for our clients.
              <br />
              <br />
              As innovative leaders in our field, we are constantly pushing the
              boundaries and utilizing the latest methodologies to deliver
              exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="   sm:h[16rem] md:h-full  md:w-5/12 md:pt-3 md:flex justify-center items-center pl-2">
          <Image
            src="/work9.jpg"
            width={400}
            height={300}
            alt="logo"
            className=" sm:h-15 md:h-[19rem]  md:w-[29rem]  xl:w-[39rem] xl:h-[24rem] "
          />
        </div>
      </div>
      {/* Section 3  */}
      <div className=" flex sm:flex-col sm:justify-evenly  md:pb-10 sm:h-[100rem] md:h-[150vh] xl:h-[120vh] min-w-full   md:justify-around ">
        <div className="flex justify-center items-center sm:h-9 md:h-1/5 ">
          <h2
            className=" sm:text-2xl  md:text-5xl xl:text-[6rem] font-bold font-monte  "
            data-aos="zoom-in"
          >
            Our Work
          </h2>
        </div>

        <div className=" flex  sm:flex-col center   md:flex-row md:justify-around md:h-2/5 w-full">
          <Image
            src="/pic1.webp"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg  xl:w-[25rem] xl:h-[ 22rem]"
          />
          <Image
            src="/pic2.webp"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg xl:w-[25rem] xl:h-[ 22rem]  "
          />
          <Image
            src="/img4.webp"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg xl:w-[25rem] xl:h-[ 22rem]  "
          />
        </div>
        <div className="  flex center w-full sm:flex-col sm:justify-start md:flex-row md:justify-around md:h-2/5">
          <Image
            src="/img5.jpg"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg  xl:w-[25rem] xl:h-[ 22rem]  "
          />
          <Image
            src="/pic3.png"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg xl:w-[25rem] xl:h-[ 22rem]  "
          />
          <Image
            src="/pic6.jpg"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg xl:w-[25rem] xl:h-[ 22rem]  "
          />
        </div>
      </div>
      {/* Section 4  */}
      <Swiper
        className=" sm:h-[40rem] md:h-[70vh] second-swiper font-monte xl:h-[50vh]  "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        direction="horizontal" // Set direction to vertical
        loop={true}
        autoplay={{
          delay: 2400,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Enable pagination dots
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" h-full w-[100%] flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full xl:pl-[2.5rem]  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  Web Development
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium xl:text-[1.3rem] ">
                  Our web developers create digital excellence, turning visions
                  into online realities with expertise and innovation, ensuring
                  your presence stands out in the digital landscape.
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-[#083b7e] flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2 xl:pl-[3rem]">
                <h1 className="text-7xl font-bold text-brand-300 xl:text-[6.5rem]   ">
                  01
                </h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40 xl:h-[14rem] xl:w-[6.5rem] "
                    />
                  </Link>
                </button>
              </div>
            </div>
            <Image
              src="/img10.webp"
              width={230}
              height={350}
              alt="logo "
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10 xl:left-[51rem] xl:h-[34rem] xl:w-[20rem]   "
            />
          </div>
        </SwiperSlide>

        {/* Slide 2  */}

        <SwiperSlide>
          <div className=" h-full w-[100%] flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full xl:pl-[2.5rem]  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  Graphic Design
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium xl:text-[1.3rem] ">
                  Our skilled graphic designers bring your visions to life with
                  captivating creativity. We transform concepts into stunning
                  visuals, ensuring your brand stands out.
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-[#083b7e] flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2 xl:pl-[3rem]">
                <h1 className="text-7xl font-bold text-brand-300 xl:text-[6.5rem]   ">
                  02
                </h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40 xl:h-[14rem] xl:w-[6.5rem] "
                    />
                  </Link>
                </button>
              </div>
            </div>
            <Image
              src="/img10.webp"
              width={230}
              height={350}
              alt="logo "
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10 xl:left-[51rem] xl:h-[34rem] xl:w-[20rem]   "
            />
          </div>
        </SwiperSlide>

        {/* Slide 3  */}

        <SwiperSlide>
          <div className=" h-full w-[100%] flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full xl:pl-[2.5rem]  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  UI & UX Design
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium xl:text-[1.3rem] ">
                  Our UI/UX designers turn concepts into immersive digital
                  experiences. With expertise and innovation, we ensure your
                  online presence shines
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-[#083b7e] flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2 xl:pl-[3rem]">
                <h1 className="text-7xl font-bold text-brand-300 xl:text-[6.5rem]   ">
                  03
                </h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40 xl:h-[14rem] xl:w-[6.5rem] "
                    />
                  </Link>
                </button>
              </div>
            </div>
            <Image
              src="/img10.webp"
              width={230}
              height={350}
              alt="logo "
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10 xl:left-[51rem] xl:h-[34rem] xl:w-[20rem]   "
            />
          </div>
        </SwiperSlide>

        {/* Slide 4  */}
        <SwiperSlide>
          <div className=" h-full w-[100%] flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full xl:pl-[2.5rem]  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  Seo & Maketing
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium xl:text-[1.3rem] ">
                  Specializing in SEO and marketing, our adept team brings your
                  digital vision to life. Through innovative strategies and
                  skilled execution, we create dynamic online platforms that set
                  your brand apart.
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-[#083b7e] flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2 xl:pl-[3rem]">
                <h1 className="text-7xl font-bold text-brand-300 xl:text-[6.5rem]   ">
                  04
                </h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40 xl:h-[14rem] xl:w-[6.5rem] "
                    />
                  </Link>
                </button>
              </div>
            </div>
            <Image
              src="/img10.webp"
              width={230}
              height={350}
              alt="logo "
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10 xl:left-[51rem] xl:h-[34rem] xl:w-[20rem]   "
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Section 5  */}

      <div className="   sm:h-[100rem] md:h-[130vh] flex flex-col min-w-full md:mt-10 bg-brand-500  xl:h-[120vh] xl:mb-[3rem]">
        <div className=" w-full sm:h-[10rem] sm:items-center md:h-1/12 sm:justify-center flex  md:justify-center  md:pb-5">
          <h2
            className=" sm:text-4xl md:text-6xl font-bold font-monte"
            data-aos="zoom-in"
          >
            Work Flow
          </h2>
        </div>

        {/* Work 1  */}

        <div className=" flex sm:h-[30rem] sm:flex-col-reverse md:flex-row   w-full  md:h-1/4 md:justify-center font-monte xl:h-[28%] ">
          <div className="  sm:h-3/5   sm:justify-center    md:w-2/5 md:h-full flex justify-end ">
            <Image
              src="/work1.jpg"
              width={200}
              height={250}
              alt="logo "
              className=" md:h-5/6 md:w-4/6 object-none xl:object-contain xl:h-[20rem]   "
            />
          </div>

          <div className="md:w-1/12 md:flex md:justify-center">
            <Image
              src="/line.png"
              width={10}
              height={10}
              alt="logo "
              className=" sm:hidden md:inline-block "
            />
          </div>
          <div className="  sm:h-2/5 md:w-2/5 md:h-full flex flex-col md:justify-center  ">
            <h3
              className=" sm:font-semibold sm:text-center md:font-bold text-3xl mb-3 mt-3 md:text-justify text-brand-100 xl:text-[2.2rem] "
              data-aos="fade-down"
            >
              Visual Design Creation
            </h3>
            <p
              className="sm:text-center md:text-start text-brand-50 font-monte sm:p-[0.6rem] font-medium xl:text-[1.4rem] "
              data-aos="fade-down"
            >
              Develop visually appealing graphics and design elements that align
              with your brand identity and marketing goals
            </p>
          </div>
        </div>

        {/* Work 2  */}

        <div className=" flex sm:h-[30rem]  sm:flex-col  md:flex-row   w-full   md:h-1/5 md:justify-center xl:h-[28%] ">
          <div className=" md:w-2/5 md:h-full flex sm:flex-col   sm:h-2/5 md:justify-center ">
            <h3
              className=" sm:font-semibold sm:text-center md:font-bold text-3xl mb-3 mt-3 md:text-justify text-brand-100 xl:text-[2.2rem] "
              data-aos="fade-down"
            >
              Branding Identity
            </h3>
            <p
              className="sm:text-center md:text-start text-brand-50 font-monte sm:p-[0.6rem] font-medium xl:text-[1.4rem] "
              data-aos="fade-down"
            >
              Maintain consistency in branding across all digital assets,
              including logos, color schemes, typography, and imagery
            </p>
          </div>

          <div className="md:w-1/12 md:flex md:justify-center">
            <Image
              src="/line.png"
              width={10}
              height={10}
              alt="logo "
              className=" sm:hidden md:inline-block  "
            />
          </div>

          <div className="  sm:justify-center    sm:h-3/5   md:w-2/5 md:h-full flex justify-end ">
            <Image
              src="/work5.jpg"
              width={220}
              height={250}
              alt="logo "
              className=" md:h-5/6 md:w-4/6 object-none xl:object-contain xl:h-[20rem]  "
            />
          </div>
        </div>

        {/* Work 3  */}

        <div className=" flex sm:h-[30rem] sm:flex-col-reverse md:flex-row   w-full  md:h-1/4 md:justify-center xl:h-[28rem] ">
          <div className="  sm:justify-center sm:h-3/5   md:w-2/5 md:h-full flex justify-end    ">
            <Image
              src="/work6.jpg"
              width={200}
              height={250}
              alt="logo "
              className=" md:h-5/6 md:w-4/6 object-none xl:object-contain xl:h-[20rem]  "
            />
          </div>

          <div className="md:w-2/12 md:flex md:justify-center">
            <Image
              src="/line.png"
              width={10}
              height={10}
              alt="logo "
              className=" sm:hidden md:inline-block "
            />
          </div>
          <div className="  sm:h-2/5  md:w-2/5 md:h-full flex flex-col  md:justify-center ">
            <h3
              className=" sm:font-semibold sm:text-center md:font-bold text-3xl mb-3 mt-3 md:text-justify text-brand-100 xl:text-[2.2rem] "
              data-aos="fade-down"
            >
              Performance Analysis
            </h3>
            <p
              className="sm:text-center md:text-start text-brand-50 font-monte sm:p-[0.6rem] font-medium xl:text-[1.4rem] "
              data-aos="fade-down"
            >
              Monitor the performance of visual content and marketing campaigns
              using analytics tools to track engagement metrics
            </p>
          </div>
        </div>
      </div>

      {/* Section 4  */}

      <Slider />

      {/* Footer  */}
    </>
  );
}

export default Banner;
