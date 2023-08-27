import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tilt from "react-parallax-tilt";
import localFont from "next/font/local";

interface CardListItemProps {
  profession: Profile[];
}

const myFonts = localFont({ src: "../../../public/fonts/Hannari-Regular.ttf" });

const CardListItem: React.FC<CardListItemProps> = ({ profession }) => {
  const [scale, setScale] = useState(1.15);
  return (
    <>
      {profession.map((profile) => (
        <div className="img-container " key={profile.id}>
          <div className="img-hover">
            <Tilt
              className="parallax-effect"
              scale={scale}
              transitionSpeed={2500}
            //   perspective={500}
            >
              <figure>
                <img src={profile.img} />
                {/* <p
                  className="img-text-parallax"
                  style={myFonts.style}
                >
                  {profile.title}
                </p> */}
              </figure>
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
