import React, { useEffect, useState } from "react";
import Link from "next/link";

// components
import Icon from "components/Icon";
import Wallet from "./components/Wallet.jsx";
import Profile from "./components/Profile.jsx";
import { useSelector } from 'react-redux';
import { AppBar, useMediaQuery, Drawer } from "@mui/material";

// constant
import routes from "config/routes.js";
import { headerMenu } from "constant/main.js";

// mui styles
import styles from "./styles.js";
import MobileDrawer from "./components/MobileDrawer.jsx";
import { MenuRounded } from "@mui/icons-material";

const Header = () => {
    // Variable
    const user = useSelector((state) => state?.user?.data);
    const [openMenu, setOpenMenu] = useState(false);
    const [blurHeader, setBlurHeader] = useState();
    const [scrollDirection, setScrollDirection] = useState(null);
    const isMobile = useMediaQuery('(max-width:767px)');
    
    // Effects
    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? "down" : "up";
            if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        }
    }, [scrollDirection]);

    useEffect(() => {
        if (typeof window !== "undefined") {
          window.addEventListener("scroll", () => setBlurHeader(window.scrollY > 75));
        }
    }, []);

    return (
        <header>
            <AppBar
                position="fixed"
                id="main-navbar"
                className="!transition-all !shadow-btn !pt-1 !border-b !border-darkness-500 !backdrop-blur-md !bg-darkness-500/5"
                sx={[scrollDirection === 'up' ? styles.showHeader : blurHeader ? styles.hideHeader : styles.normalHeader]}
            >
                <div className='container mx-auto px-2 xl:max-w-screen-xl top-0 py-2 md:py-2 md:px-0'>
                    {isMobile ? 
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <span onClick={() => setOpenMenu(true)} className="rounded-2xl p-1.5  border border-darkness-300">
                                    <MenuRounded className="text-darkness-100" />
                                </span>
                                <Icon name='Logo' size="42" />
                            </div>
                            {Object.keys(user)?.length > 0 ? 
                                <div className="flex gap-2">
                                    <Wallet />
                                    <Profile />
                                </div>
                                :
                                <div className="flex gap-2">
                                    <Link href={routes.auth.login} className="btn btn-blue items-center !text-base !font-medium flex !rounded-xl !py-0 h-10">
                                        Login
                                    </Link>
                                    <Link href={routes.auth.register} className="btn bg-white items-center !text-base !font-medium flex !rounded-xl !py-0 h-10 !text-darkness-800">
                                        Join us
                                    </Link>
                                </div>
                            }
                        </div>
                        :
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-8">
                                <Icon name='Logo' size="42" />
                                <div className="flex items-center gap-11">
                                    {headerMenu?.map((item) => (
                                        <Link key={item.id} href={item.url} className="text-darkness-100 relative before:bg-primary-400 font-medium animate-underline">
                                            {item.title}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            {Object.keys(user)?.length > 0 ? 
                                <div className="flex gap-4">
                                    <Wallet />
                                    <Profile />
                                </div>
                                :
                                <div className="flex gap-4">
                                    <Link href={routes.auth.login} className="btn btn-blue items-center !text-base !font-medium flex !rounded-xl !py-0 h-10">
                                        Login
                                    </Link>
                                    <Link href={routes.auth.register} className="btn bg-white items-center !text-base !font-medium flex !rounded-xl !py-0 h-10 !text-darkness-800">
                                        Join us
                                    </Link>
                                </div>
                            }
                        </div>
                    }
                </div>
            </AppBar>
            {isMobile && 
                <Drawer
                    anchor='left'
                    open={openMenu}
                    onClose={() => setOpenMenu(false)}
                >
                    <MobileDrawer headerMenu={headerMenu} />
                </Drawer>
            }
        </header>
    );
    };

    export default Header;
