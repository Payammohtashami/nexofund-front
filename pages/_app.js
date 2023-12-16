import Head from "next/head";

// components
import Layout from "components/Layout";
import { Toaster } from "react-hot-toast";

// providers
import ThemeRegistery from '../src/theme/ThemeRegistery';
import { QueryClient, QueryClientProvider } from "react-query";

// css styles
import "theme/css/styles.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
    const queryClient = new QueryClient();
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
            </Head>
            <QueryClientProvider client={queryClient}>
                <ThemeRegistery>
                    <Layout {...{Component, pageProps}} />
                    <Toaster position="top-right" />
                </ThemeRegistery>
            </QueryClientProvider>
        </>
    );
}

export default MyApp;
