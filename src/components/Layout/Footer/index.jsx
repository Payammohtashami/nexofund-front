import React from "react";
import styles from './styles.js';
import Link from "next/link";
import Icon from "components/Icon";
import HeroBackground from "components/Icon/HeroBackground";
import { headerMenu} from "constant/main.js";
import { Box, Stack, Typography } from "@mui/material";

const Footer = () => {
  
  return (
    <footer style={{overflow: 'hidden', paddingTop: '72px'}}>
      <Box sx={styles.planetWrapper}> 
          <Box sx={styles.HeroBackground}>
              <HeroBackground />
              <Box sx={styles.thirdBackgroundLayer} />
              <Box sx={styles.secendBackgroundLayer} />
          </Box>
      </Box>
      <Box className='container'>
            <Stack direction='column' alignItems='center' justifyContent='center' gap='24px' sx={{pb: '48px'}}>
              <Typography variant='h1' component='h1' sx={styles.heroTitle}>nexofund</Typography>
              <Stack direction='row' alignItems='center' gap={{xs: '12px', md:'24px'}}>
                  {headerMenu?.map((item) => (
                      <Link key={item?.id} href={item.url}>
                          <Typography sx={styles.menuItem}>
                              {item.title}
                          </Typography>
                      </Link>
                  ))}
              </Stack>
              <Box sx={styles.logoWrapper}>
                <Icon name='Logo' />
              </Box>
            </Stack>
            
      </Box>
    </footer>
  );
};

export default Footer;
