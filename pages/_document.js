import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
          <link rel="icon" sizes="16x16" type="image/png" href="/images/favicon/favicon-16x16.png" />
          <link rel="icon" sizes="32x32" type="image/png" href="/images/favicon/favicon-32x32.png" />
          <link rel="apple-touch-icon" href="/images/favicon/apple-touch-icon.png" />
          <link rel="android-chrome" sizes="512x512" href="/images/favicon/android-chrome-512x512.png" />
          <link rel="android-chrome" sizes="192x192" href="/images/favicon/android-chrome-192x192.png" />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <meta name="theme-color" content="#ffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com/" />
          <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
        </Head>
        <body className={`ltr ${this.props.bodyClass}`}>
          <Main />
          <NextScript />
          <div id="modals"></div>
        </body>
      </Html>
    );
  }
}
