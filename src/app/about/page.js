"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "@fortawesome/fontawesome-free/css/all.css";
import Slider from "../Components/slider";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
      .sendForm(
        serviceId,
        templateID,
        form.current,
        {
          publicKey: "s7vKJDl55o-a1JLo8",
        },
        templateParams
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setShowModal(true);
          setName("");
          setEmail("");
          setNumber("");
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="bg-brand-100 flex sm:flex-col sm:items-center  sm:h-[43rem] md:flex-row md:h-screen min-w-full md:justify-evenly md:items-center xl:h-[75vh]  ">
        <div className="sm:h-3/5 sm:w-11/12 sm:justify-center md:h-3/5  md:w-2/5 pt-7 flex  flex-col text-pretty md:justify-evenly ">
          <h2
            className=" sm:text-5xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-7xl font-monte font-extrabold   text-brand-500  sm:text-wrap md:text-clip md:leading-9 xl:text-[8rem] "
            data-aos="fade-right"
          >
            About US
          </h2>
          <p
            className=" sm:text-[0.8rem] md:text-lg   leading-6 mb-4 text-brand-500 font-monte   sm:text-justify xl:text-[1.4rem] "
            data-aos="zoom-in"
          >
            American Web Express provides web design and SEO services to
            businesses, enhancing online presence and success. Combining
            creativity with data-driven strategies, we create visually appealing
            websites that rank high on search engines. Through collaboration and
            measurable results, we empower clients to maximize their digital
            potential.
          </p>
        </div>
        <div className=" md:h-full  md:w-2/5 md:pt-3 md:flex md:justify-start pl-2 md:items-center">
          <Image
            src="/landing.png"
            width={500}
            height={400}
            alt="logo"
            className=" md:h-[20rem] md:w-[35rem]  xl:w-[45rem] xl:h-[30rem] "
          />
        </div>
      </div>

      {/* Section 2 */}

      <div className="  sm:h-[43rem] md:h-[120vh]  min-w-full flex md:justify-center  md:items-center">
        <div
          className=" sm:bg-contain sm:flex sm:justify-center sm:h-[60rem] md:block md:bg-cover bg-left bg-no-repeat md:w-[63rem] md:h-4/5 xl:w-[95rem] "
          style={{
            backgroundImage: "url('/about6.jpg')",
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="  sm:w-[90%] sm:h-[21rem] sm:static  md:absolute bg-brand-300    sm:justify-center md:h-[24rem]  md:w-[27rem] pt-7 flex md:opacity-90  flex-col text-pretty md:justify-center xl:w-[40rem] xl:h-[40rem] xl:justify-center  ">
            <div
              className="flex sm:h-5 sm:mb-[1rem] md:mb-[0.1rem] md:h-[5rem] w-[20rem] items-center  xl:pl-[0.7rem]"
              data-aos="fade-right"
            >
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
              />
              <h4 className=" font-monte text-[12px] font-bold  pl-4 xl:text-[1.5rem] ">
                ABOUT US
              </h4>
            </div>
            <h2 className=" sm:text-xl sm:mb-[1rem] md:pl-[1rem] md:pr-[1rem] md:mb-1 uppercase md:text-3xl font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9 xl:text-[3rem] xl:pb-[1rem] xl:leading-[2.7rem]  xl:pl-[0.7rem]  ">
              Craft Your Unique Web Creation
            </h2>
            <p className=" sm:text-[0.8rem] md:text-sm md:p-[1rem]  leading-6 mb-4 text-brand-50 font-monte   sm:text-left xl:text-[1.4rem] xl:leading-[2rem] xl:pl-[0.7rem] ">
              American Web Express offers innovative tools and professional
              support to help you create a stunning online presence that
              showcases your individuality. Let us guide you on a creative
              journey to develop a web masterpiece that stands out in the online
              world.
            </p>
          </div>
        </div>
      </div>

      {/* section 3  */}

      <div className=" sm:h-[65rem]  sm:items-center  sm:flex-col md:h-[70vh] md:min-w-full md:flex-row flex justify-evenly xl:h-[50vh] ">
        <div className=" sm:h-[15rem] sm:w-[90%]    justify-center  md:w-[25%]  md:h-full flex flex-col   ">
          <div className="flex sm:h-5 sm:mb-[1rem] md:mb-[0rem]  md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
            />
            <h4 className=" font-monte text-[13px] font-bold  xl:text-[1.3rem]   ">
              OUR VISION
            </h4>
          </div>
          <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-[1rem] uppercase md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9 xl:text-[1.8rem] xl:pb-[1rem]  ">
            Follow Digital Trends & Lead the Changes
          </h2>
          <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-sm xl:text-[1.1rem]  ">
            American Web Express empowers online businesses with our expertise
            in web design and SEO, delivering tangible results across diverse
            industries.
          </p>
        </div>

        <div className=" sm:h-[15rem] sm:w-[90%]   justify-center  md:w-[25%] md:h-full flex flex-col   ">
          <div className="flex sm:h-5 sm:mb-[1rem] md:mb-[0rem] md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
            />
            <h4 className=" font-monte text-[13px] font-bold xl:text-[1.3rem]   ">
              OUR MISSION
            </h4>
          </div>
          <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-[1rem]  uppercase  md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9 xl:text-[1.8rem] xl:pb-[1rem]  ">
            Biggest World Brands Always Take Risks
          </h2>
          <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-sm xl:text-[1.1rem]  ">
            We aim to become the premier digital marketing agency in the UK,
            offering businesses distinctive strategies to fully unleash their
            digital capabilities.
          </p>
        </div>

        <div className=" sm:h-[15rem] sm:w-[90%] sm:justify-evenly md:justify-center  md:w-[27%] md:h-full flex flex-col   ">
          <div className="flex sm:h-5 sm:mb-[1rem] md:mb-[0rem] md:h-[5rem] w-[20rem] items-center ">
            <Image
              src="/line2.svg"
              width={40}
              height={10}
              alt="logo "
              className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
            />
            <h4 className=" font-monte text-[13px] font-bold  xl:text-[1.3rem]  ">
              OUR VALUE
            </h4>
          </div>
          <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-[1rem] uppercase  md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9 xl:text-[1.8rem] xl:pb-[1rem]  ">
            Lets Boost Your Business & Grow Together
          </h2>
          <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-sm  xl:text-[1.1rem] ">
            We drive your business forward with customized digital marketing
            solutions, enhancing your online presence, increasing conversions,
            and unlocking your full potential.
          </p>
        </div>
      </div>

      <Slider />

      {/* Form  */}

      <div className=" sm:h-[80rem]  bg-brand-100  flex justify-center items-center md:h-[150vh] min-w-full  xl:h-[100vh] md:mb-[4rem]  ">
        <div className=" sm:h-[60rem]  sm:w-[90%]  md:h-[90%] md:w-[80%] bg-brand-500 flex flex-col sm:justify-evenly md:items-center">
          <div className=" sm:h-[20rem] sm:w-full sm:pt-[1rem]  md:h-[16rem] md:w-[90%] flex flex-col  items-center justify-center">
            <h2 className=" sm:text-[1.9rem] sm:mb-[0.4rem] sm:text-center  md:mb-8 uppercase  md:text-[45px] font-monte font-extrabold    text-brand-400   ">
              Get in Touch Today
            </h2>
            <p className=" sm:text-[0.9rem] sm:text-center  sm:p-[0.7rem] md:text-sm text-brand-50 font-monte md:text-[16px] xl:text-[1.4rem]  xl:leading-[1.4rem]  ">
              Start your online journey with American Web Express, offering
              top-notch services including website development, web design, SEO,
              graphics, and more. Gain a competitive edge at affordable rates.
            </p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="xl:w-[90rem]  ">
            <div className=" sm:h-[58rem] sm:w-full md:w-full md:h-[40rem] flex flex-col ">
              <div className=" sm:h-[10rem] sm:w-full sm:flex-col md:w-full md:h-[5rem] justify-evenly items-center flex md:flex-row ">
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  id="text"
                  required
                  placeholder="Full Name"
                  autoComplete="off"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 xl:text-[1.4rem] xl:w-[29rem] "
                />
                <input
                  value={email}
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  autoComplete="off"
                  placeholder=" Email "
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 xl:text-[1.4rem] xl:w-[29rem] "
                />
              </div>
              <div className=" sm:h-[10rem] sm:w-full sm:flex-col md:w-full md:h-[5rem] justify-evenly items-center flex md:flex-row ">
                <input
                  type="text"
                  name="user_number"
                  value={number}
                  id="number"
                  placeholder="Phone Number"
                  required
                  autoComplete="off"
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 xl:text-[1.4rem] xl:w-[29rem] "
                />
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  name="user_service"
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[21rem] md:h-[3rem] md:pl-4 xl:text-[1.4rem] xl:w-[29rem] "
                >
                  {getSelectOptions().map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className=" sm:h-[20rem] sm:justify-evenly sm:items-center  md:h-[26rem] md:w-full flex flex-col  md:justify-around  md:items-center">
                <textarea
                  name="message"
                  value={message}
                  id="message"
                  cols="20"
                  rows="7"
                  placeholder=" Project Details"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  required
                  className=" sm:w-[18rem] md:w-[46rem] md:h-[20rem] pl-4 pt-4 xl:w-[68rem] xl:text-[1.5rem]  "
                ></textarea>
                <button
                  type="submit"
                  value="Send"
                  className="sm:pb-2 md:pb-2 md:w-40 sm:text-[12px]  sm:w-[9rem] md:text-base   py-2 px-2 text-center uppercase   font-monte     font-semibold    border md:border-solid border-brand-700 xl:text-[1.3rem]  xl:py-[1.2rem] xl:px-[1.2rem] xl:w-[12rem]  "
                >
                  {" "}
                  Contact US{" "}
                </button>
              </div>
            </div>
            {showModal && (
              <div className="fixed top-0 left-0 w-full h-full bg-brand-50 bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 shadow-xl bg-brand-100 relative md:text-[1.5rem] text-brand-300">
                  <span
                    className="absolute top-0 right-[1rem] cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </span>
                  <p className="text-center">
                    Your message has been sent successfully <br></br> We will
                    redirect to you shortly
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
