import Head from 'next/head';
import 'styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
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
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
