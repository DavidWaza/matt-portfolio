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
        <p className="z-10 upper text-[#B5AB99] relative text-center top-[50%] proxima text-[3rem]">
          {props.title}
        </p>
        <div className="flex justify-center relative z-10 top-[55%] gap-3">
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
