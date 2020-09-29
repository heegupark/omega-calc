import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>o-calculator</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="title" content="Fun calculator" />
        <meta name="description" content="Fun calculator" />
        <meta property="og:title" content="o-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calc.heegu.net/" />
        <meta property="og:image" content="../static/images/calc-ss-001.gif" />
        <meta property="og:description" content="Fun calculator" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="shortcut icon"
          type="image/png"
          href="../static/images/o-logo.png"
        />
      </Head>
    </>
  );
}
