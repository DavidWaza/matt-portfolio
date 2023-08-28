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
import Image from "next/image";
import Header from "./reusable/BigHeader";

import {
  Autoplay,
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Mousewheel
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
    <Header
          header="Profile"
          className="m-10 text-center poppins text-[2rem] tracking-widest text-[burlywood]"
          style={myFonts.style}
        />
    <Swiper
    cssMode={true}
        centeredSlides={false}
        spaceBetween={30}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay, Scrollbar]}
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
        <SwiperSlide>
          {(
            <div className="img-container">
              <div className="img-hover">
                <figure>
                  <Image alt='pic1' src="/assets/matts.jpg" width={400} height={400} loading='lazy'/>
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
                  <Image alt='pic2' src="/assets/diamond-ring.jpg" width={400} height={400} loading='lazy'/>
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
                  <Image alt='pic3' src="/assets/gemstone.jpg" width={400} height={400} loading='lazy' />
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
                  <Image alt='pic4' src="/assets/e-commerce.jpg" width={400} height={400} loading='lazy' />
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
                  <Image alt='pic5' src="/assets/frontend.jpg" width={400} height={400} loading='lazy' />
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
