import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardListItem from "./CardListItem";
import { profession } from "./data";
import Header from "@/components/reusable/BigHeader";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const CardList: React.FC = () => {
  return (
    <Container>
      <div id="profile">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid xs={12} md={6} lg={6}>
              <Header
                header="Work Profile"
                className="mt-10 unbound uppercase text-center md:text-left text-[2rem] tracking-widest text-[burlywood]"
              />
              <Header
                header="A selection of few portfolio"
                className="unbound text-center md:text-left tracking-wide"
              />
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <div className="flex justify-end">
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ flexGrow: 1, marginTop: 7 }}>
          <Grid container spacing={4}>
            {profession.map((profile) => {
              return (
                <AnimatePresence mode="wait" key={profile.id}>
                  <Grid item xs={12} md={6} lg={4}>
                    <CardListItem profession={[profile]} />
                  </Grid>
                </AnimatePresence>
              );
            })}
          </Grid>
        </Box>
      </div>
    </Container>
  );
};
export default CardList;
