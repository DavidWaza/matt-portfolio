import Image from "next/image";
import LocalPhoneSharpIcon from "@mui/icons-material/LocalPhoneSharp";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

const ContactInfo = () => {
  return (
    <>
      <div className="mt-6">
        <p className="Proxima text-[#B5AB99] text-[2rem] text-center md:text-left md:text-[2.5rem]">Contact Info</p>
        <p className="avant text-[#B5AB99] text-lg text-center md:text-left">
          Reach out to our team, we will definitely cook the best deal to help
          you get started.
        </p>
      </div>
      <hr className="w-10/12 mt-5 m-auto md:mt-5 md:ml-0" />
      <div className="flex mt-11">
        <LocalPhoneSharpIcon sx={{ color: "#E25F40", fontSize: "2rem" }} />
        <p className="text-[1.3rem] md:text-[1.5] ml-2 avant text-[#B5AB99]">+1 (437) 436-4707</p>
      </div>
      <div className="flex mt-11">
        <EmailSharpIcon sx={{ color: "#E25F40", fontSize: "2rem" }} />
        <p className="text-[1.3rem] md:text-[1.5] ml-2 avant text-[#B5AB99]">
          Damilarekolawole@gmail.com
        </p>
      </div>
      <div className="flex mt-11">
        <LocationOnSharpIcon sx={{ color: "#E25F40", fontSize: "2rem" }} />
        <p className="text-[1.3rem] md:text-[1.5] ml-2 avant text-[#B5AB99]">
          Number 12 Ontario Street, Ontario Canada.
        </p>
      </div>
    </>
  );
};

export default ContactInfo;
