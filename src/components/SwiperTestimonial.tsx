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
  return (
    <>
      <div>
        <Header
          header="Testimonials"
          className="uppercase tracking-[.5em] font-bold text-[#B5AB99] pt-10"
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
