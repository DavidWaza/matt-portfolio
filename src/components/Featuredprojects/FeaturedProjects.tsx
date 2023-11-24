import React from "react";
import { Box, Grid, Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import WorkTimeline from "../WorkTimeline/WorkTimeline";

const data = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1694787399/bhc_rbi8ps.png",
    title: "Beloved Healthcare Services",
    location: "Canada",
    service: "Health-Care Services",
    about: ` Beloved Healthcare Services is a compassionate and
      dedicated provider of home health care services, committed
      to enhancing the quality of life for individuals who are
      unable to care for themselves. Our team of skilled and
      caring professionals understands the unique needs of our
      clients and strives to create a nurturing and supportive
      environment within the comfort of their own homes.`,
    link: "https://belovehealthcare.com/",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dgbl43ljm/image/upload/v1694787399/cig-about_auvukk.png",
    title: "Cleveland International Group",
    location: "Canada",
    service: "Precious Stones",
    about: `Cleveland Group. is your premier destination for the transformation of raw, uncut gemstones into exquisite finished products that radiate timeless beauty and elegance. With a passion for the rare and the exceptional, we specialize in the art of refining precious stones, unlocking their true potential, and creating stunning jewelry pieces that captivate the senses.`,
    link: "https://clevelandintgroup.com/",
  },
];



const FeaturedProjects = () => {
  return (
    <Container>
      <div className="text-[2rem] md:text-left text-center">
        <p className="avant-semi text-[#B5AB99]">
          Featured <span className="avant text-[#E25F40]">Projects</span>
        </p>
      </div>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {data.map((datum) => {
              return (
                <>
                  <Grid
                    item
                    xs={12}
                    md={6}
                    lg={6}
                    key={datum.id}
                    sx={{ mt: 12 }}
                  >
                    <img
                      src={datum.img}
                      className="w-full"
                      alt="img"
                      loading="lazy"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={6} sx={{ mt: 12 }}>
                    <div className=" -mt-[5rem] md:-mt-0">
                      <p className="avant text-3xl text-[#B5AB99]">
                        {datum.title}
                      </p>
                    </div>
                    <Box
                      sx={{
                        flexGrow: 1,
                        pt: 4,
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item xs={6} sm={6} lg={6}>
                          <div className="flex">
                            <Image
                              src="/assets/data-loc.svg"
                              width={25}
                              height={50}
                              alt="icon-loc"
                            />
                            <p className="avant-semi ml-3 text-[#B5AB99] text-[1.4rem]">
                              {datum.location}
                            </p>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6} lg={6}>
                          <div className="flex justify-center">
                            <Image
                              src="/assets/data-mark.svg"
                              width={25}
                              height={50}
                              alt="icon-loc"
                            />
                            <p className="avant-semi ml-3 text-[#B5AB99] text-[1.4rem]">
                              {datum.service}
                            </p>
                          </div>
                        </Grid>
                      </Grid>
                    </Box>
                    <div className="pt-7">
                      <p className="text-[#B5AB99] avant-semi text-[1.3rem]">
                        {datum.about}
                      </p>
                      <div>
                        <Link href={datum.link}>
                          <div className="flex justify-center mt-7">
                            <Image
                              src="/assets/data-links.svg"
                              width={25}
                              height={50}
                              alt="icon-loc"
                            />
                            <p className="avant-semi ml-3 text-[#E25F40] text-xl">
                              View projects
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </div>
      <div className="mt-[3rem] py-[8rem]">
        <p className="text-[#B5AB99] text-[2rem] avant-semi my-6">
          Work <span className="avant text-[#E25F40]">Experiences</span>
        </p>
        <WorkTimeline
          timeline="March 2017 - October 2017"
          company="Nigerian National Petroleum Corporation (NNPC) Towers"
          role="Intern Network Engineer"
        >
          <p className="mt-5">
            Worked in the department of telecom and networking as an intern, my
            job was to run system maintenance and to be standby for any error
            with the network connection, system malfunction or software error
            for the PPMC building in the NNPC headquarters and I had a team of
            interns that worked with me as the head of interns in telecom and
            network department .
          </p>
        </WorkTimeline>
        <br />
        <br />
        <WorkTimeline
          timeline=" November 2016 - March 2017"
          company=" Centrifuge group Solution"
          role="Intern software Developer"
        >
          <p className="mt-5">
            Wrote clean, clear, and well-tested code for various projects.
            Ensured that bug reports were remedied, and all issues were handled
            in a timely manner. Collaborated with other developers to identify
            and alleviate the number of bugs in the software. Led a team of 3
            developers in the analysis and rebuild of software from the ground
            up through to completion. Developed the company&apos;s website at
            https://www.centrifugegroup.com/ .
          </p>
        </WorkTimeline>
        <br />
        <br />
        <WorkTimeline
          timeline="November 2018 - October 2019"
          company="Personal Photographer, Assembly"
          role="Visual Aide"
        >
          <p className="mt-5">
            Worked directly with the Speaker of the oyo state house of
            assembly(Rt Hon Debo Ogundoyin) and the office of the Executive
            Governor of Oyo state (Gov Engr Seyi Makinde ) to achieve a well
            packaged and presentable media front and capture the very essential
            moment in the government so as to bring awareness to the people on
            the accomplishment of the government and to capture all aspect of
            life of the people of Oyo state to create awareness to the
            government on the impact of the decisions they make to the people
            bringing to the spotlight on what needs to be done next
          </p>
        </WorkTimeline>
      </div>
    </Container>
  );
};

export default FeaturedProjects;
