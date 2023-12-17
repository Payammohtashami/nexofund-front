import React from "react";
import Link from "next/link";

// contants
import { headerMenu } from "constant/main.js";

// components
import Icon from "components/Icon";
import HeroBackground from "components/Icon/HeroBackground";
import { FuturaFont } from "theme/LocalFonts.js";

const Footer = () => {
    return (
        <footer className="overflow-hidden pt-20">
            <div className="relative -z-0"> 
                <span
                    className="absolute w-80 h-80 top-0 -right-32 rounded-full blur-2xl" 
                    style={{background: 'radial-gradient(circle, rgba(38,44,198,1) 65%, rgba(39,57,201,1) 70%, rgba(52,203,236,1) 100%)'}}
                ></span>
                <span 
                    className="absolute w-80 h-80 top-0 -right-32 rounded-full" 
                    style={{background: 'radial-gradient(circle, rgba(8,7,26,1) 24%, rgba(19,17,55,1) 40%, rgba(21,18,59,1) 46%, rgba(22,20,64,1) 58%, rgba(27,22,101,1) 62%, rgba(37,29,193,1) 70%, rgba(36,146,226,1) 80%)'}}
                ></span>
                <HeroBackground classname='absolute w-80 h-80 top-0 -right-32 rotate-[120deg]' />
            </div>
            <div className='container z-10 relative mx-auto px-2 xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
                <div className="flex flex-col items-center justify-center gap-6 pb-12">
                    <h6 className={`${FuturaFont.className} text-darkness-100 tracking-[20px] font-bold text-center mb-6`}>NEXOFUND</h6>
                    <div className="flex items-center gap-4 md:gap-6">
                        {headerMenu?.map((item) => (
                            <Link key={item?.id} href={item.url} className="text-darkness-100 text-xs md:text-base">
                                {item.title}
                            </Link>
                        ))}
                    </div>
                    <Icon name='Logo' className="w-12 h-12" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
