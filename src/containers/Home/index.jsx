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

const styles = {
  active: {
    transform: 'translateY(0) scale(1)',
    opacity: 1,
    position: 'absolute',
  },
  before: {
    transform: 'translateY(-80%) scale(1) rotate3d(1,0,0,-60deg)',
    opacity: 0,
    position: 'absolute',
  },
  after: {
    transform: 'translateY(80%) scale(1) rotate3d(1,0,0,60deg)',
    opacity: 0,
    position: 'absolute',
  }
};

const Home = () => {
  const [activeSection, setActiveSection] = useState(1)

  // useEffect(() => {
  //   let lastScrollY = window.pageYOffset;
  //   const updateScrollDirection = () => {
  //       const scrollY = window.pageYOffset;
  //       const lastActivePlan = activeSection;
  //       if (lastActivePlan !== activeSection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
  //         setTimeout(() => {
  //           console.log({scrollY, direction}, 'Iam Here');
  //           setActiveSection(activeSection + 1)
  //         }, 1000)
  //       } else {
  //         return () => {
  //             window.removeEventListener("scroll", updateScrollDirection);
  //         }
  //       }
  //   };
  //   window.addEventListener("scroll", updateScrollDirection);
  // }, [activeSection]);


  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, []);

  return (
    <Box 
    // sx={{
    //   position: 'relative', 
    //   minHeight: '100vh',
    //   'section': {
    //       position: 'absolute',
    //       width: '100%',
    //       height: '100%',
    //       display: 'flex',
    //       alignItems: 'center',
    //       top: 0,
    //       left: 0,
    //       zIndex: 5,
    //       transition: '1s',
    //       transitionTimingFunction: 'ease',
    //       overflow: 'hidden',
    //       '&::before': {
    //         content: "''",
    //         position: 'absolute',
    //         width: '60%',
    //         height: '70%',
    //         bottom: '-10%',
    //         left: '25%',
    //         zIndex: -1,
    //         '-webkit-border-radius': '50% 50% 0 0',
    //         '-moz-border-radius': '50% 50% 0 0',
    //         borderRadius: '50% 50% 0 0',
    //         '-webkit-filter': 'blur(70px)',
    //         filter: 'blur(70px)',
    //         background: '#000000e0',
    //       }
    //     }
    //   }}
    >
      {/* <Box component='section' sx={activeSection === 1 ? styles.active : styles.after}> */}
        <Hero setActiveSection={setActiveSection} />
      {/* </Box> */}
      <Box className='container'>
        {/* <Box component='section' sx={activeSection === 2 ? styles.active : activeSection > 2 ? styles.before : styles.after}> */}
          <HowToWork />
        {/* </Box> */}
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