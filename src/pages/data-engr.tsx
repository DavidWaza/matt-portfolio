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
       
       
      </section>
    </div>
  );
};
export default Photography;
