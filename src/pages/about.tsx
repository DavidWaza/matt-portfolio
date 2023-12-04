import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Typewriter from "typewriter-effect";
import PrimaryButton from "@/components/reusable/Button";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="h-[80vh] bg-[#0D0D0D] m-0 p-0 relative">
        <div className="text-center">
          <p className="avant uppercase text-[#B5AB99] font-normal tracking-[.5em] pt-[15vh] pb-[7vh] ">
            Kolawole Matthew <span className="text-[#E25F40] font-bold">Oluwadamilare</span>
          </p>
          <div
            className={` unbound uppercase px-[10vh] md:px-0 text-center text-[1.3rem] md:text-[4.7rem] grid place-content-center text-[#E25F40]`}
          >
            <p className="proxima text-[#B5AB99] text-[2.6rem] md:text-[5.7rem] ">
              The Art of being a {" "}
            </p>
            <Typewriter
              options={{
                strings: [
                  "AI Developer",
                  "Data Engineer",
                  "Software Developer",
                  "Prolific Entrepreneur.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div>
            <Link href="https://drive.google.com/file/d/1qh87vSPr6cgRRdDGAu6DnP5ezlRl217p/view?usp=sharing">
              <h5 className="proxima uppercase tracking-[.5em] text-[#b5ab99] mt-[7vh] cv-download">
                Download CV
              </h5>
            </Link>
          </div>
        </div>
        <div className="px-[5vh] absolute bottom-[10vh]">
          <div className="social-links hidden md:block">
            <div className="mb-7">
              <Link href="#">
                <Image
                  src="/assets/linkedin.svg"
                  width={25}
                  height={30}
                  alt="icon"
                />
              </Link>
            </div>
            <div className="mb-7">
              <Link href="#">
                <Image src="/assets/ig.svg" width={25} height={30} alt="icon" />
              </Link>
            </div>
            <div className="mb-7">
              <Link href="#">
                <Image src="/assets/tw.svg" width={25} height={30} alt="icon" />
              </Link>
            </div>
            <Link href="#">
              <Image src="/assets/fb.svg" width={25} height={30} alt="icon" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
