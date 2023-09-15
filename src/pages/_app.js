import '@/app/globals.css'
import React from "react";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect;
    }

    return (
        <>
            <title>Arthur Website</title>
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="description" content="Arthur Website" />
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
                <link rel="icon" sizes="32x32" href="/favicon.ico" />
                <link rel="icon" sizes="16x16" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}