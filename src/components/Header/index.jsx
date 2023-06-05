import React, { useEffect, useState } from "react";
import Icon from "components/Icon";
import Link from "lib/Link";
import styles from "./styles.js";
import { headerMenu } from "enum/main";
import { AppBar, Box, Button, Container, Stack, Typography } from "@mui/material";

const Header = () => {
    // Variable
    const [blurHeader, setBlurHeader] = useState();

    // Functions


    // Effects
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
                sx={[styles.wrapper, blurHeader ? styles.blurHeader : {}]}
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
                                <Link href='/auth/login'>Login</Link>
                            </Button>
                            <Button sx={styles.blueButton}>
                                <Link href='/auth/register'>join us</Link>
                            </Button>
                        </Stack>
                    </Stack>
                </Container>
            </AppBar>
        </header>
    );
    };

    export default Header;
