import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "@/components/MarqueeTestimonial";
import { TestimonialWords } from "@/components/reusable/data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const MobileTestimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        mousewheel={true}
        keyboard={true}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {TestimonialWords.map(({ id, name, words, position }) => {
          return (
            <div key={id}>
              <SwiperSlide>
                <Testimonial name={name} words={words} position={position} />
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </>
  );
};
export default MobileTestimonial;
