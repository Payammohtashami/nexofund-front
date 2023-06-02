import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WithErrorHandler from "components/WithErrorHandler";
import Aos from "aos";
import useTheme from "hooks/useTheme";
import { ThemeProvider } from "@mui/material";


const PagesLayout = ({ Component, pageProps }) => {
  const appTheme = useTheme();
  useEffect(() => {
    Aos.init({})
  }, []);
  return (
    <WithErrorHandler>
        <ThemeProvider theme={appTheme}>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    </WithErrorHandler>
  );
};

export default PagesLayout;
