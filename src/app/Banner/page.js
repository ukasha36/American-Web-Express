"use client";
import Image from "next/image";
import Link from "next/link";
import { global } from "styled-jsx/css";
import { Swiper, SwiperSlide } from "swiper/react";

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
            <h4> GROUP OF PROFESSIONALS </h4>
          </div>
          <div className="w-full sm:h-3/4  md:h-3/6 md:flex md:flex-col justify-around pl-4 pr-3  ">
            <h1 className=" sm:text-2xl  md:text-4xl font-poppins font-extrabold capitalize text-brand-400  sm:text-wrap md:text-clip md:leading-9 mb-4 ">
              Certified solutions to empower your vision.
            </h1>
            <p className="leading-6 mb-4 text-brand-50 font-poppins   sm:text-justify leading-7 ">
              We are a leading software development & marketing company based in
              the USA, delivering cutting-edge digital solutions. Specializing
              in creating powerful software applications web development, social
              media marketing and content marketing etc.
            </p>
            <button className="sm:pb-3 sm:w-2/4 md:w-2/5 md:pb-2  sm:text-xl md:text-lg hover:bg-brand-100  font-sans hover:text-brand-300  rounded-md    font-semibold     border-2  border-solid  border-brand-100  text-brand-50   py-2 px-4 text-center  ">
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
      <div className="bg-brand-500  flex sm:flex-col md:flex-row  sm:p-4 sm:h-[56rem] md:h-lvh min-w-full sm:justify-start md:justify-center ">
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
            <h1 className="   sm:text-2xl  md:text-4xl font-poppins font-extrabold capitalize text-brand-400  sm:text-balance md:text-clip sm:leading-7  md:leading-9 mb-4 ">
              Professional Tech Solutions, London
            </h1>
            <p className="text-brand-50 sm:text-justify">
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
      <div className=" flex sm:flex-col sm:justify-evenly  md:pb-10 sm:h-[100rem] md:h-lvh min-w-full   md:justify-around ">
        <div className="flex justify-center sm:h-9 md:h-1/5 ">
          <h2 className=" sm:text-2xl  md:text-5xl font-bold font-poppins">
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
      <Swiper className=" sm:h-[40rem] md:h-[70vh] "
        modules={[Navigation, Pagination, Scrollbar,  Autoplay]}
        slidesPerView={1}
        direction="vertical" // Set direction to vertical
        // loop={true}
              autoplay={{
                delay: 2500,
               }}

        pagination={{
          clickable: true, // Enable pagination dots
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=" h-full flex flex-col">
            <div className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            ">
            <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
            <Image
              src="/line.svg"
              width={50}
              height={170}
              alt="logo "
              className="h-10"
            />
            <h4 className="text-2xl uppercase"> Web Development </h4>
          </div>
          <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">

              <p className=" text-brand-50 text-justify sm:leading-5 text-sm"> 
           
                Our skilled web developers craft digital excellence, turning
                visions into online realities.With expertise and innovation, we
                transform ideas into dynamic websites, ensuring your online
                presence stands out in the digital landscape
              </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between"> 
           <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2"> <h1 className="text-7xl font-bold text-brand-300">01</h1> 
           </div>
           <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
           <button><Link href="/touch">  <Image
              src="/img7.jpg"
              width={70}
              height={320}
              alt="logo "
              className="h-30 md:w-25 md:h-40"
            /></Link></button>
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
            <div className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            ">
            <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
            <Image
              src="/line.svg"
              width={50}
              height={170}
              alt="logo "
              className="h-10"
            />
            <h4 className="text-2xl uppercase"> UI & UX Design </h4>
          </div>
          <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">

              <p className=" text-brand-50 text-justify sm:leading-5 text-sm"> 
           
                Our skilled web developers craft digital excellence, turning
                visions into online realities.With expertise and innovation, we
                transform ideas into dynamic websites, ensuring your online
                presence stands out in the digital landscape
              </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between"> 
           <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2"> <h1 className="text-7xl font-bold text-brand-300">02</h1> 
           </div>
           <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
           <button><Link href="/touch">  <Image
              src="/img7.jpg"
              width={70}
              height={320}
              alt="logo "
              className="h-30 md:w-25 md:h-40"
            /></Link></button>
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
            <div className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            ">
            <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
            <Image
              src="/line.svg"
              width={50}
              height={170}
              alt="logo "
              className="h-10"
            />
            <h4 className="text-2xl uppercase"> Graphic Designing</h4>
          </div>
          <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">

              <p className=" text-brand-50 text-justify sm:leading-5 text-sm"> 
           
                Our skilled web developers craft digital excellence, turning
                visions into online realities.With expertise and innovation, we
                transform ideas into dynamic websites, ensuring your online
                presence stands out in the digital landscape
              </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between"> 
           <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2"> <h1 className="text-7xl font-bold text-brand-300">03</h1> 
           </div>
           <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
           <button><Link href="/touch">  <Image
              src="/img7.jpg"
              width={70}
              height={320}
              alt="logo "
              className="h-30 md:w-25 md:h-40"
            /></Link></button>
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
            <div className=" h-3/6 bg-brand-500 flex  flex-col md:justify-evenly
            ">
            <div className="flex  items-center  sm:h-1/5  md:h-1/6  w-full  ">
            <Image
              src="/line.svg"
              width={50}
              height={170}
              alt="logo "
              className="h-10"
            />
            <h4 className="text-2xl uppercase"> Social Media Marketing </h4>
          </div>
          <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">

              <p className=" text-brand-50 text-justify sm:leading-5 text-sm"> 
           
                Our skilled web developers craft digital excellence, turning
                visions into online realities.With expertise and innovation, we
                transform ideas into dynamic websites, ensuring your online
                presence stands out in the digital landscape
              </p>
              </div>
            </div>
            <div className=" h-3/6 bg-brand-100 flex justify-between"> 
           <div className=" flex sm:items-end md:items-center  ml-4  sm:pb-2"> <h1 className="text-7xl font-bold text-brand-300">04</h1> 
           </div>
           <div className=" sm:w-20 md:w-1/4 h-full flex    sm:items-end md:items-center sm:pb-2 ">
           <button><Link href="/touch">  <Image
              src="/img7.jpg"
              width={70}
              height={320}
              alt="logo "
              className="h-30 md:w-25 md:h-40"
            /></Link></button>
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


      <div className=" md:h-">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Banner;
