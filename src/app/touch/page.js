"use client";
import Image from "next/image";
import { useState } from "react";

export default function Touch() {
  const [selectedOption, setSelectedOption] = useState("");

  // Handler function to update selected option
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className="bg-brand-100 flex  sm:flex-col-reverse sm:h-[20rem] sm:items-center  relative md:flex-row md:h-[70vh] min-w-full md:justify-around md:items-center">
        <div className="  sm:flex sm:flex-col-reverse   sm:justify-evenly sm:items-start  sm:pl-4  md:pl-0  md:h-full  md:w-[0%] md:pt-3 md:flex md:justify-start  md:items-end ">
          <h2 className=" sm:left-4 sm:top-[12rem] sm:z-10 md:top-[17rem]   sm:text-[2.1rem] sm:mb-[1.4rem] sm:text-center absolute  md:bottom-[1rem] md:left-[2rem]  uppercase md:text-7xl md:text-left  font-monte font-extrabold   text-brand-500  sm:text-wrap md:text-clip   ">
            Contact US
          </h2>
        </div>

        <div
          className="sm:h-[24rem] sm:bg-right sm:w-full sm:bg-cover sm:justify-center md:h-full md:bg-bottom md:pr-4 md:w-full  flex text-pretty md:justify-start md:items-center  "
          style={{
            backgroundImage: "url('/cn.png')",
            backgroundRepeat: "no-repeat",
            opacity: " 0.5", // Center the background image
          }}
        ></div>
      </div>

      {/* section 2  */}

      <div className=" sm:h-[85rem] sm:flex-col sm:items-center  flex  md:flex-row md:justify-around  md:items-center md:h-[150vh] min-w-full">

        {/* Section 1  */}
        <div className=" sm:items-center  md:w-[40%] md:h-full flex flex-col md:justify-center ">

          {/* Section 1  */}
        
          <div className=" sm:h-[24rem] sm:w-[90%] sm:justify-end    md:w-full md:h-[35%] flex flex-col">
            <div className="flex sm:h-5 sm:mb-4 md:h-[5rem] w-[20rem] items-center ">
              <Image
                src="/line2.svg"
                width={40}
                height={10}
                alt="logo "
                className=" sm:w-[4rem] md:h-[4rem] md:w-[5rem]"
              />
              <h4 className=" font-monte text-[13px] font-bold    ">
                EXPERTS IN FIELD
              </h4>
            </div>
            <h2 className=" sm:text-xl sm:mb-[1.4rem]  md:mb-1 uppercase md:text-[1.4rem] font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
              Reach Out to Our Experts <br/> for Your Digital Solutions
            </h2>
            <p className=" sm:text-[0.8rem]  line mb-4 text-brand-50 font-monte   sm:text-left md:text-[14px]  md:font-medium  ">
              Our team of experts specializes in web development, web design,
              graphics, SEO, and marketing. Contact us today for tailored
              solutions that will optimize your business growth. Dont miss out
              on propelling your success. Reach out to us now, and lets elevate
              your business to new heights!
            </p>
          </div>

          {/* Section 2  */}
          <div className=" sm:h-[18rem]  sm:pl-[0.5rem] md:h-[10rem] justify-evenly md:w-full flex flex-col">
        
            <div className=" flex ">
              <Image
                src="/location.svg"
                width={100}
                height={80}
                alt="logo "
                className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-2 "
              />
              Suite 1149 Unit 3A, 34-35 Hatton Garden, Holborn, London UK
            </div>

            <div className=" flex ">
              <Image
                src="/phone.svg"
                width={100}
                height={80}
                alt="logo "
                className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1 "
              /> 
              +11122244455
            </div>

            <div className=" flex ">
              <Image
                src="/mail.svg"
                width={100}
                height={80}
                alt="logo "
                className=" sm:h-[2rem] sm:w-[3rem] md:w-[2rem] md:h-[1.3rem] mr-1"
              /> 
              hello@awh.com
            </div>
          </div>
        </div>

        <div className=" sm:h-[58rem] sm:w-full md:w-[45%] md:h-full flex flex-col md:justify-center ">
        <div className=" sm:text-xl sm:mb-[1.4rem] sm:justify-center   flex  md:mb-1 uppercase md:text-3xl font-monte font-extrabold    text-brand-400  sm:text-wrap md:text-clip md:leading-9  ">
            Leave a Comment
          </div>
          <div className=" sm:h-[8rem] sm:w-full sm:justify-evenly sm:flex-col md:w-full md:h-[5rem] md:justify-between items-center flex md:flex-row ">
            <input
              type="text"
              name="text"
              id="text"
              required
              placeholder="Full Name"
              autoComplete="off"
              className=" sm:w-[18rem] sm:h-[3rem]   md:w-[18rem] md:h-[3rem] md:pl-4 "
            />
            <input
              type="email"
              name="email"
              id="email"
              required
              autoComplete="off"
              placeholder=" Email "
              className=" sm:w-[18rem] sm:h-[3rem]   md:w-[18rem] md:h-[3rem] md:pl-4 "
            />
          </div>
          <div className="sm:h-[8rem] sm:w-full sm:justify-evenly sm:flex-col md:w-full md:h-[5rem] md:justify-between items-center flex md:flex-row ">
            <input
              type="text"
              name="number"
              id="number"
              placeholder="Phone Number"
              required
              autoComplete="off"
              className=" sm:w-[18rem] sm:h-[3rem]   md:w-[18rem] md:h-[3rem] md:pl-4 "
            />
            <select
              value={selectedOption}
              onChange={handleSelectChange}
              className=" sm:w-[18rem] sm:h-[3rem]   md:w-[18rem] md:h-[3rem] md:pl-4 "
            >
              <option value="">Web Development</option>
              <option value="option1"> Graphic Design</option>
              <option value="option2">Seo & Marketing</option>
              <option value="option3"> Social Media Marketing</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className=" sm:h-[18rem] sm:justify-evenly sm:items-center  md:h-[26rem] md:w-full flex flex-col  md:justify-around  md:items-start ">
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="7"
              placeholder=" Project Details"
              required
              className=" sm:w-[18rem] md:w-full md:h-[20rem] pl-4 pt-4"
            ></textarea>
            <button
              type="submit"
              className="sm:pb-2 md:pb-2 md:w-40 sm:text-[12px]  sm:w-[9rem] md:text-base   py-2 px-2 text-center uppercase   font-monte     font-semibold    border md:border-solid border-brand-700    "
            >
          
              Contact US
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
