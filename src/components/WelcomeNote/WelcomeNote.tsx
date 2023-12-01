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
            Welcome to my dynamic portfolio! As an accomplished machine language
            developer and skilled web developer, I specialize in crafting
            cutting-edge digital experiences. While my expertise extends to rare
            earth metals and quality gemstones, my primary focus is on
            delivering exceptional{" "}
            <span className="text-[#E25F40] font-bold">web development.</span>{" "}
            Explore the brilliance of my work as we join forces to elevate your
            digital journey!
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
