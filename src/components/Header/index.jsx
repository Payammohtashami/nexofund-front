import React, { useEffect, useState } from "react";
import Icon from "components/Icon";
import Link from "lib/Link";
import styles from "./styles.js";
import { headerMenu } from "enum/main";
import { AppBar, Box, Button, Container, Stack, Typography } from "@mui/material";
import routes from "enum/routes.js";

const Header = () => {
    // Variable
    const [scrollDirection, setScrollDirection] = useState(null);
    const [blurHeader, setBlurHeader] = useState();
    
    // Functions
    
    
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
                sx={[styles.wrapper, scrollDirection === 'up' ? styles.showHeader : blurHeader ? styles.hideHeader : styles.normalHeader]}
            >
                <Container>
                    <Stack direction='row' justifyContent='space-between'>
                        <Stack direction='row' alignItems='center' gap='32px'>
                            <Box sx={styles.logoWrapper}>
                                <Icon name='Logo' />
                            </Box>
                            <Stack direction='row' alignItems='center' gap='44px'>
                                {headerMenu?.map((item) => (
                                    <Link key={item.id} href={item.url}>
                                        <Typography sx={styles.menuItem}>
                                            {item.title}
                                        </Typography>
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack direction='row' gap='16px'>
                            <Button sx={styles.whiteButton}>
                                <Link href={routes.auth.login}>Login</Link>
                            </Button>
                            <Button sx={styles.blueButton}>
                                <Link href={routes.auth.register}>join us</Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </AppBar>
        </header>
    );
    };

    export default Header;
