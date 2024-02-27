"use client";
import  { useState } from 'react';
import Image from "next/image";
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

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const getSelectOptions = () => {
  // Implement your logic to generate the options array
  const options = [
    { value: "Web Development", label: "Web Development" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "Seo & Maketing", label: "Seo & Maketing" },
    { value: "Social Media Marketing", label: "Social Media Marketing" },
    // ... other options
  ];
  return options; // Return the options array
};

export default function About() {
  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Handler function to update selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Add this line
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      number: number,
      service: service,
      message: message,
    };

    const serviceId = "service_qgees4k";
    const templateID = "template_8qvsgwf";

    emailjs
      .sendForm(serviceId, templateID, form.current, {
          publicKey: "s7vKJDl55o-a1JLo8" ,
        } , templateParams )
      .then(
        () => {
          console.log("SUCCESS!");
          setShowModal(true);
          setName("")
          setEmail("")
          setNumber("")
          setMessage("")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };


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

      <div className="  sm:h-[43rem] md:h-[120vh]  min-w-full flex md:justify-center  md:items-center">
        <div
          className=" sm:bg-contain sm:flex sm:justify-center sm:h-[70rem] md:block md:bg-cover bg-left bg-no-repeat md:w-[60rem] md:h-4/5"
          style={{
            backgroundImage: "url('/about6.jpg')",
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="  sm:w-[90%] sm:h-[26rem] sm:static  md:absolute bg-brand-300    sm:justify-evenly md:h-[30rem]  md:w-[26rem] pt-7 flex  flex-col text-pretty md:justify-evenly ">
            <div className="flex sm:h-5  md:h-[5rem] w-[20rem] items-center ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-4 ">
                ABOUT US 
              </h4>
            </div>
            <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-3xl font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
              Craft Your Unique Web Creation
            </h2>
            <p className=" sm:text-[0.8rem] md:text-sm   leading-6 mb-4 text-brand-50 font-monte   sm:text-left  ">
              Embrace the digital era and make your mark with a website that
              goes beyond the ordinary. American Web Express offers innovative
              tools and professional support to help you create a stunning
              online presence that resonates with your audience and showcases
              your individuality. Let us guide you on a creative journey to
              develop a web masterpiece that stands out and leaves a lasting
              impression in the online world.
            </p>
          </div>
        </div>
      </div>

      {/* section 3  */}

      <div className=" sm:h-[69rem]  sm:items-center  sm:flex-col md:h-[70vh] md:min-w-full md:flex-row flex justify-evenly ">
        <div className=" sm:h-[22rem] sm:w-[90%] sm:justify-evenly   md:w-[25%] md:h-full flex flex-col">
          <div className="flex sm:h-5  md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
            />
            <h4 className=" font-monte text-[13px] font-bold    ">
              OUR VISION
            </h4>
          </div>
          <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
            Follow the Digital Trends & Lead the Changes
          </h2>
          <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-sm   ">
            American Web Express to empower online businesses in a world
            brimming with prosperity, connectivity, growth, and purpose. With
            our Web and SEO expertise we are dedicated to delivering tangible
            results for clients across diverse industry sectors.
          </p>
        </div>

        <div className=" sm:h-[22rem] sm:w-[90%] sm:justify-evenly   md:w-[25%] md:h-full flex flex-col">
          <div className="flex sm:h-5  md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
            />
            <h4 className=" font-monte text-[13px] font-bold    ">
              OUR MISSION
            </h4>
          </div>
          <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-1 uppercase  md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
            The Biggest World Brands Always Take Risks
          </h2>
          <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-sm   ">
            We aim to establish ourselves as the premier digital marketing
            agency in the UK. Our commitment is to provide businesses with
            unparalleled and distinctive strategies, enabling them to fully
            unleash their digital capabilities.
          </p>
        </div>

        <div className=" sm:h-[22rem] sm:w-[90%] sm:justify-evenly   md:w-[25%] md:h-full flex flex-col">
          <div className="flex sm:h-5  md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
            />
            <h4 className=" font-monte text-[13px] font-bold    ">
              OUR VALUE 
            </h4>
          </div>
          <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-1 uppercase  md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
            Lets Boost Your Business & Grow Together
          </h2>
          <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-sm   ">
            We are committed to propelling your business forward and fostering
            growth together. Through our tailored digital marketing solutions,
            we elevate your online presence, boost conversions, and unlock the
            full potential of your business.
          </p>
        </div>
      </div>

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
                every design they created for me
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
                every design they created for me.
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

      {/* Form  */}


      <div className=" sm:h-[80rem]  bg-brand-100  flex justify-center items-center md:h-[150vh] min-w-full">
        <div className=" sm:h-[60rem]  sm:w-[90%]  md:h-[90%] md:w-[80%] bg-brand-500 flex flex-col sm:justify-evenly md:items-center">
          <div className=" sm:h-[20rem] sm:w-full sm:pt-[1rem]  md:h-[16rem] md:w-[90%] flex flex-col  items-center justify-center" >
            <h2 className=" sm:text-[1.9rem] sm:mb-[0.4rem] sm:text-center  md:mb-8 uppercase  md:text-[45px] font-monte font-extrabold    text-brand-400   ">
              Get in Touch Today
            </h2>
            <p className=" sm:text-[0.9rem] sm:text-center  sm:p-[0.7rem] md:text-sm text-brand-50 font-monte md:text-[16px]   ">
              Start your online journey with American Web Express, offering
              top-notch services including website development, web design, SEO,
              graphics, and more. Gain a competitive edge at affordable rates.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} >
          <div className=' sm:h-[58rem] sm:w-full md:w-full md:h-[40rem] flex flex-col '>
              <div className=' sm:h-[10rem] sm:w-full sm:flex-col md:w-full md:h-[5rem] justify-evenly items-center flex md:flex-row ' > 
              <input
                type="text"
                name="user_name"
                value={name}
                id="text"
                required
                placeholder='Full Name'
                autoComplete="off"
                onChange={(e) => { setName((e.target.value))}}

                className=' sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 '              />
              <input
                 value={email}
                type="email"
                name="user_email"
                id="email"
                required
                autoComplete="off"
                placeholder=' Email '
                onChange={(e) => { setEmail((e.target.value))}}
                className=' sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 '    
                          />
              </div>
              <div className=' sm:h-[10rem] sm:w-full sm:flex-col md:w-full md:h-[5rem] justify-evenly items-center flex md:flex-row ' > 

              <input
                type="text"
                name="user_number"
                value={number}
                id="number"
                placeholder='Phone Number'
                required
                autoComplete="off"
                onChange={(e) => { setNumber((e.target.value))}}
                className=' sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 '    
              />
            <select
  value={selectedOption}
  onChange={handleSelectChange}
  name="user_service"
  className=' sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 ' 
>
  {getSelectOptions().map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</select>
              </div>
              <div className=' sm:h-[20rem] sm:justify-evenly sm:items-center  md:h-[26rem] md:w-full flex flex-col  md:justify-around  md:items-center'> 
              <textarea
                name="message"
                value={message}
                id="message"
                cols="20"
                rows="7"
                placeholder=' Project Details'
                onChange={(e) => { setMessage((e.target.value))}} 
                required
                 className=' sm:w-[18rem] md:w-[46rem] md:h-[20rem] pl-4 pt-4'
              ></textarea>
              <button type='submit'  value="Send"    className="sm:pb-2 md:pb-2 md:w-40 sm:text-[12px]  sm:w-[9rem] md:text-base   py-2 px-2 text-center uppercase   font-monte     font-semibold    border md:border-solid border-brand-700    "  > Contact US </button>
              </div>
          </div>
          {showModal && (
  <div className="fixed top-0 left-0 w-full h-full bg-brand-50 bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 shadow-xl bg-brand-100 relative md:text-[1.5rem] text-brand-300">
      <span className="absolute top-0 right-[1rem] cursor-pointer" onClick={() => setShowModal(false)}>&times;</span>
      <p className="text-center">Your message has been sent successfully <br></br> We will redirect to you shortly</p>
    </div>
  </div>
)}
          </form>
        </div>
      </div>
    

    </>
  );
}
