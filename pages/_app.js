import React, { useEffect, useState } from "react";
import App from "next/app";
import Head from "next/head";
import nookies from "nookies";
import PagesLayout from "components/PagesLayout";
import { Provider } from "react-redux";
import { appWithTranslation } from "next-i18next";
import { initializeStore, useStore } from "lib/storeConfig";
import "styles/app.sass";


function MyApp({ Component, pageProps, ...MyAppProps }) {

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


  return (
    <>
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
        <meta name="twitter:description" content="Nexofund , predict it right , get free doge coin" />
      </Head>
      <Provider store={store}>
        <PagesLayout Component={Component} pageProps={pageProps} />
      </Provider>
    </>
  );
}

MyApp.getInitialProps = async ({ ...props }) => {
  let appProps = await App.getInitialProps(props);
  const store = initializeStore();

  appProps.pageProps = {
    ...appProps.pageProps,
    initialReduxState: {
    },
    dispatch: store.dispatch,
  };

  return { ...appProps };
};

export default appWithTranslation(MyApp);
