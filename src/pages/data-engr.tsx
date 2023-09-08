import Banner from "@/components/reusable/Banner";
import CardComponent from "@/components/reusable/FigureCard";
import ProfileDetails from "@/components/reusable/ProfileDetails";
import styles from "@/styles/profile.module.css";
import { Container, Grid, Box } from "@mui/material";

const Photography = () => {
  return (
    <div>
      <Banner
        title="Software Development & Data Engineering"
        className={styles.data_engr_img}
      />
      <ProfileDetails
        body="Holistic Brand redevelopment, interface design, studio photograph, icon
        design, editorial design & motion design"
      />
      <Container>
        <div className="text-center pt-[8rem] pb-[4.5rem]">
          <p className="uppercase text-[18px]">Our recent works</p>
          <p className="text-[2rem] md:text-[3.5rem] unbound">
            New stunning projects for our amazing clients.
          </p>
        </div>
        <div className="px-0 md:px-[20px]">
        <Box sx={{ flexGrow: 1, mt: 5, mb: 5 }}>
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
        
      </Container>
    </div>
  );
};
export default Photography;
