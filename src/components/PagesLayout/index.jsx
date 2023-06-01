import React, { useEffect } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WithErrorHandler from "components/WithErrorHandler";
import Aos from "aos";


const PagesLayout = ({ Component, pageProps }) => {
  useEffect(() => {
    Aos.init({})
  }, [])
  return (
    <WithErrorHandler>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </WithErrorHandler>
  );
};

export default PagesLayout;
