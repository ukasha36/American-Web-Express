"use client";
import { useState } from "react";
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
  const [selectedOption, setSelectedOption] = useState("");

  // Handler function to update selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className="bg-brand-100 flex sm:flex-col sm:items-center  sm:h-[41rem] md:flex-row md:h-[100vh] min-w-full md:justify-around md:items-center xl:h-[70vh]  ">
        <div className="  sm:flex sm:flex-col-reverse sm:h-[26rem] sm:justify-evenly sm:items-center  md:relative     md:h-full  md:w-[38%] md:pt-3 md:flex md:justify-start  md:items-end ">
          <Image
            src="/img10.png"
            width={500}
            height={300}
            alt="logo"
            className=" md:h-[28rem] md:w-[40rem]  xl:h-[32rem] xl:w-[45rem]  "
          />
          <Image
            src="/welcome.png"
            width={500}
            height={400}
            alt="logo"
            className="  sm:static sm:h-[5rem] sm:w-[8rem] sm:object-contain  md:h-[15rem] md:w-[35rem] md:absolute md:top-[0.4rem] md:left-[23rem] xl:left-[35rem]  "
          />
        </div>

        <div className="sm:h-[32%] sm:w-full sm:justify-center md:h-full  md:w-2/5 md:pt-7 flex text-pretty md:justify-start md:items-center  ">
          <h2 className=" sm:text-[2.1rem] sm:mb-[1.4rem] sm:text-center md:mt-[2rem] md:mb-1 uppercase md:text-5xl md:text-left  font-monte font-extrabold   text-brand-500  sm:text-wrap md:text-clip xl:text-[4rem]   ">
            We specialize in digital & creative services
          </h2>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex sm:flex-col sm:justify-evenly  md:pb-10 sm:h-[110rem] md:h-[150vh] min-w-full   md:justify-around xl:h-[100vh]  ">
        {/* section 1  */}
        <div className="  sm:h-[50rem]  sm:justify-evenly  flex  sm:flex-col center   md:flex-row md:justify-around md:h-2/5 w-full">
          <div className="  sm:h-14rem  sm:pl-4 md:pl-8 flex flex-col md:w-[34rem] md:h-full justify-center xl:w-[40rem]  ">
            <h4 className=" sm:text-[32px] sm:leading-[1.8rem]  font-poppins font-medium md:text-[45px] md:leading-10 xl:text-[50px] "> Prioritize user <br/> centric solutions.</h4>
            <Image
                src="/lin3.svg"
                width={90}
                height={40}
                alt="logo "
                className=" sm:h-[4rem] md:h-[4rem] md:w-[9rem] md:object-cover "
              />
            <p className=" sm:text-[14px] sm:w-[88%] sm:text-left  font-monte md:w-[81%] xl:w-[85%] xl:text-[1.4rem]   ">
              From website design to mobile apps, or from SEO to digital
              marketing, Amerizan Web Express is a leading digital agency in the
              UK.
            </p>
          </div>
          <div className=" md:flex md:flex-col md:w-[18rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-[25rem] xl:h-[22rem] ">
            <Image
              src="/img13.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-full md:w-[19rem]    border-1 border-solid border-brand-300 rounded-lg border2 xl:w-[25.5rem]  "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className="h-[4rem] w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[1.4rem] ">
                Website Development
              </h4>
            </div>
          </div>

          <div className=" md:flex md:flex-col md:w-[18rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-[25rem] xl:h-[22rem] ">
            <Image
              src="/img12.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-full md:w-[19rem]    border-1 border-solid border-brand-300 rounded-lg border2  xl:w-[25.5rem] "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center xl:w-[20rem]">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className="h-[4rem] w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[1.4rem]  ">
                Graphic Design
               </h4>
            </div>
          </div>
 
        </div>
       {/* Section 2  */}

        <div className="    sm:h-[50rem] sm:justify-between flex  sm:flex-col center   md:flex-row md:justify-around md:h-2/5 w-full">
          
          <div className=" md:flex md:flex-col md:w-[18rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-[25rem] xl:h-[22rem]  ">
            <Image
              src="/img11.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-full md:w-[19rem]    border-1 border-solid border-brand-300 rounded-lg border2  xl:w-[25.5rem] "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center xl:w-[23rem] ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className="h-[4rem] w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[1.4rem] ">
                Web Design 
              </h4>
            </div>
          </div>

          <div className=" md:flex md:flex-col md:w-[18rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-[25rem] xl:h-[22rem]  ">
            <Image
              src="/img14.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-full md:w-[19rem]    border-1 border-solid border-brand-300 rounded-lg border2 xl:w-[25.5rem] "
            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center  xl:w-[23rem] ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className="h-[4rem] w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[1.4rem] ">
              Seo 
              </h4>
            </div>
          </div>

          <div className=" md:flex md:flex-col md:w-[18rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-[25rem] xl:h-[22rem]  ">
            <Image
              src="/img17.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-full md:w-[19rem]    border-1 border-solid border-brand-300 rounded-lg border2  xl:w-[25.5rem] "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center  xl:w-[23rem] ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className="h-[4rem] w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[1.4rem]   ">
                UI & UX Design
               </h4>
            </div>
          </div>
 
        </div>
       
      </div>

      {/* section 3  */}

      <div className=" sm:min-w-full sm:h-[10rem] sm:justify-end  bg-brand-500  flex flex-col md:justify-evenly items-center">
        <h2 className=" sm:text-[2rem] md:text-5xl font-monte md:tracking-[-0.1rem]">
        Explore Our Services
        </h2>
        <p className=" sm:text-[1.1rem]  text-center ">
        Inspirational designs, illustrations, and graphic elements <br/> from the best designers.
        </p>
      </div>

      <Swiper
        className=" sm:h-[25rem] min-w-full md:h-[60vh] bg-brand-500 md:pt-4 font-monte xl:h-[38vh] "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2, // Show 2 slides on medium screens
            spaceBetween: 20, // Adjust spacing on medium screens
          },
          1024: {
            slidesPerView: 4, // Show 3 slides on large screens
            spaceBetween: 15, // Adjust spacing on large screens
          },
        }}
        direction="horizontal" // Set direction to vertical
        loop={true}
        autoplay={{
          delay: 1900,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true, // Enable pagination dots
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
       
        
        <SwiperSlide>
        <div className=" sm:h-[18rem] sm:justify-evenly flex flex-col  md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-72 xl:h-80 ">
            <Image
              src="/web-development.png"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg border3 xl:w-72 xl:h-72 "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px] ">
              Web Development
              </h4>
            </div>
          </div>

        </SwiperSlide>


        <SwiperSlide>
        <div className=" sm:h-[20rem] sm:justify-evenly flex flex-col  md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-72 xl:h-80 ">
            <Image
              src="/animation.png"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg border3 xl:w-72 xl:h-72 "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px] ">
               Animation
              </h4>
            </div>
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div className="  sm:h-[18rem] sm:justify-evenly flex flex-col md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500  xl:w-72 xl:h-80 ">
            <Image
              src="/branding.png"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg  border3 xl:w-72 xl:h-72 "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px] ">
                Branding 
              </h4>
            </div>
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div className="  sm:h-[18rem] sm:justify-evenly flex flex-col  md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-72 xl:h-80 ">
            <Image
              src="/productdesign.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg border3 xl:w-72 xl:h-72  "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px] ">
              Product Design 
              </h4>
            </div>
          </div>

        </SwiperSlide>
        
        <SwiperSlide>
        <div className=" sm:h-[18rem] sm:justify-evenly flex flex-col  md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-72 xl:h-80 ">
            <Image
              src="/typography.png"
              width={300}
              height={250}
              alt="logo"
              className="    sm:h-[13rem] sm:w-[14rem] sm:object-cover sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg border3 xl:w-72 xl:h-72 "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px] ">
              Typography
              </h4>
            </div>
          </div>

        </SwiperSlide>
        

        <SwiperSlide>
        <div className=" sm:h-[18rem] sm:justify-evenly flex flex-col  md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-72 xl:h-80 ">
            <Image
              src="/art.jpg"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg border3 xl:w-72 xl:h-72 "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px]  ">
               Illustration
              </h4>
            </div>
          </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className=" sm:h-[18rem] sm:justify-evenly flex flex-col  md:w-[14rem] md:h-[18rem] md:justify-center  bg-brand-500 xl:w-72 xl:h-80 ">
            <Image
              src="/webdesign.png"
              width={300}
              height={250}
              alt="logo"
              className="   sm:pb-2  md:h-[13rem] md:w-[14rem] md:object-fill   border-1 border-solid border-brand-300 rounded-lg border3 xl:w-72 xl:h-72 "            />
            <div className="flex sm:h-5  md:h-[5rem] md:w-[16rem] items-center ">
              <h4 className=" font-monte text-[12px] font-bold  pl-1 xl:text-[20px] ">
             Web Design
              </h4>
            </div>
          </div>

        </SwiperSlide>
        
      
      </Swiper>



    </>
  );
}
