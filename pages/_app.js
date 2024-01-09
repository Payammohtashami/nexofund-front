import Head from "next/head";
import { Poppins } from 'next/font/google'

// libs & components
import store from 'feature/store';
import NextNProgress from 'nextjs-progressbar';
import { Toaster } from "react-hot-toast";

// providers
import ThemeRegistery from 'theme/ThemeRegistery';
import { Provider } from 'react-redux';

// css styles
import "theme/css/styles.css";
import "aos/dist/aos.css";

const poppins = Poppins({ 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
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
            <ThemeRegistery>
                <div className={poppins?.className}>
                    <NextNProgress color="#2817ED" />
                    <Component {...pageProps} />
                </div>
                <Toaster position="top-right" />
            </ThemeRegistery>
        </Provider>
    );
}

export default MyApp;
