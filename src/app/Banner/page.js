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
      <Swiper
        className=" sm:h-[40rem] md:h-[70vh] "
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
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
                <h4 className="text-2xl uppercase"> Web Development </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 text-sm">
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
                <h4 className="text-2xl uppercase"> UI & UX Design </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 text-sm">
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
                <h4 className="text-2xl uppercase"> Graphic Designing</h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 text-sm">
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
                <h4 className="text-2xl uppercase"> Social Media Marketing </h4>
              </div>
              <div className=" sm:w-5/6  md:w-2/6 flex sm:h-2/4  md:h-3/5 md:pl-12 sm:pl-4">
                <p className=" text-brand-50 text-justify sm:leading-5 text-sm">
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

      <div className=" md:h-">
        <div className=" md:h-">
          The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum." Section 1.10.32 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "Sed ut perspiciatis unde omnis
          iste natus error sit voluptatem accusantium doloremque laudantium,
          totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
          quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
          voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
          enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
          voluptas nulla pariatur?" 1914 translation by H. Rackham "But I must
          explain to you how all this mistaken idea of denouncing pleasure and
          praising pain was born and I will give you a complete account of the
          system, and expound the actual teachings of the great explorer of the
          truth, the master-builder of human happiness. No one rejects,
          dislikes, or avoids pleasure itself, because it is pleasure, but
          because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?" Section 1.10.33 of "de Finibus Bonorum et
          Malorum", written by Cicero in 45 BC "At vero eos et accusamus et
          iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
          deleniti atque corrupti quos dolores et quas molestias excepturi sint
          occaecati cupiditate non provident, similique sunt in culpa qui
          officia deserunt mollitia animi, id est laborum et dolorum fuga. Et
          harum quidem rerum facilis est et expedita distinctio. Nam libero
          tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
          minus id quod maxime placeat facere possimus, omnis voluptas assumenda
          est, omnis dolor repellendus. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Itaque earum
          rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
          maiores alias consequatur aut perferendis doloribus asperiores
          repellat." 1914 translation by H. Rackham "On the other hand, we
          denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire, that they cannot foresee the pain and trouble that
          are bound to ensue; and equal blame belongs to those who fail in their
          duty through weakness of will, which is the same as saying through
          shrinking from toil and pain. These cases are perfectly simple and
          easy to distinguish. In a free hour, when our power of choice is
          untrammelled and when nothing prevents our being able to do what we
          like best, every pleasure is to be welcomed and every pain avoided.
          But in certain circumstances and owing to the claims of duty or the
          obligations of business it will frequently occur that pleasures have
          to be repudiated and annoyances accepted. The wise man therefore
          always holds in these matters to this principle of selection: he
          rejects pleasures to secure other greater pleasures, or else he
          endures pains to avoid worse pains." Hello Hello{" "}
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default Banner;
