import Banner from "@/components/reusable/Banner";
import CardComponent from "@/components/reusable/FigureCard";
import styles from "@/styles/profile.module.css";
import { Container, Grid, Box } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import IntegrationCard from "@/components/reusable/Integration";
import Marquee from "react-fast-marquee";
import AnimateSlider from "@/components/Animate";
import Image from "next/image";
import Link from "next/link";

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
const Photography = () => {
  return (
    <div>
      <Banner
        title="Software Development & Data Engineering"
        className={` ${styles.data_engr_img}`}
      />
      <Container>
        <div className="text-center pt-[8rem] pb-[4rem]">
          <p className="uppercase md:text-[18px] text-[#E25F40]">
            Our recent works
          </p>
          <p className="text-[2rem] md:text-[3.5rem] avant text-[#B5AB99]">
            New stunning projects for our amazing clients.
          </p>
        </div>
        <div className="px-0 md:px-[20px]">
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
        {/* <Box sx={{ flexGrow: 1, mb: 5, mt: 10 }}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
              <p className="uppercase unbound text-[2rem]">integration</p>
              <p className="unbound text-[1.4rem] mt-2">
                {" "}
                We’re experts in integrating all major software platforms, apps
                and digital tools to make your websites, products and campaigns
                run smoother and easier then ever.
              </p>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <div className=" bg-[burlywood] h-full py-[15%]">
                <Marquee>
                  <IntegrationCard src="/assets/google.png" />
                  <IntegrationCard src="/assets/uber.png" />
                  <IntegrationCard src="/assets/github.png" />
                  <IntegrationCard src="/assets/wp.png" />
                  <IntegrationCard src="/assets/js.png" />
                  <IntegrationCard src="/assets/linkedin.png" />
                </Marquee>
              </div>
            </Grid>
          </Grid>
        </Box> */}
        {/* <AnimateSlider /> */}
      </Container>
      <section className="bg-[#0d0d0d] py-[5rem]">
        <Container>
          <div className="text-[2rem] md:text-left text-center">
            <p className="avant-semi text-[#B5AB99]">
              Featured <span className="avant text-[#E25F40]">Projects</span>
            </p>
          </div>
          <div className="md:py-[6rem]">
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={3}>
                {data.map((datum) => {
                  return (
                    <>
                      <Grid item xs={12} md={6} lg={6} key={datum.id}  sx={{mt:12}}>
                        <img
                          src={datum.img}
                          className="w-full"
                          alt="img"
                          loading="lazy"
                        />
                      </Grid>
                      <Grid item xs={12} md={6} lg={6}  sx={{mt:12}}>
                        <div className="text-center -mt-[5rem] md:-mt-0">
                          <p className="avant text-2xl text-[#B5AB99]">
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
                                <p className="avant-semi ml-3 text-[#B5AB99]">
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
                                <p className="avant-semi ml-3 text-[#B5AB99]">
                                  {datum.service}
                                </p>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>
                        <div className="pt-7">
                          <p className="text-[#B5AB99] avant-semi  ">
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
                                <p className="avant-semi ml-3 text-[#E25F40]">
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
        </Container>
      </section>
    </div>
  );
};
export default Photography;
