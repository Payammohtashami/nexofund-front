import React, { useEffect } from "react";
import { Poppins } from 'next/font/google'

// libs
import Aos from "aos";
import NextNProgress from 'nextjs-progressbar';

// components
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";


const poppins = Poppins({ 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const Layout = ({ Component, pageProps }) => {
    useEffect(() => {
        Aos.init({});
    }, []);
    return (
        <div>
            <NextNProgress color="#2817ED" options={{ easing: "ease",showSpinner: false}} />
            <main className={poppins?.className}>
                {!Component.headerHide ? <Header /> : null}
                <Component {...pageProps} />
                {!Component.footerHide ? <Footer /> : null}
            </main>
        </div>
    );
};

export default Layout;
