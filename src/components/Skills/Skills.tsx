import React from "react";
import { Grid, Box, Container } from "@mui/material";
import Image from "next/image";

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

const Skills = () => {
  return (
    <div className="bg-[#000]">
      <Container>
        <div className="py-[8rem] text-center">
          <p className="text-[#B5AB99] text-[2rem] avant-semi mb-3">
            Dev.Skills & <span className="avant text-[#E25F40]">Tools</span>
          </p>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {skills.map((skill, index) => {
                return (
                  <Grid item xs={12} md={4} lg={4} key={index}>
                    <div className="mt-9 flex justify-center">
                      <div className=" transform  transition-all duration-3000 ease-in-out hover:scale-110">
                        <Image
                          src={skill.image}
                          width={100}
                          height={100}
                          alt="props"
                        />
                      </div>
                    </div>
                    <div className=" mt-[1.3rem]">
                      <p className=" text-2xl avant-semi text-[#B5AB99]">
                        {skill.name}
                      </p>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
};

export default Skills;
