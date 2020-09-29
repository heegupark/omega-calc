import React from 'react';
import Head from 'next/head';

export default function IndexPage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>o-note</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
        <meta name="title" content="Fun note" />
        <meta name="description" content="Fun note" />
        <meta property="og:title" content="o-note" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://note.heegu.net/" />
        <meta property="og:image" content="../static/images/note-ss-001.gif" />
        <meta property="og:description" content="Fun note" />
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
