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
        spaceBetween={10}
        mousewheel={true}
        keyboard={true}
        pagination={{
          type: "fraction",
          clickable:true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {TestimonialWords.map(({ id, name, words }) => {
            return (
              <div key={id}>
                <Testimonial name={name} words={words} />
              </div>
            );
          })}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default MobileTestimonial;
