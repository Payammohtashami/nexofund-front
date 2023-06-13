import React, { useEffect, useState } from "react";
import Icon from "components/Icon";
import Link from "lib/Link";
import styles from "./styles.js";
import routes from "enum/routes.js";
import { headerMenu } from "enum/main";
import { AppBar, Box, Button, Container, Menu, MenuItem, Stack, Typography } from "@mui/material";

const Header = () => {
    // Variable
    const user = true;
    const [scrollDirection, setScrollDirection] = useState(null);
    const [blurHeader, setBlurHeader] = useState();
    const [open, setOpen] = useState(false);
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };
    const handleClose = () => {
        setOpen(null);
    };
    
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
                <Box className='container'>
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
                        {user ? 
                        <Stack direction='row' gap='16px'>
                            <Box>
                                <Button
                                    id="basic-button"
                                    sx={styles.gradinetButton}
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Stack direction='row' alignItems='center' gap='6px' py={1.2} sx={styles.walletButton}>
                                        <Icon name='Wallet' size='20px'  />
                                        <Typography>Wallet</Typography>
                                        <Icon name='KeyboardArrowDown' size='24px' />
                                    </Stack>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={open}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    sx={styles.menuWrapper}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>

                            <Box>
                                <Button
                                    id="basic-button"
                                    sx={styles.blueButton}
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                >
                                    <Stack direction='row' alignItems='center' gap='6px' py={1.2}>
                                        <Icon name='profileUserButton' size='20px'  />
                                        <Typography>Profile</Typography>
                                        <Icon name='KeyboardArrowDown' size='24px' />
                                    </Stack>
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={open}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                    sx={styles.menuWrapper}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                        </Stack>
                        :
                        <Stack direction='row' gap='16px'>
                            <Button sx={styles.whiteButton}>
                                <Link href={routes.auth.login}>Login</Link>
                            </Button>
                            <Button sx={styles.blueButton}>
                                <Link href={routes.auth.register}>Join us</Link>
                            </Button>
                        </Stack>
                        }
                    </Stack>
                </Box>
            </AppBar>
        </header>
    );
    };

    export default Header;
