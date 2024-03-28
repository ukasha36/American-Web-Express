"use client";
import Image from "next/image";
import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Touch() {
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
      <div className="bg-brand-100 flex  sm:flex-col-reverse sm:h-[20rem] sm:items-center  relative md:flex-row md:h-[70vh] min-w-full md:justify-around md:items-center">
        <div className="  sm:flex sm:flex-col-reverse   sm:justify-evenly sm:items-start  sm:pl-4  md:pl-0  md:h-full  md:w-[0%] md:pt-3 md:flex md:justify-start  md:items-end ">
          <h2 className=" sm:left-4 sm:top-[12rem] sm:z-10 md:top-[17rem]   sm:text-[2.1rem] sm:mb-[1.4rem] sm:text-center absolute  md:bottom-[1rem] md:left-[2rem]  uppercase md:text-7xl md:text-left  font-monte font-extrabold   text-brand-500  sm:text-wrap md:text-clip xl:top-[30rem]  xl:text-[6.5rem] ">
            Contact US
          </h2>
        </div>

        <div
          className="sm:h-[24rem] sm:bg-right sm:w-full sm:bg-cover sm:justify-center md:h-full md:bg-bottom  md:w-full  flex text-pretty md:justify-start md:items-center  "
          style={{
            backgroundImage: "url('/cn.png')",
            backgroundRepeat: "no-repeat",
            opacity: " 0.5", // Center the background image
          }}
        ></div>
      </div>

      {/* section 2  */}

      <div className=" sm:h-[85rem] sm:flex-col sm:items-center  flex  md:flex-row md:justify-around  md:items-center md:h-[150vh] min-w-full    xl:h-[115vh] ">


        <div  className="	sm:flex-col sm:items-center flex md:justify-around md:items-start md:flex-row md:h-[70%]  w-full" >
          {/* Section 1  */}
          <div className=" sm:items-center sm:h-[40%]   md:w-[40%] md:h-full flex flex-col md:justify-start ">
            {/* Section 1  */}

            <div className=" sm:h-[24rem] sm:w-[90%] sm:justify-end    md:w-full md:h-[35%] flex flex-col xl:h-[45%] xl:justify-center ">
              <div className="flex sm:h-5 sm:mb-4 md:h-[5rem] w-[20rem] items-center ">
                <Image
                  src="/line2.svg"
                  width={40}
                  height={10}
                  alt="logo "
                  className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
                />
                <h4 className=" font-monte text-[13px] font-bold   xl:text-[1.5rem] ">
                  EXPERTS IN FIELD
                </h4>
              </div>
              <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9 xl:text-[3rem] xl:leading-[3.5rem] xl:mb-[1rem] ">
                Reach Out to Our Experts <br /> for Your Digital Solutions
              </h2>
              <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-[14px]  md:font-medium  xl:text-[1.2rem] text-justify ">
                Our team of experts specializes inin web development, design,
                graphics, SEO, and marketing. Propel your success by reaching
                out now! Lets elevate your business together!
              </p>
            </div>

            {/* Section 2  */}
            <div className=" sm:h-[18rem]  sm:pl-[0.5rem] md:p-[0rem]  md:h-[10rem] justify-evenly md:w-full flex flex-col">
              <div className=" flex xl:items-center xl:mb-[1rem] ">
                <Image
                  src="/location.svg"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-2 xl:h-16 xl:w-12 "
                />
                <p className=" xl:text-[1.2rem]">
                  
                 4827 Zoila Freeway Apt.455 Colorado , Eduardoport USA 67965 
                </p>
              </div>

              <div className=" flex xl:items-center xl:mb-[1rem] ">
                <Image
                  src="/phone.svg"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 xl:h-16 xl:w-12 "
                />
                <p className=" xl:text-[1.2rem]">+1 8186509785</p>
              </div>

              <div className=" flex xl:items-center xl:mb-[1rem] ">
                <Image
                  src="/mail.svg"
                  width={100}
                  height={80}
                  alt="logo "
                  className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 xl:h-16 xl:w-12 "
                />
                <p className=" xl:text-[1.2rem]">
                  {" "}
                  americanwebexpress@gmail.com{" "}
                </p>
              </div>
            </div>
          </div>
          {/* Form  */}

          <form ref={form} onSubmit={sendEmail} className=" xl:w[40%] ">
            <div className=" sm:h-[58rem] sm:w-full md:w-full md:h-full flex flex-col md:justify-center ">
              <div className=" sm:text-xl sm:mb-[1.4rem] sm:justify-center   flex  md:mb-1 uppercase md:text-3xl font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9 xl:justify-start xl:text-[2.5rem] ">
                Leave a Comment
              </div>
              <div className=" sm:h-[8rem] sm:w-full sm:justify-evenly sm:flex-col md:w-full md:h-[5rem] md:justify-between items-center flex md:flex-row ">
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
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[16rem] md:h-[3rem] md:pl-4 xl:w-[20rem] xl:text-[1.3rem] "
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
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[16rem] md:h-[3rem] md:pl-4  md:ml-3 xl:w-[20rem] xl:text-[1.3rem] "
                />
              </div>
              <div className="sm:h-[8rem] sm:w-full sm:justify-evenly sm:flex-col md:w-full md:h-[5rem] md:justify-between items-center flex md:flex-row ">
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
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[16rem] md:h-[3rem] md:pl-4 xl:w-[20rem] xl:text-[1.3rem] "
                />
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  name="user_service"
                  className=" sm:w-[18rem] sm:h-[3rem]   md:w-[16rem] md:h-[3rem] md:pl-4 xl:w-[20rem] "
                >
                  <option name="user_service" value="Web Development">
                    Web Development
                  </option>
                  <option name="user_service" value=" Graphic Design">
           
                    Graphic Design
                  </option>
                  <option name="user_service" value="Seo & Marketing">
                    Seo & Marketing
                  </option>
                  <option name="user_service" value="Social Media Marketing">
                  
                    Social Media Marketing
                  </option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className=" sm:h-[18rem] sm:justify-evenly sm:items-center  md:h-[26rem] md:w-full flex flex-col  md:justify-around  md:items-start ">
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
                  className=" sm:w-[18rem] md:w-full md:h-[20rem] pl-4 pt-4 xl:text-[1.3rem]  "
                ></textarea>
                <button
                  type="submit"
                  className="  sm:pb-2 md:pb-2 md:w-40 sm:text-xl md:text-base  1920:text-[1.7rem] py-2 px-2 text-center   font-monte  hover:md:bg-brand-100   hover:md:text-brand-300  md:rounded-md    font-semibold md:text-brand-100   md:border md:border-solid md:border-brand-100 sm:text-brand-200  xl:text-[1.2rem] "
                >
                  Contact US
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
