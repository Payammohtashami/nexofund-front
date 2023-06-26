import React, { useEffect, useState } from "react";
import App from "next/app";
import Head from "next/head";
import nookies from "nookies";
import PagesLayout from "components/PagesLayout";
import createEmotionCache from 'utility/createEmotionCache';
import theme from 'hooks/useTheme';
import { Provider } from "react-redux";
import { CacheProvider } from "@emotion/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { appWithTranslation } from "next-i18next";
import { initializeStore, useStore } from "lib/storeConfig";
import { ThemeProvider, CssBaseline } from '@mui/material';
import "styles/app.css";
import "aos/dist/aos.css";

const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache, ...MyAppProps }) {

  let mergedStore = { ...pageProps.initialReduxState, ...pageProps.initialStore };
  let store = useStore(mergedStore);
  // ------------------------------------------------------- handle show Accept cookie component
  const [showCookies, setShowCookies] = useState(false);
  const cookies = nookies.get();
  const handleAccept = () => {
    nookies.set(null, "acceptCookies", true, { path: "/" });
    setShowCookies(false);
  };

  useEffect(() => {
    !cookies.acceptCookies && setShowCookies(true);
  }, []);

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
        <Provider store={store}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <ParallaxProvider>
                  <PagesLayout Component={Component} pageProps={pageProps} />
              </ParallaxProvider>
            </ThemeProvider>
        </Provider>
      </CacheProvider>
    </>
  );
}

MyApp.getInitialProps = async ({ ...props }) => {
  let appProps = await App.getInitialProps(props);
  const store = initializeStore();

  return { ...appProps };
};

export default appWithTranslation(MyApp);
