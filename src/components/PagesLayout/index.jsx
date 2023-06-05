import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WithErrorHandler from "components/WithErrorHandler";
import Aos from "aos";
import NextNProgress from 'nextjs-progressbar';
import useTheme from "hooks/useTheme";
import { ThemeProvider } from "@mui/material";


const PagesLayout = ({ Component, pageProps }) => {
  const appTheme = useTheme();
  useEffect(() => {
    Aos.init({})
  }, []);
  return (
    <WithErrorHandler>
        <NextNProgress color="#2817ED" options={{ easing: "ease",showSpinner: false}} />
        <ThemeProvider theme={appTheme}>
            {!Component.headerHide ? <Header /> : null}
            <Component {...pageProps} />
            {!Component.footerHide ? <Footer /> : null}
        </ThemeProvider>
    </WithErrorHandler>
  );
};

export default PagesLayout;
