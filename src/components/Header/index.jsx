import React from "react";
import Icon from "components/Icon";
import Link from "lib/Link";
import styles from "./Header.module.sass";
import { AppBar, Box, Button, Container, Stack, Typography } from "@mui/material";

const Header = () => {
    const homeNavbar = [
        {
            id: 'menu-1',
            title: 'Home',
            url: '#',
        },
        {
            id: 'menu-2',
            title: 'Statistics',
            url: '#',
        },
        {
            id: 'menu-3',
            title: 'Market',
            url: '#',
        },
        {
            id: 'menu-4',
            title: 'How it works?',
            url: '#',
        },
    ];
    return (
        <header>
            <AppBar
                position="fixed"
                id="main-navbar"
                sx={{
                    boxShadow: "none",
                    background: 'none',
                    maxWidth: "100vw",
                }}
            >
                <Container>
                    <Stack className={styles.wrapper} direction='row' justifyContent='space-between'>
                        <Stack direction='row' alignItems='center' gap='32px'>
                            <Box className={styles.logoWrapper}>
                                <Icon name='Logo' />
                            </Box>
                            <Stack direction='row' alignItems='center' gap='44px'>
                                {homeNavbar?.map((item) => (
                                    <Link key={item.id} href={item.url}>
                                        <Typography className={styles.menuItem}>
                                            {item.title}
                                        </Typography>
                                    </Link>
                                ))}
                            </Stack>
                        </Stack>
                        <Stack direction='row' gap='16px'>
                            <Button className={styles.whiteButton}>Login</Button>
                            <Button className={styles.blueButton}>join us</Button>
                        </Stack>
                    </Stack>
                </Container>
            </AppBar>
        </header>
    );
    };

    export default Header;
