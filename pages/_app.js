import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from 'app/theme';
import Head from 'next/head';
import 'styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Off the Pulpit Podcast.</title>
        <meta name="description" content="Off the Pulpit Podcast." />

        {/* FACEBOOK */}
        <meta property="og:title" content="Tilt" key="ogTitle" />
        <meta
          property="og:description"
          content="Off the Pulpit Podcast."
          key="ogDescription"
        />
        <meta
          property="og:image"
          content="/offThePulpitPod.png"
          key="ogImage"
        />
        <meta
          property="og:url"
          content="http://offthepulpitpod.com"
          key="ogUrl"
        />

        {/* TWITTER */}
        <meta name="twitter:title" content="Tilt" key="twitterTitle" />
        <meta
          name="twitter:description"
          content="Off the Pulpit Podcast."
          key="twitterDescription"
        />
        <meta
          name="twitter:image"
          content="/offThePulpitPod.png"
          key="twitterImage"
        />
        <meta
          name="twitter:card"
          content="/offThePulpitPod.png"
          key="twitterCard"
        />
        <meta
          property="twitter:url"
          content="http://offthepulpitpod.com"
          key="twitterUrl"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
