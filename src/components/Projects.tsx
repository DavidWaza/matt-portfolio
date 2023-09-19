import { Container, Box, Grid } from "@mui/material";

const lists = [
  "School Websites",
  "Personal Portfolio",
  "Business Portfolio",
  "Company Landing Page",
  "Other Great Incredible Stuffs",
];

const sides = [
    "Diamonds",
    "Photography",
    "Serial & Wall-Street Investor",
    "E-commerce Merchandizer",
    "Precious Stones & Rare Earth Metals"
]
const Projects = () => {
  return (
    <>
      <div className="bg-[#0d0d0d] p-9">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div className="px-6 py-7">
                  <p className="avant-semi text-[1.6rem] md:text-5xl text-[#B5AB99] text-center md:text-left">
                    I Build & Develope Business Websites from Scratch.
                  </p>
                  <ul className="avant-semi mt-2 md:mt-3 text-[#E25F40] text-xl text-[0.89rem] md:text-xl text-center md:text-left">
                    {lists.map((list, index) => {
                      return <li key={index} className="mt-3">{list}</li>;
                    })}
                  </ul>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
              <div className="px-6 py-7">
                  <p className="avant-semi text-[1.6rem] md:text-5xl text-[#E25F40] text-center md:text-left">
                    I am also Big on Entrepreneurship & Investments
                  </p>
                  <ul className="avant-semi mt-3 text-[#B5AB99]  text-[0.89rem] md:text-xl text-center md:text-left">
                    {sides.map((side, index) => {
                      return <li key={index} className="mt-3">{side}</li>;
                    })}
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
};
export default Projects;
