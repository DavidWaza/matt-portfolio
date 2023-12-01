import Image from "next/image";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

const ContactInfo = () => {
  return (
    <>
      <div className="mt-6">
        <p className="Proxima text-[#B5AB99] text-[2rem] text-center md:text-[2.8rem]">
          Contact Info
        </p>
        <p className="avant-semi text-[#B5AB99] text-lg text-center">
          Please contact me for a customized and favorable deal to kickstart
          your venture.
        </p>
      </div>
      <hr className="w-10/12 mt-10 m-auto  bg-[#B5AB99]" />
      <div className="flex justify-center mt-11">
        <LocalPhoneSharpIcon sx={{ color: "#E25F40", fontSize: "2rem" }} />
        <p className="text-[1rem] md:text-[1.3rem] ml-2 avant text-[#B5AB99]">
          +1 (437) 436-4707
        </p>
      </div>
      <div className="flex justify-center mt-11">
        <EmailSharpIcon sx={{ color: "#E25F40", fontSize: "2rem" }} />
        <p className="text-[1rem] md:text-[1.3rem] ml-2 avant text-[#B5AB99]">
          Mattkolawole19@gmail.com
        </p>
      </div>
      <div className="flex justify-center mt-11">
        <LocationOnSharpIcon sx={{ color: "#E25F40", fontSize: "2rem" }} />
        <p className="text-[1rem] md:text-[1.3rem] ml-2 avant text-[#B5AB99]">
          Ontario Canada.
        </p>
      </div>
    </>
  );
};

export default ContactInfo;
