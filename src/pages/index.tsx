import React, { Suspense, useRef, useState, useEffect } from "react";
import PortfolioCarousel from "@/components/Carousel";
import Loading from "@/components/loading";
import HomePage from "./homepage";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ProfilePage from "./profilepage";
import Testimonial from "@/components/MarqueeTestimonial";
import Marquee from "react-fast-marquee";
import { TestimonialWords } from "@/components/reusable/data";
import { Grid, Box, Container } from "@mui/material";
import SwiperTestimonial from "@/components/SwiperTestimonial";

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  // const containerRef = useRef(null);
  const domRef = useRef(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (currentRef) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => setVisible(entry.isIntersecting));
      });

      observer.observe(currentRef);

      return () => observer.unobserve(currentRef);
    }
  }, []);

  return (
    <>
      <main>
        <HomePage />
        <div className="mobile-view">
          <PortfolioCarousel />
        </div>
        <div
          ref={domRef}
          className={`desktop-view fade-in-section ${
            isVisible ? "is-visible" : ""
          }`}
        >
          <ProfilePage />
        </div>
        <div className="mobile-view">
          <Marquee>
            {TestimonialWords.map(({ id, name, words }) => {
              return (
                <div key={id}>
                  <Testimonial name={name} words={words} />
                </div>
              );
            })}
          </Marquee>
        </div>
        <div className="desktop-view">
          <Container>
            <SwiperTestimonial />
          </Container>
        </div>
      </main>
    </>
  );
}
