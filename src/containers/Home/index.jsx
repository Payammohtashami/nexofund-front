import React from "react";
import Hero from "./Hero";
import { Box } from "@mui/material";
import HowToWork from "./HowToWork";


const Home = () => {
  return (
    <Box>
        <Hero />
        <HowToWork />
    </Box>
  );
};

export default Home;