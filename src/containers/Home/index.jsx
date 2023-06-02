import React from "react";
import Hero from "./Components/Hero";
import { Box, Container } from "@mui/material";
import HowToWork from "./Components/HowToWork";
import Statistic from "./Components/Statistic";
import Comment from "./Components/Comment";
import DownloadApp from "./Components/DownloadApp";
import Plans from "./Components/Plans";
import CryptoBubbles from "./Components/CryptoBubbles";


const Home = () => {
  return (
    <Box>
        <Hero />
        <Container>
          <HowToWork />
          <Statistic />
          <CryptoBubbles />
          <Plans />
          <DownloadApp />
          <Comment /> 
        </Container>
    </Box>
  );
};

export default Home;