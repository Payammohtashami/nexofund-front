import React from "react";
import styles from './Footer.module.sass';
import { Box, Button, Container, Divider, IconButton, Stack, Typography } from "@mui/material";
import Icon from "components/Icon";
import Link from "lib/Link";
import { headerMenu, socialMedia } from "enum/main";
import HeroBackground from "components/Icon/HeroBackground";

const Footer = () => {
  
  return (
    <footer style={{overflow: 'hidden'}}>

      <Container>
        <Box className={styles.wrapper}>
          <Stack direction='column' alignItems='center' justifyContent='center'  gap='24px' sx={{py: '32px'}}>
            <Box className={styles.divider} />
            <Typography className={styles.title}>
              Join The Team <br /> Of Our Experienced Traders
            </Typography>
            <Stack direction='row' gap='12px'>
              <Button className={styles.blueButton}>Start Premium</Button>
              <Button className={styles.whiteButton}>Free Trial</Button>
            </Stack>
            <Stack direction='row' alignItems='center' gap='24px'>
              {socialMedia?.map((item) => (
                <Box>
                  <IconButton>
                    {/* <Link href={item?.url} target='_blank'> */}
                      <Icon name={item?.name} size='24px' />
                    {/* </Link> */}
                  </IconButton>
                </Box>
              ))}
            </Stack>
            <Box className={styles.divider} />
            </Stack>
        </Box>
      </Container>
      <Box className={styles.planetWrapper}> 
          <Box className={styles.HeroBackground}>
              <HeroBackground />
              <Box className={styles.thirdBackgroundLayer} />
              <Box className={styles.secendBackgroundLayer} />
          </Box>
      </Box>
      <Container>
            <Stack direction='column' alignItems='center' justifyContent='center' gap='24px' sx={{pb: '48px'}}>
              <Typography variant='h1' component='h1' className={styles.heroTitle}>nexofund</Typography>
              <Stack direction='row' alignItems='center' gap='24px'>
                  {headerMenu?.map((item) => (
                      <Link key={item.id} href={item.url}>
                          <Typography className={styles.menuItem}>
                              {item.title}
                          </Typography>
                      </Link>
                  ))}
              </Stack>
              <Box className={styles.logoWrapper}>
                <Icon name='Logo' />
              </Box>
            </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
