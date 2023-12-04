import React from "react";
import Header from "../reusable/BigHeader";

const WelcomeNote = () => {
  return (
    <div>
      <Header
        header="Welcome Note"
        className="uppercase tracking-[.5em] text-center md:text-left font-bold text-[#B5AB99] pt-10"
      />
      <div className="mt-[2vh]">
        <p className="text-[1.3rem] px-7 md:px-0 md:text-[2.8rem] leading-[31.2px] md:leading-[67.4px] avant-semi text-[#B5AB99]">
          <q>
            Explore a portfolio curated for innovation, driven by <span className='text-[#DA6445]'>AI and Data
            Engineering expertise</span>. As a seasoned machine language developer and
            proficient web developer, my core strengths converge on crafting
            cutting-edge digital experiences. Join me in transforming your
            digital journey with precision and flair
          </q>

          <br />
          <span className="flex justify-center md:justify-end pt-10 md:pt-0 text-[.888rem] md:text-[1.3rem] text-[#E25F40]">
            Matthew Kolawole
          </span>
        </p>
      </div>
    </div>
  );
};

export default WelcomeNote;
