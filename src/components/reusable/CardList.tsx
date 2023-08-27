import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardListItem from "./CardListItem";
import { profession } from "./Card";

const CardList: React.FC = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, marginTop: 10 }}>
        <Grid container spacing={2}>
          {profession.map((profile) => {
            return (
              <Grid item xs={12} md={6} lg={4} key={profile.id}>
                <CardListItem profession={[profile]} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};
export default CardList;
