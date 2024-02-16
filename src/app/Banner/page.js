"use client";
import Image from "next/image";
import Link from "next/link";
import { global } from "styled-jsx/css";
import { Swiper, SwiperSlide } from "swiper/react";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// Import Swiper React components
import { Navigation, Autoplay, Pagination, Scrollbar } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules

function Banner() {
  return (
    <>
      {/* Section 1  */}
      <div className=" md:flex  sm:h-[52rem] md:h-screen min-w-full md:justify-center">
        <div className=" sm:h-3/5   md:h-3/5  md:w-2/5 pt-7 flex  flex-col text-pretty justify-evenly   ">
          <div className="flex sm:h-5  md:h-5 w-full  ">
            <Image
              src="/line.svg"
              width={30}
              height={10}
              alt="logo "
              className="h-6"
            />
            <h4 className=" font-monte "> GROUP OF PROFESSIONALS </h4>
          </div>
          <div className="w-full sm:h-3/4  md:h-3/6 md:flex md:flex-col justify-around pl-4 pr-3  ">
            <h1 className=" sm:text-2xl  md:text-4xl font-monte font-extrabold capitalize text-brand-400  sm:text-wrap md:text-clip md:leading-9 mb-4 ">
              Certified solutions to empower your vision.
            </h1>
            <p className="leading-6 mb-4 text-brand-50 font-monte   sm:text-justify  ">
              We are a leading software development & marketing company based in
              the USA, delivering cutting-edge digital solutions. Specializing
              in creating powerful software applications web development, social
              media marketing and content marketing etc.
            </p>
            <button className="sm:pb-2 md:pb-2 md:w-40 sm:text-xl md:text-base   py-2 px-2 text-center hover:sm:bg-brand-100  font-monte hover:text-brand-300  rounded-md    font-medium text-brand-100   border md:border-solid border-brand-100    ">
              <Link href="/about">Read More</Link>
            </button>
          </div>
        </div>
        <div className="     md:h-full  md:w-2/5 md:pt-3 md:flex md:justify-start pl-2">
          <Image
            src="/services.svg"
            width={500}
            height={400}
            alt="logo"
            className=" h-full "
          />
        </div>
      </div>
      {/* Section 2  */}
      <div className="bg-brand-500 font-monte flex sm:flex-col md:flex-row  sm:p-4 sm:h-[56rem] md:h-lvh min-w-full sm:justify-start md:justify-center ">
        <div className="    md:w-2/4 flex flex-col justify-items-center">
          <div className="flex sm:h-9  md:h-9 w-full  ">
            <Image
              src="/line.svg"
              width={30}
              height={10}
              alt="logo "
              className="h-6"
            />
            <h4> 100% GURANTEED RESULTS </h4>
          </div>
          <div className="text-pretty md:w-11/12 ">
            <h1 className="   sm:text-2xl  md:text-4xl font-monte font-extrabold capitalize text-brand-400  sm:text-balance md:text-clip sm:leading-7  md:leading-9 mb-4 ">
              Professional Tech Solutions, London
            </h1>
            <p className="text-brand-50 sm:text-justify font-medium ">
              we pride ourselves on being the foremost choice for clients
              seeking unparalleled software and marketing solutions. Our
              commitment to excellence is reflected in our continuous investment
              in the development of our team members, ensuring they possess the
              skills and expertise necessary to address your unique challenges.
              <br />
              <br />
              we work tirelessly to exceed your expectations and drive success
              in the digital landscape. Leveraging our creativity, strategic
              planning, and cutting-edge techniques, we strive for perfection in
              every project we undertake.
              <br />
              <br />
              As innovative leaders in our field, we are constantly pushing the
              boundaries and utilizing the latest methodologies to deliver
              exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="   sm:h-11 md:h-full  md:w-5/12 md:pt-3 md:flex justify-center align-middle pl-2">
          <Image
            src="/img8.jpeg"
            width={400}
            height={300}
            alt="logo"
            className=" sm:h-15 md:h-96 "
          />
        </div>
      </div>
      {/* Section 3  */}
      <div className=" flex sm:flex-col sm:justify-evenly  md:pb-10 sm:h-[100rem] md:h-[150vh] min-w-full   md:justify-around ">
        <div className="flex justify-center items-center sm:h-9 md:h-1/5 ">
          <h2 className=" sm:text-2xl  md:text-5xl font-bold font-monte  ">
            {" "}
            Our Work{" "}
          </h2>
        </div>

        <div className=" flex  sm:flex-col center   md:flex-row md:justify-around md:h-2/5 w-full">
          <Image
            src="/pic1.webp"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg"
          />
          <Image
            src="/pic2.webp"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg"
          />
          <Image
            src="/img4.webp"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg"
          />
        </div>
        <div className="  flex center w-full sm:flex-col sm:justify-start md:flex-row md:justify-around md:h-2/5">
          <Image
            src="/img5.jpg"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg"
          />
          <Image
            src="/pic3.png"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg"
          />
          <Image
            src="/pic6.jpg"
            width={300}
            height={250}
            alt="logo"
            className=" sm:pb-2 border-1 border-solid border-brand-300 rounded-lg"
          />
        </div>
      </div>
      {/* Section 4  */}
      <Swiper
        className=" sm:h-[40rem] md:h-[70vh] second-swiper font-monte  "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        direction="horizontal" // Set direction to vertical
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        pagination={{
          clickable: true, // Enable pagination dots
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" h-full flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  {" "}
                  Web Development{" "}
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium ">
                  Our skilled web developers craft digital excellence, turning
                  visions into online realities.With expertise and innovation,
                  we transform ideas into dynamic websites, ensuring your online
                  presence stands out in the digital landscape
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2">
                {" "}
                <h1 className="text-7xl font-bold text-brand-300">01</h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    {" "}
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40"
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
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10"
            />
          </div>
        </SwiperSlide>

        {/* Slide 2  */}

        <SwiperSlide>
          <div className=" h-full flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  {" "}
                  Ui & Ux Design{" "}
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium ">
                  Our skilled web developers craft digital excellence, turning
                  visions into online realities.With expertise and innovation,
                  we transform ideas into dynamic websites, ensuring your online
                  presence stands out in the digital landscape
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2">
                {" "}
                <h1 className="text-7xl font-bold text-brand-300">02</h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    {" "}
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40"
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
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3  */}

        <SwiperSlide>
          <div className=" h-full flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  {" "}
                  Graphic Designing
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium ">
                  Our skilled web developers craft digital excellence, turning
                  visions into online realities.With expertise and innovation,
                  we transform ideas into dynamic websites, ensuring your online
                  presence stands out in the digital landscape
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2">
                {" "}
                <h1 className="text-7xl font-bold text-brand-300">03</h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    {" "}
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40"
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
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4  */}
        <SwiperSlide>
          <div className=" h-full flex flex-col">
            <div
              className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            "
            >
              <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
                <Image
                  src="/line.svg"
                  width={50}
                  height={170}
                  alt="logo "
                  className="h-10"
                />
                <h4 className="sm:text-2xl md:text-4xl uppercase">
                  {" "}
                  SEO & Marketing{" "}
                </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 sm:text-sm md:text-base font-medium  ">
                  Our skilled web developers craft digital excellence, turning
                  visions into online realities.With expertise and innovation,
                  we transform ideas into dynamic websites, ensuring your online
                  presence stands out in the digital landscape
                </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between">
              <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2">
                {" "}
                <h1 className="text-7xl font-bold text-brand-300">04</h1>
              </div>
              <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
                <button>
                  <Link href="/touch">
                    {" "}
                    <Image
                      src="/img7.jpg"
                      width={70}
                      height={320}
                      alt="logo "
                      className="h-30 md:w-25 md:h-40"
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
              className="sm:h-96 absolute sm:w-48 sm:top-52 sm:left-[3.5rem]  md:h-[29rem] md:w-60 md:top-2 md:bottom-2 md:left-[37rem]  z-10"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Section 5  */}

      <div className="   sm:h-[100rem] md:h-[160vh] flex flex-col min-w-full md:mt-10 bg-brand-500 ">
        <div className=" w-full sm:h-[10rem] sm:items-center md:h-1/12 sm:justify-center flex  md:justify-center  md:pb-5">
          <h2 className=" sm:text-4xl md:text-6xl font-bold font-monte">
            {" "}
            Work Flow{" "}
          </h2>
        </div>

        {/* Work 1  */}

        <div className=" flex sm:h-[30rem] sm:flex-col-reverse md:flex-row   w-full  md:h-1/4 md:justify-center font-monte ">
          <div className="  sm:h-3/5   sm:justify-center    md:w-2/5 md:h-full flex justify-end ">
            <Image
              src="/work1.jpg"
              width={200}
              height={250}
              alt="logo "
              className=" md:h-5/6 md:w-4/6 object-none"
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
            <h3 className=" sm:font-semibold sm:text-center md:font-bold text-3xl mb-3 mt-3 md:text-justify text-brand-100 ">
              Visual Design Creation{" "}
            </h3>
            <p className="sm:text-center md:text-start text-brand-50 font-monte sm:p-[0.6rem] font-medium ">
              Develop visually appealing graphics and design elements that align
              with your brand identity and marketing goals{" "}
            </p>
          </div>
        </div>

        {/* Work 2  */}

        <div className=" flex sm:h-[30rem]  sm:flex-col  md:flex-row   w-full   md:h-1/5 md:justify-center ">
          <div className=" md:w-2/5 md:h-full flex sm:flex-col   sm:h-2/5 md:justify-center ">
            <h3 className=" sm:font-semibold sm:text-center  md:font-bold text-3xl mb-3 mt-3 md:text-justify text-brand-100 ">
              Branding Identity{" "}
            </h3>
            <p className="sm:text-center md:text-start text-brand-50 font-medium sm:p-[0.6rem]  font-monte ">
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
              className=" md:h-5/6 md:w-4/6  object-none"
            />
          </div>
        </div>

        {/* Work 3  */}

        <div className=" flex sm:h-[30rem] sm:flex-col-reverse md:flex-row   w-full  md:h-1/4 md:justify-center ">
          <div className="  sm:justify-center sm:h-3/5   md:w-2/5 md:h-full flex justify-end    ">
            <Image
              src="/work6.jpg"
              width={200}
              height={250}
              alt="logo "
              className=" md:h-5/6 md:w-4/6  object-none"
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
            <h3 className=" sm:font-semibold sm:text-center font-monte md:font-bold text-3xl mb-3 mt-3 md:text-justify text-brand-100 ">
              Performance Analysis
            </h3>
            <p className="sm:text-center md:text-start text-brand-50   sm:p-[0.6rem] font-monte font-medium ">
              Monitor the performance of visual content and marketing campaigns
              using analytics tools to track engagement metrics
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}

      <div className=" sm:flex-col  sm:h-[64rem]  sm:pb-4  md:h-[50vh] flex md:flex-row min-w-full ">
        <div className=" sm:w-full  sm:h-[20rem] sm:items-center  md:items-start sm:justify-evenly md:h-full md:w-2/5 flex flex-col md:justify-center  md:pl-10">
          <h4 className=" sm:text-4xl  md:text-3xl font-monte font-semibold">
            {" "}
            Our Clientele
          </h4>
          <p className=" sm:pl-[0.7rem] sm:pr-[0.6rem] sm:text-center md:text-left md:pl-[0rem] text-brand-50 md:pb-2 md:pt-2 font-monte font-medium">
            Trusted by a wide range of businesses to enhance their digital
            presence and help them achieve their marketing objectives
          </p>
          <button className="  sm:w-[10rem]    sm:pb-2 md:pb-2 md:w-40 sm:text-xl md:text-base  py-2 px-2 text-center hover:sm:bg-brand-100  font-sans hover:text-brand-300  rounded-md    font-semibold text-brand-100   border border-solid border-brand-100    ">
            <Link href="/touch">View All</Link>
          </button>
        </div>
        <div className=" sm:flex-col sm:items-center  md:h-full md:w-2/4 flex md:flex-row md:flex-wrap md:flex-grow md:justify-center md:items-center ">
          <Image
            src="/client1.png"
            width={150}
            height={100}
            alt="logo "
            className=" sm:w-60 sm:h-32   md:h-24 md:w-32"
          />
          <Image
            src="/client2.png"
            width={150}
            height={120}
            alt="logo "
            className=" sm:w-60 sm:h-32   md:h-24 md:w-32"
          />
          <Image
            src="/client6.png"
            width={150}
            height={120}
            alt="logo "
            className=" sm:w-48 sm:h-24   md:h-24 md:w-32"
          />

          <Image
            src="/client3.png"
            width={150}
            height={120}
            alt="logo "
            className=" sm:w-60 sm:h-32   md:h-24 md:w-32"
          />
          <Image
            src="/client4.png"
            width={120}
            height={80}
            alt="logo "
            className=" sm:w-48 sm:h-24   md:h-24 md:w-32"
          />
          <Image
            src="/client7.png"
            width={120}
            height={100}
            alt="logo "
            className=" sm:w-60 sm:h-32   md:h-24 md:w-32"
          />
        </div>
      </div>

      {/* Section 4  */}

      <div className=" sm:min-w-full sm:h-[6rem]  bg-brand-500  flex justify-center items-end">
        <h2 className=" sm:text-5xl font-monte">Reviews</h2>
      </div>

      <Swiper
        className=" sm:h-[35rem] min-w-full md:h-[60vh] bg-brand-500 md:pt-4 font-monte "
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
          <div className=" sm:w-[22rem]   md:m-1 sm:h-[20rem] md:w-[20rem] md:h-[15rem]  bg-brand-300 md:ml-10 flex flex-col border-full ">
            <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
              <div className=" sm:pl-3  flex flex-col justify-center md:w-32 md:items-center">
                <h3 className="sm:text-xl md:text-base"> Evanna Lynch </h3>
                <Image
                  src="/reviews.png"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2.5rem] "
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
              <p className="sm:text-[1.3rem]  md:leading-tight  sm:p-3 sm:text-left  text-brand-50    md:pl-2 md:text-[1.2rem] font-medium font-monte  ">
                Remarkably smooth working with them, and I absolutely adore
                every design they've created for me
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" sm:w-[22rem] sm:h-[20rem] md:w-[20rem] md:h-[15rem]  bg-brand-300 md:ml-10 flex flex-col border-full ">
            <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
              <div className=" sm:pl-3 md:pl-2  flex flex-col justify-center md:w-32 md:items-center">
                <h3 className="sm:text-xl md:text-base"> Cidalia </h3>
                <Image
                  src="/reviews.png"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2.5rem] "
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
              <p className=" sm:text-[1.3rem] md:leading-tight sm:p-3 sm:text-left  text-brand-50  md:text-left md:text-[1.1rem] font-medium md:pl-2 font-monte   ">
                Working with them was incredibly smooth, and I absolutely adore
                every design they created for me.{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" sm:w-[22rem] sm:h-[20rem] md:w-[20rem] md:h-[15rem]  bg-brand-300 md:ml-10 flex flex-col border-full ">
            <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
              <div className=" sm:pl-3 flex flex-col justify-center md:w-32 md:items-center">
                <h3 className="sm:text-xl md:text-base"> Jason knight </h3>
                <Image
                  src="/reviews.png"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2.5rem] "
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
              <p className=" sm:text-[1.3rem]  md:text-lg md:leading-tight sm:p-3 sm:text-left  md:text-[1.2rem] font-monte font-medium text-brand-50  md:text-left md:pl-2    ">
                Working with Chris at American Web Express was worthwhile. They
                were eager to please and ultimately delivered as promised.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" sm:w-[22rem] sm:h-[23rem] md:w-[20rem] md:h-[19rem]  bg-brand-300 md:ml-8 flex flex-col border-full ">
            <div className="md:h-2/5 md:w-full flex justify-between border-bottom">
              <div className=" sm:pl-3 flex flex-col justify-center md:w-32 md:items-center">
                <h3 className="sm:text-xl md:text-base"> Robert Brown</h3>
                <Image
                  src="/reviews.png"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2.5rem] "
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
              <p className=" sm:text-[1.1rem] md:text-[1.1rem] font-medium md:leading-tight sm:p-3 sm:text-left  text-brand-50 md:p-1 md:text-left md:pl-2 font-monte   ">
                American Web Express are excellent. Quick and efficient with
                nothing being too much trouble. Would recommend to anyone
                looking for SEO, web dev, Gfx , ppc.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Footer  */}

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
              <li className=" font-monte font-semibold md:text-[1.2rem]  md:mb-5 md:mb-3 "> Contact Us </li>
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

export default Banner;
