import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import HowToWork from "./Components/HowToWork";
import Statistic from "./Components/Statistic";
import Comment from "./Components/Comment";
import DownloadApp from "./Components/DownloadApp";
import Plans from "./Components/Plans";
import CryptoBubbles from "./Components/CryptoBubbles";
import TotalMarketcap from "./Components/TotalMarketcap";
import Footer from "./Components/Footer";
import Aos from "aos";

const Home = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
        Aos.init({});
    }, []);
    return (
        <>
            <Hero />
            <div className='container mx-auto px-2 xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
                <div className="" style={{maxWidth: 'calc(100vw - 4px)'}}>
                    <HowToWork />
                    <Statistic />
                    <TotalMarketcap />
                    <CryptoBubbles />
                    <Plans /> 
                    <DownloadApp />
                    <Comment />
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Home;