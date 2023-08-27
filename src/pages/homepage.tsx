import React, { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import localFont from "next/font/local";
import Link from "next/link";
import { gsap } from "gsap";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Typewriter from "typewriter-effect";

const myFonts = localFont({ src: "../../public/fonts/Hannari-Regular.ttf" });

const HomePage: React.FC = () => {
  const app = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const { scroll } = useLocomotiveScroll();

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
                <div className="scroll" ref={scroll}>
                  <p
                    className="leading-3 tracking-wider pt-[5rem] text-center md:text-left text-[#D0D3D4] text-[18px]"
                    style={myFonts.style}
                  >
                    Oluwadamilare Kolawole
                  </p>
                  <p
                    className="pt-3 text-[#D0D3D4] text-center md:text-left tracking-wider font-[100]"
                    style={myFonts.style}
                  >
                    Serial Entrepreneur
                  </p>
                </div>

                <div>
                  <div
                    className="pt-20 text-[1.5rem] text-center md:text-left md:text-[3.5rem] text-[burlywood] font-bold"
                    style={myFonts.style}
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
                </div>

                <div className="text-[#D0D3D4] pt-24 justify-center md:justify-start tracking-wider flex animate-pulse">
                  <Link href="/">View Profile</Link>
                  <img
                    src="/assets/right-arrow.png"
                    className="ml-3 cursor-pointer "
                    alt="Right Arrow"
                  />
                </div>
              </div>
            </Grid>
            <Grid item md={5} xs={12}>
              <div ref={app}>
                <div className="lg:border-2 lg:border-solid lg:h-[30rem] lg:border-[burlywood] square "></div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};
export default HomePage;
