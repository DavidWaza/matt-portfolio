import { Container, Box, Grid } from "@mui/material";
import { webDev, entre } from "./data";
import Link from "next/link";

const sides = [
  "Diamonds",
  "Photography",
  "Serial & Wall-Street Investor",
  "E-commerce Merchandizer",
  "Precious Stones & Rare Earth Metals",
];
const Projects = () => {
  return (
    <>
      <div className="bg-[#0d0d0d] p-9 py-[10rem]">
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} lg={6}>
                <div className=" bg-[#DA6445] p-10 hover:scale-105 hover:transition-all hover:ease-in duration-300 delay-150">
                  <p className="avant-semi text-[1.6rem] md:text-8xl text-[#1D232A] text-center md:text-left">
                    I Build
                  </p>
                  <br />
                  <p className="avant-semi text-[1.6rem] md:text-4xl text-[#1D232A] text-center md:text-left">
                    & design stuffs
                  </p>
                  <ul className="grid lg:grid-cols-2 avant-semi mt-2 md:mt-3 text-[#1D232A] text-xl text-[0.89rem] md:text-xl">
                    {webDev.map((list, index) => {
                      return (
                        <div key={index} className="flex gap-2 my-4">
                          <img src={list.src} className="w-6 h-6" />
                          <p className="font-normal">{list.name}</p>
                        </div>
                      );
                    })}
                  </ul>
                  <Link href={"/#"}>
                    <button className="w-full py-7 text-center text-[#DA6445] bg-black mt-7 hover:bg-transparent ease-in hover:text-black duration-300 hover:border-2 border-black">
                      Show Portfolio
                    </button>
                  </Link>
                </div>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <div className=" bg-[#B4AB9A] p-10 hover:scale-105 hover:transition-all hover:ease-in duration-300 delay-150">
                  <p className="avant-semi text-[1.6rem] md:text-8xl text-[#1D232A] text-center md:text-left">
                    Prolific Investor
                  </p>
                  <br />
                  <p className="avant-semi text-[1.6rem] md:text-4xl text-[#1D232A] text-center md:text-left">
                    & Entrepreneur
                  </p>
                  <ul className=" grid lg:grid-cols-2 w-full avant-semi mt-3 text-[#1D232A] text-[0.89rem] md:text-xl">
                    {entre.map((side, index) => {
                      return (
                        <div key={index} className="flex gap-2 my-[7px]">
                          <img src={side.src} className="w-6 h-6" />
                          <p className="font-normal">{side.name}</p>
                        </div>
                      );
                    })}
                  </ul>
                  <Link href={"/#"}>
                    <button className="w-full py-7 text-center text-[#B4AB9A] bg-black mt-7 hover:bg-transparent ease-in hover:text-black duration-300 hover:border-2 border-black">
                      Investment opportunities
                    </button>
                  </Link>
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
