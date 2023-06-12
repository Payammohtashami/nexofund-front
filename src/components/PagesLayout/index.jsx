import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WithErrorHandler from "components/WithErrorHandler";
import Aos from "aos";
import NextNProgress from 'nextjs-progressbar';
import useTheme from "hooks/useTheme";
import { Box, ThemeProvider } from "@mui/material";
import { enablePageScroll } from "scroll-lock";


const PagesLayout = ({ Component, pageProps }) => {
  const appTheme = useTheme();
  useEffect(() => {
    Aos.init({});
    enablePageScroll()
  }, []);
  return (
    <WithErrorHandler>
        <NextNProgress color="#2817ED" options={{ easing: "ease",showSpinner: false}} />
        <ThemeProvider theme={appTheme}>
          <Box sx={{
            width: '100%',
            minHeight: '100vh',
            
          }}>
            {!Component.headerHide ? <Header /> : null}
            <Component {...pageProps} />
            {!Component.footerHide ? <Footer /> : null}
          </Box>
        </ThemeProvider>
    </WithErrorHandler>
  );
};

export default PagesLayout;
