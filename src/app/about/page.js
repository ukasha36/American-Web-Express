"use client";
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
  return (
    <>
      <div className="bg-brand-100">
        <div>
          <div>
            <h2> About US</h2>
            <p>
              American Web Express offers a combination of web design and SEO
              services, helping businesses of all sizes achieve online success.
              Our team combines creative expertise with data-driven strategies
              to craft visually stunning websites that climb search engine
              rankings. With a focus on collaboration and delivering measurable
              results, they empower clients to reach their full digital
              potential.
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
