"use client";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <>
      <div className=" md:flex  sm:h-lvh md:h-screen min-w-full md:justify-center">
        <div className=" sm:h-3/5   md:h-3/5  md:w-2/5 pt-7 flex  flex-col  justify-evenly   ">
          <div className="flex sm:h-9  md:h-1/5 w-full  ">
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
            <h1 className=" sm:text-2xl  md:text-4xl font-poppins font-bold capitalize text-brand-400  sm:text-balance md:text-clip md:leading-9 mb-4 ">
              Your vision will be boosted by our customised development
              solutions
            </h1>
            <p className="leading-6 mb-4 text-brand-50 font-poppins md:text-pretty sm:text-balance " >
              We are a leading software development and marketing company based
              in the USA, delivering cutting-edge digital solutions.
              Specializing in creating powerful software applications,covering web development, graphic design,
              social media marketing , SEO, and content marketing.
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
      <div className="bg-brand-500">
     <div>
     <div className="flex sm:h-9  md:h-1/5 w-full  ">
            <Image
              src="/line.svg"
              width={30}
              height={10}
              alt="logo "
              className="h-6"
            />
            <h4> GROUP OF PROFESSIONALS </h4>
     </div>
     <div>

     </div>
      </div>
      </div>

    </>
  );
}

export default Banner;
