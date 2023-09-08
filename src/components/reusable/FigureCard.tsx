import Image from "next/image";
import LinkIcon from "@mui/icons-material/Link";
import Link from "next/link";

interface CardComponentProps {
    link:string,
    img:string,
    title:string,
    subtitle:string
}

const CardComponent:React.FC<CardComponentProps> = (props) => {
  return (
    <>
      <div className="card">
        <div className="description">
          <div className="icon-link">
            <Link href={props.link}>
              <LinkIcon
                sx={{
                  fontSize: "30px",
                  color: "black",
                  transform: "rotate(-30deg)",
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "white",
                    transform: "rotate(30deg)",
                  },
                }}
              />
            </Link>
          </div>
        </div>
        <Image
          width={500}
          height={500}
          src={props.img}
          alt="img-props"
          loading="lazy"
        />
        <p className="text-[#232323] text-small text-center uppercase mt-[10%] font-normal tracking-normal">
          {props.title}
        </p>
        <p className="text-[#939393] text-[12px] uppercase text-center">{props.subtitle}</p>
      </div>
    </>
  );
};
export default CardComponent;
