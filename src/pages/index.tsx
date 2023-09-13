import React, { Suspense, useRef, useState, useEffect } from "react";
import PortfolioCarousel from "@/components/Carousel";
import HomePage from "./homepage";
import ProfilePage from "./profilepage";
import Marquee from "react-fast-marquee";
import { Grid, Box, Container } from "@mui/material";
import SwiperTestimonial from "@/components/SwiperTestimonial";
import ContactForms from "@/components/Forms";
import Header from "@/components/reusable/BigHeader";
import ContactInfo from "@/components/ContactInfo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileTestimonial from "@/components/Mobiletestimonial";
import Image from "next/image";

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const domRef = useRef(null);
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

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

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Define the animation parameters (you can customize these)
    const animationProps = {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    };

    // Define the scroll positions for each section
    const section1ScrollPosition = 0;
    const section2ScrollPosition = 400; // Adjust as needed

    // Set the animation based on scroll position
    if (scrollY >= section1ScrollPosition && scrollY < section2ScrollPosition) {
      controls.start(animationProps);
    } else {
      controls.start({ opacity: 1, y: 100 });
    }
  }, [scrollY, controls]);

  return (
    <>
      <main className="">
        <div className="h-[100vh] flex align-middle">
          <div>
            <HomePage />
          </div>
        </div>
        <Container>
          <div className="mobile-view h-[100vh]">
            <PortfolioCarousel />
          </div>
          <div ref={ref}>
            <motion.div
              ref={domRef}
              className={`desktop-view fade-in-section ${
                inView ? "is-visible" : ""
              }`}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
            >
              <ProfilePage />
            </motion.div>
          </div>
          <div className="mobile-view">
            <MobileTestimonial />
          </div>
          <div className="desktop-view test-bg p-0 m-0 container-fluid">
            <SwiperTestimonial />
          </div>
          <div className="h-[100vh] flex align-middle">
            <motion.div
              initial={{ opacity: 1, y: 50 }}
              animate={controls}
              className={`px-3 md:px-0 `}
            >
              <Box sx={{ flexGrow: 1 }}>
                <Header
                  header="get in touch"
                  className=" text-[1.5rem] text-center md:text-left md:text-[3rem] unbound mt-11 uppercase"
                />
                <Header
                  header="Let's get down to Business!"
                  className="text-[1rem] text-center md:text-left md:text-[2.2rem] unbound"
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
                    <div className="flex justify-end">
                    <Image
                      src="/assets/contact.png"
                      height={500}
                      width={500}
                      alt="img"
                    />
                    </div>
                   
                  </Grid>
                </Grid>
              </Box>
            </motion.div>
          </div>
        </Container>
      </main>
    </>
  );
}
