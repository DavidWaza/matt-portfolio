"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/styles/styles.module.css";
import "swiper/css";
import Image from "next/image";
import Header from "./reusable/BigHeader";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const PortfolioCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={0}
        mousewheel={true}
        keyboard={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {(
            <Link href="/photography">
              <div className="img-container">
                <div className="img-hover">
                  <figure>
                    <Image
                      alt="pic1"
                      src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312966/matts_c3t2y8.jpg"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
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
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <Link href="/diamonds">
              <div className="img-container">
                <div className="img-hover">
                  <figure>
                    <Image
                      alt="pic2"
                      src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312962/diamond-ring_xdjpzy.jpg"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </figure>
                  <div
                    data-scroll
                    data-scroll-speed="0.3"
                    className="img-text poppins text-[#0D341D]"
                  >
                    Diamonds
                  </div>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <Link href="/precious-stones">
              <div className="img-container">
                <div className="img-hover">
                  <figure>
                    <Image
                      alt="pic3"
                      src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312965/gemstone_aedeqn.jpg"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </figure>
                  <div
                    data-scroll
                    data-scroll-speed="0.3"
                    className="img-text poppins text-[#4a2c2a]"
                  >
                    Precious Stones
                  </div>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <Link href="/e-commerce">
              <div className="img-container">
                <div className="img-hover">
                  <figure>
                    <Image
                      alt="pic4"
                      src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312965/e-commerce_cxlm0n.jpg"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </figure>
                  <div
                    data-scroll
                    data-scroll-speed="0.3"
                    className="img-text poppins text-[coffee]"
                  >
                    E-commerce
                  </div>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
        <SwiperSlide>
          {(
            <Link href="/data-engr">
              <div className="img-container">
                <div className="img-hover">
                  <figure>
                    <Image
                      alt="pic5"
                      src="https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312968/frontend_gvubtj.jpg"
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </figure>
                  <div
                    data-scroll
                    data-scroll-speed="0.3"
                    className="img-text poppins text-[#FFFFFF]"
                  >
                    Data Engineer
                  </div>
                </div>
              </div>
            </Link>
          )}
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default PortfolioCarousel;
