import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tilt from "react-parallax-tilt";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

// interface CardListItemProps {
//   profession: Profile[];
// }

const myFonts = localFont({ src: "../../../public/fonts/Hannari-Regular.ttf" });

const CardListItem = ({ profession }: { profession: any }) => {
  const [scale, setScale] = useState(1.15);
  return (
    <>
      {profession.map((profile: any) => (
        <div className="img-container " key={profile.id}>
          <div className="img-hover">
            <Tilt
              className="parallax-effect"
              scale={scale}
              transitionSpeed={2500}
              //   perspective={500}
            >
              <Link href={profile.link}>
                <figure>
                  <Image
                    alt={profile.title}
                    src={profile.img}
                    width={410}
                    height={410}
                    loading="lazy"
                  />
                  {/* <p
                  className="img-text-parallax"
                  style={myFonts.style}
                >
                  {profile.title}
                </p> */}
                </figure>
              </Link>

              <div
                data-scroll
                data-scroll-speed="0.3"
                className={`img-text poppins ${profile.class}`}
                style={myFonts.style}
              >
                {profile.title}
              </div>
            </Tilt>
          </div>
        </div>
      ))}
    </>
  );
};
export default CardListItem;
