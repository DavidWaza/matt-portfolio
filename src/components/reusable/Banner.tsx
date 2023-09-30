import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

interface BannerProps {
  title: string;
  className: string;
}

const socialIcons = {};

const Banner: React.FC<BannerProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <p className="z-10  avant upper text-[#B5AB99] relative text-center top-[35%] md:top-[50%]  md:text-[3rem] lg:text-[4rem] text-[1.8rem] px-[4rem] md:px-0">
          {props.title}
        </p>
        <div className="flex justify-center relative z-10 top-[40%] md:top-[55%] gap-3">
          <Link href={"/"}>
            <TwitterIcon />
          </Link>
          <Link href={"/"}>
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </>
  );
};
export default Banner;
