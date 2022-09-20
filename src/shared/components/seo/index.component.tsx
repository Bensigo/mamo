import React from 'react';
import Head from 'next/head'

export default function Seo() {
    return (
        <Head>
        <title>Mamo Pay</title>
        <meta name="description" content="Send, receive, and request money from your phone contacts. It’s instant. It’s secure. It’s Mamo!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
}