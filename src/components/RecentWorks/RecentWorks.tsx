import { Box, Container, Grid } from "@mui/material";
import React from "react";
import CardComponent from "../reusable/FigureCard";

const RecentWorks = () => {
  return (
    <div>
      <Container>
        <div className="px-0 md:px-[20px]">
          <div className="text-center">
            <p className="uppercase md:text-[1.6rem] text-[#E25F40]">
              Our recent works
            </p>
            <p className="text-[2rem] md:text-[3.5rem] avant text-[#B5AB99]">
              New stunning projects for our amazing clients.
            </p>
          </div>
          <Box sx={{ flexGrow: 1, mb: 5 }}>
            <Grid container spacing={2}>
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
    </div>
  );
};

export default RecentWorks;
