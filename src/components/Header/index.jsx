import React, { useEffect, useState } from "react";
import cn from "classnames";
import Icon from "components/Icon";
import Link from "lib/Link";
import styles from "./Header.module.sass";
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
                className={cn(styles.wrapper, blurHeader ? styles.blurHeader : '')}
                position="fixed"
                id="main-navbar"
                sx={{
                    boxShadow: "none",
                    background: 'none',
                    maxWidth: "100vw",
                    py: 2
                }}
            >
                <Container>
                    <Stack direction='row' justifyContent='space-between'>
                        <Stack direction='row' alignItems='center' gap='32px'>
                            <Box className={styles.logoWrapper}>
                                <Icon name='Logo' />
                            </Box>
                            <Stack direction='row' alignItems='center' gap='44px'>
                                {headerMenu?.map((item) => (
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
