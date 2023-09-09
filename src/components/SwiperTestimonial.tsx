"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import localFont from "next/font/local";
import "@/styles/styles.module.css";
import "swiper/css";
import "react-loading-skeleton/dist/skeleton.css";
import Header from "./reusable/BigHeader";
import { TestimonialWords } from "@/components/reusable/data";
import Testimonial from "@/components/MarqueeTestimonial";

import {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Mousewheel,
} from "swiper/modules";

const SwiperTestimonial = () => {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  });

  return (
    <>
      <div>
        <Header
          header="Praise"
          className="m-1 unbound uppercase text-center md:text-left text-[2rem] tracking-widest text-[burlywood]"
        />
        <Header
          header="Some nice words from nice people"
          className="unbound text-center md:text-left tracking-wide"
        />
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          modules={[
            Navigation,
            Pagination,
            Mousewheel,
            Keyboard,
            Autoplay,
            Scrollbar,
          ]}
          scrollbar={false}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5500,
            // disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          {TestimonialWords.map(({ id, name, words,position }) => {
            return (
              <div key={id}>
                <SwiperSlide>
                  <Testimonial name={name} words={words} position={position} />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default SwiperTestimonial;
