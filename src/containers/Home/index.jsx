import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import HowToWork from "./Components/HowToWork";
import Statistic from "./Components/Statistic";
import Comment from "./Components/Comment";
import DownloadApp from "./Components/DownloadApp";
import Plans from "./Components/Plans";
import CryptoBubbles from "./Components/CryptoBubbles";
import TotalMarketcap from "./Components/TotalMarketcap";
import Footer from "./Components/Footer";
import { Box, Container } from "@mui/material";

const Home = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, []);

  return (
    <Box>
      <Hero />
      <Box className='container'>
        <HowToWork />
        <Statistic />
        <TotalMarketcap />
        <CryptoBubbles />
        <Plans />
        <DownloadApp />
        <Comment />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;