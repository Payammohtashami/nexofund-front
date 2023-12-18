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
        <div className={`${poppins.className} bg-darkness-600`}>
            <NextNProgress color="#2817ED" options={{ easing: "ease",showSpinner: false}} />
            <main className="w-full min-h-screen">
                {!Component.headerHide ? <Header /> : null}
                <Component {...pageProps} />
                {!Component.footerHide ? <Footer /> : null}
            </main>
        </div>
    );
};

export default Layout;
