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
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileTestimonial from "@/components/Mobiletestimonial";

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  const domRef = useRef(null);

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

  return (
    <>
      <main>
        <HomePage />
        <Container>
          <div className="mobile-view">
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
          <div className="desktop-view">
            <SwiperTestimonial />
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={`px-3 md:px-0 `}
            >
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
            </motion.div>
          </div>
        </Container>
      </main>
    </>
  );
}
