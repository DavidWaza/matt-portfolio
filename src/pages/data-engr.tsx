import Banner from "@/components/reusable/Banner";
import CardComponent from "@/components/reusable/FigureCard";
import ProfileDetails from "@/components/reusable/ProfileDetails";
import styles from "@/styles/profile.module.css";
import { Container, Grid, Box } from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import IntegrationCard from "@/components/reusable/Integration";
import Marquee from "react-fast-marquee";
import AnimateSlider from "@/components/Animate";

const Photography = () => {
  return (
    <div>
      <Banner
        title="Software Development & Data Engineering"
        className={styles.data_engr_img}
      />
      <ProfileDetails body="We dream Digital. we deliver high-performance websites, campaigns and design to global clients" />
      <Container>
        <div className="text-center pt-[8rem] pb-[4rem]">
          <p className="uppercase text-[18px]">Our recent works</p>
          <p className="text-[2rem] md:text-[3.5rem] unbound">
            New stunning projects for our amazing clients.
          </p>
          <StarsIcon
            sx={{
              color: "white",
              fontSize: "3rem",
              mt: "40px",
              // animation: "rotate 4s linear infinite",
            }}
          />
        </div>
        <div className="px-0 md:px-[20px]">
          <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} lg={4}>
                <CardComponent
                  link="https://belovehealthcare.com/"
                  img="/assets/beloved.png"
                  title="Beloved Health-Care Service"
                  subtitle="Healthcare Services"
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <CardComponent
                  link="https://clevelandintgroup.com/"
                  img="/assets/cig.png"
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
        <AnimateSlider />
      </Container>
    </div>
  );
};
export default Photography;
