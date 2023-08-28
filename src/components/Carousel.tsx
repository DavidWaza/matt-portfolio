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
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
} from "swiper/modules";

const myFonts = localFont({ src: "../../public/fonts/Hannari-Regular.ttf" });

const PortfolioCarousel = () => {
  useEffect(() => {
    async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    };
  });

  return (
    <>
    <div id='profile'>
    <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {(
            <div className="img-container">
              <div className="img-hover">
                <figure>
                  <img src="/assets/matts.jpg" />
                </figure>
                <div
                  data-scroll
                  data-scroll-speed="0.3"
                  className="img-text poppins text-[burlywood]"
                >
                  <p>{`Photography`}</p>
                </div>
              </div>
            </div>
          ) || <Skeleton />}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <div className="img-container">
              <div className="img-hover">
                <figure>
                  <img src="/assets/diamond-ring.jpg" />
                </figure>
                <div
                  data-scroll
                  data-scroll-speed="0.3"
                  className="img-text poppins text-white"
                >
                  Diamonds
                </div>
              </div>
            </div>
          ) || <Skeleton />}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <div className="img-container">
              <div className="img-hover">
                <figure>
                  <img src="/assets/gemstone.jpg" />
                </figure>
                <div
                  data-scroll
                  data-scroll-speed="0.3"
                  className="img-text poppins text-[#4a2c2a]"
                >
                  Gem Stones
                </div>
              </div>
            </div>
          ) || <Skeleton />}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <div className="img-container">
              <div className="img-hover">
                <figure>
                  <img src="/assets/e-commerce.jpg" />
                </figure>
                <div
                  data-scroll
                  data-scroll-speed="0.3"
                  className="img-text poppins text-[burlywood]"
                >
                  E-commerce
                </div>
              </div>
            </div>
          ) || <Skeleton />}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <div className="img-container">
              <div className="img-hover">
                <figure>
                  <img src="/assets/frontend.jpg" />
                </figure>
                <div
                  data-scroll
                  data-scroll-speed="0.3"
                  className="img-text poppins text-[burlywood] text-[#F7F9F9]"
                >
                  Software Engineering
                </div>
              </div>
            </div>
          ) || <Skeleton />}
        </SwiperSlide>
      </Swiper>
    </div>
     
    </>
  );
};
export default PortfolioCarousel;
