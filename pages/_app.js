import React, { useEffect, useState } from "react";
import Head from "next/head";
import theme from 'hooks/useTheme';
import PagesLayout from "components/PagesLayout";
import createEmotionCache from 'utility/createEmotionCache';
import { wrapper } from '../src/redux/store';
import { CacheProvider } from "@emotion/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider, CssBaseline } from '@mui/material';
import "styles/app.css";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache, ...MyAppProps }) {

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);


  return (
    <>
        <CacheProvider value={emotionCache}>
            <Head>
                <meta charSet="UTF-8" key="charset" />
                <title>Nexofund</title>
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                <meta name="theme-color" content="#2817ED" />
                <meta name="msapplication-navbutton-color" content="#2817ED" />
                <meta name="apple-mobile-web-app-status-bar-style" content="#2817ED" />
                <meta name="twitter:card" content="" />
                <meta name="twitter:site" content="@Nexofund" />
                <meta name="twitter:app:id:googleplay" content="Nexofund" />
                <meta name="twitter:creator" content="Nexofund" />
                <meta name="twitter:title" content="Nexofund" />
            </Head>
            <ThemeProvider theme={theme}>
                <ParallaxProvider>
                    <CssBaseline />
                    <Toaster />
                    <PagesLayout Component={Component} pageProps={pageProps} />
                </ParallaxProvider>
            </ThemeProvider>
        </CacheProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
