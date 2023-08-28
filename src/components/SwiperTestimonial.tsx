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
import { TestimonialWords } from "@/components/reusable/Card";
import Testimonial from "@/components/MarqueeTestimonial";

import {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Mousewheel,
} from "swiper/modules";

const myFonts = localFont({ src: "../../public/fonts/Hannari-Regular.ttf" });

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
          header="Testimonials"
          className="m-1 text-[2rem] tracking-widest text-[burlywood]"
          style={myFonts.style}
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
          // keyboard={{
          //   enabled: true,
          // }}
          // breakpoints={{
          //   769: {
          //     slidesPerView: 3,
          //     slidesPerGroup: 3,
          //   },
          // }}
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
          {TestimonialWords.map(({ id, name, words }) => {
            return (
              <div key={id}>
                <SwiperSlide>
                  <Testimonial name={name} words={words} />
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
