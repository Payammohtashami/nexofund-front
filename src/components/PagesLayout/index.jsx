import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import WithErrorHandler from "components/WithErrorHandler";


const PagesLayout = ({ Component, pageProps }) => {

  return (
    <WithErrorHandler>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </WithErrorHandler>
  );
};

export default PagesLayout;
