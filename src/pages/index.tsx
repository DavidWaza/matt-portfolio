import React, { Suspense, useRef, useState, useEffect } from "react";
import PortfolioCarousel from "@/components/Carousel";
import ProfilePage from "./profilepage";
import { Grid, Box, Container } from "@mui/material";
import SwiperTestimonial from "@/components/SwiperTestimonial";
import Header from "@/components/reusable/BigHeader";
import ContactInfo from "@/components/ContactInfo";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MobileTestimonial from "@/components/Mobiletestimonial";
import About from "./about";
import Projects from "@/components/Projects";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [isVisible, setVisible] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const domRef = useRef(null);
  const controls = useAnimation();

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e:Event) => {
      console.log(e);
    });

    function raf(time:number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useEffect(() => {
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
      <main>
        <About />
        <div className="bg-[#181818] py-[10rem]">
          <Container>
            <Header
              header="Welcome Note"
              className="uppercase tracking-[.5em] text-center md:text-left font-bold text-[#B5AB99] pt-10"
            />
            <div className="mt-[2vh]">
              <p className="text-[1.3rem] px-7 md:px-0 md:text-[2.8rem] leading-[31.2px] md:leading-[67.4px] avant-semi text-[#B5AB99]">
                Welcome to my versatile portfolio! As your dedicated destination
                for all things remarkable in the realm of rare earth metals,
                quality gemstones, and, most prominently, cutting-edge{" "}
                <span className="text-[#E25F40] font-bold">
                  web development.
                </span>{" "}
                I invite you to explore the brilliance of my work. I am here to
                help you shine online. Let&apos;s join forces to craft your
                digital journey!
                <br />
                <span className="flex justify-center md:justify-end pt-10 md:pt-0 text-[.888rem] md:text-[1.3rem] text-[#E25F40]">
                  Matthew Kolawole
                </span>
              </p>
            </div>
          </Container>
        </div>
        <div>
          <Projects />
        </div>
        <section id="work">
          <Container>
            <div className="mobile-view">
              <Header
                header="Work Profile"
                className="uppercase text-center tracking-[.5em] font-bold text-[#B5AB99] pt-10"
              />
              <PortfolioCarousel />
            </div>
            <div ref={ref}>
              <motion.div
                ref={domRef}
                className={`desktop-view fade-in-section  ${
                  inView ? "is-visible" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
              >
                <ProfilePage />
              </motion.div>
            </div>
          </Container>
        </section>

        <div className="bg-[#181818] py-10">
          <Container>
            <div className="mobile-view">
              <Header
                header="Testimonial"
                className="uppercase text-center tracking-[.5em] font-bold text-[#B5AB99] pt-10"
              />
              <MobileTestimonial />
            </div>
            <div className="desktop-view p-0 m-0">
              <SwiperTestimonial />
            </div>
            <section id="contact">
              <div className="h-full py-[10rem]">
                <motion.div
                  initial={{ opacity: 1, y: 50 }}
                  animate={controls}
                  className={`px-3 md:px-0 `}
                >
                  <Box sx={{ flexGrow: 1 }}>
                    <Header
                      header="get in touch"
                      className=" text-[1.5rem] text-[#B5AB99] text-center md:text-[3.5rem] proxima mt-11 uppercase"
                    />
                    <Header
                      header="Let's get down to Business!"
                      className="text-[1rem] font-normal text-center md:text-[2rem] avant-semi text-[#E25F40]"
                    />
                    <Grid
                      spacing={0}
                      justifyContent="center"
                      alignItems="center"
                      container
                    >
                      <Grid xs={12} md={12} lg={12}>
                        <ContactInfo />
                      </Grid>
                    </Grid>
                  </Box>
                </motion.div>
              </div>
            </section>
          </Container>
        </div>
      </main>
    </>
  );
}
