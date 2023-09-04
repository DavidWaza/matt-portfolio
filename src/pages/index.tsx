import React, { Suspense, useRef, useState, useEffect } from "react";
import PortfolioCarousel from "@/components/Carousel";
import HomePage from "./homepage";
import ProfilePage from "./profilepage";
import Testimonial from "@/components/MarqueeTestimonial";
import Marquee from "react-fast-marquee";
import { TestimonialWords } from "@/components/reusable/data";
import { Grid, Box, Container } from "@mui/material";
import SwiperTestimonial from "@/components/SwiperTestimonial";
import ContactForms from "@/components/Forms";
import Header from "@/components/reusable/BigHeader";
import ContactInfo from "@/components/ContactInfo";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

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
        <Container>
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
            <SwiperTestimonial />
          </div>
          <div className="px-3 md:px-0">
            <Box sx={{ flexGrow: 1 }}>
            <Header
              header="get in touch"
              className=" text-[2.2rem] md:text-[3rem] unbound mt-11 uppercase"
            />
            <Header
              header="Let's get down to Business!"
              className="text-[1.4rem] md:text-[2.2rem] unbound"
            />
              <Grid
                spacing={0}
                justifyContent="center"
                alignItems="center"
                container
              >
                <Grid xs={12} md={6} lg={6}>
                  <ContactInfo />
                </Grid>
                <Grid xs={12} md={6} lg={6}>
                  {/* <ContactForms initialValues={initialValues} /> */}
                </Grid>
              </Grid>
            </Box>
          </div>
        </Container>
      </main>
    </>
  );
}
