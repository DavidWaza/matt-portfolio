import Banner from "@/components/reusable/Banner";
import CardComponent from "@/components/reusable/FigureCard";
import styles from "@/styles/profile.module.css";
import { Container, Grid, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Accordion from "@/components/Accordion";

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

const skills = [
  {
    image: "/assets/AWS.svg",
    name: "AWS Cloud",
  },
  {
    image: "/assets/Database.svg",
    name: "MySQL",
  },
  {
    image: "/assets/Git.svg",
    name: "Version Control",
  },
  {
    image: "/assets/Github.svg",
    name: "GitHub",
  },
  {
    image: "/assets/Python.svg",
    name: "Python",
  },
  {
    image: "/assets/React.svg",
    name: "React js & React Native",
  },
];
const Photography = () => {
  return (
    <div>
      <Banner
        title="Software Development & Data Engineering"
        className={` ${styles.data_engr_img}`}
      />
      <Container>
        <div className="text-center pt-[8rem]">
          <p className="uppercase md:text-[1.6rem] text-[#E25F40]">
            Our recent works
          </p>
          <p className="text-[2rem] md:text-[3.5rem] avant text-[#B5AB99]">
            New stunning projects for our amazing clients.
          </p>
        </div>
        <div className="px-0 md:px-[20px] py-[9rem]">
          <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={4}>
                <CardComponent
                  link="https://belovehealthcare.com/"
                  img="https://res.cloudinary.com/dgbl43ljm/image/upload/v1694787401/beloved_omnf70.png"
                  title="Beloved Health-Care Service"
                  subtitle="Healthcare Services"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <CardComponent
                  link="https://clevelandintgroup.com/"
                  img="https://res.cloudinary.com/dgbl43ljm/image/upload/v1694787759/cig-hero_bccrvl.png"
                  title="Cleveland International Group"
                  subtitle="Diamond Groups"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <CardComponent
                  link="#"
                  img="https://res.cloudinary.com/dgbl43ljm/image/upload/v1693312968/frontend_gvubtj.jpg"
                  title="Beloved Health-Care Service"
                  subtitle="Healthcare Services"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
      <section className="bg-[#0d0d0d] py-[15rem]">
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
            <Accordion />
          </div>
        </Container>
        <div className="bg-[#000]">
          <Container>
            <div className="py-[15rem] text-center">
              <p className="text-[#B5AB99] text-[2rem] avant-semi mb-3">
                Dev.Skills & <span className="avant text-[#E25F40]">Tools</span>
              </p>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                  {skills.map((skill, index) => {
                    return (
                      <Grid item xs={4} md={4} lg={4} key={index}>
                        <div className="mt-9 flex justify-center">
                          <div className=" transform  transition-all duration-3000 ease-in-out hover:scale-110">
                            <Image
                              src={skill.image}
                              width={100}
                              height={100}
                              alt="props"
                            />
                          </div>
                        </div>
                        <div className=" mt-[1.3rem]">
                          <p className=" text-2xl avant-semi text-[#B5AB99]">
                            {skill.name}
                          </p>
                        </div>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};
export default Photography;
