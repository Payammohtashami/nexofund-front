import React from "react";
import Hero from "./Hero";
import { Box, Container } from "@mui/material";
import HowToWork from "./HowToWork";
import Statistic from "./Statistic";
import Comment from "./Comment";
import DownloadApp from "./DownloadApp";
import Plans from "./Plans";
import CryptoBubbles from "./CryptoBubbles";


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