import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardListItem from "./CardListItem";
import { profession } from "./data";
import Header from "@/components/reusable/BigHeader";
import { AnimatePresence } from "framer-motion";

const CardList: React.FC = () => {
  return (
    <Container>
      <div id="profile">
        <Header
          header="Work Profile"
          className="mt-10 unbound uppercase text-center md:text-left text-[2rem] tracking-widest text-[burlywood]"
        />
        <Header
          header="A selection of few portfolio"
          className="unbound text-center md:text-left tracking-wide"
        />
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
