import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import localFont from "next/font/local";
import Link from "next/link";
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Typewriter from "typewriter-effect";
import PrimaryButton from "@/components/reusable/Button";
import Image from "next/image";
import Tilt from "react-parallax-tilt";

const HomePage: React.FC = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { scroll } = useLocomotiveScroll();

  // const [scale, setScale] = useState(0.15);


  useEffect(() => {
    let ctx = gsap.context(() => {
      tl.current = gsap.timeline().to(".square", { x: 100 });
    }, app);
    return () => ctx.revert();
  }, []);

  return (
    <div className="home-bg">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          paddingTop: "20vh",
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item md={7} xs={12}>
              <div className="justify-center h-[50rem] -mt-[20%] md:mt-0">
                <div>
                  <p
                    className={`leading-3 syne tracking-wider pt-[5rem] text-center md:text-left text-[#D0D3D4] text-[18px] text-index`}
                  >
                    Oluwadamilare Kolawole
                  </p>
                </div>
                <div
                  className={`pt-10 unbound text-[1.5rem] text-center md:text-left md:text-[2.7rem] text-[burlywood] font-bold text-index`}
                >
                  The Business of Being a{" "}
                  <Typewriter
                    options={{
                      strings: [
                        "Photographer.",
                        "Software Developer.",
                        "Merchandiser.",
                        "Serial Entreprenuer.",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
                <div className="syne text-[#D0D3D4] pt-24 justify-center md:justify-start tracking-wider flex  items-center text-index">
                  <Link href="#profile" className="animate-pulse">
                    View Profile
                  </Link>
                  <Image
                    src="/assets/right-arrow.png"
                    className="ml-3 cursor-pointer animate-pulse text-index"
                    alt="Right Arrow"
                    width={20}
                    height={20}
                  />
                  <PrimaryButton
                    text="Download CV"
                    className="ml-[2rem] class-coal font-[500] border-2 p-3 px-10 bg-[burlywood] border-[burlywood] syne mobile-btn hidden text-index"
                  />
                  <a
                    aria-label="Thanks"
                    className="h-button centered syne text-index"
                    data-text="Download cv"
                    href="#"
                  >
                    <span>T</span>
                    <span>h</span>
                    <span>a</span>
                    <span>n</span>
                    <span>k</span>
                    <span>s</span>
                  </a>
                </div>
              </div>
            </Grid>
            <Grid item md={5} xs={12}>
              <div ref={app}>
                <div className="lg:border-2 lg:border-solid lg:h-[29.5rem] lg:border-[burlywood] square text-index desktop-view">
                  <Tilt
                    className="parallax-effect"
                    // scale={scale}
                    transitionSpeed={2500}
                  >
                    <Image
                      alt="matt"
                      src="/assets/mattai2.jpg"
                      width={500}
                      height={500}
                      className='desktop-view tablet-view'
                    />
                  </Tilt>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default HomePage;
