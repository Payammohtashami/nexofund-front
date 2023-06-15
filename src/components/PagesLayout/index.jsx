import React, { useEffect, useState } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WithErrorHandler from "components/WithErrorHandler";
import Aos from "aos";
import NextNProgress from 'nextjs-progressbar';
import useTheme from "hooks/useTheme";
import { Box, ThemeProvider } from "@mui/material";


const PagesLayout = ({ Component, pageProps }) => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const appTheme = useTheme();
  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    const handleWindowMouseMove = event => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      });
    };
    window.addEventListener('mousemove', handleWindowMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleWindowMouseMove,
      );
    };
  }, []);

  return (
    <WithErrorHandler>
        <NextNProgress color="#2817ED" options={{ easing: "ease",showSpinner: false}} />
        <ThemeProvider theme={appTheme}>
          <Box sx={{
            width: '100%',
            minHeight: '100vh',
            
          }}>
            <Box sx={{position: 'fixed', top: 0, zIndex: 0}}>
              <Box 
                sx={{
                  width: 40,
                  height: 40, 
                  borderRadius: '50%', 
                  border: '1px solid #2817ED', 
                  background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)', 
                  position: 'absolute', 
                  transform: `translateX(${coords.x - 20}px) translateY(${coords.y - 20}px)`,
                  transition: 'all 0.2s ease',
                
                }} 
              />
            </Box>
            {!Component.headerHide ? <Header /> : null}
            <Component {...pageProps} />
            {!Component.footerHide ? <Footer /> : null}
          </Box>
        </ThemeProvider>
    </WithErrorHandler>
  );
};

export default PagesLayout;
