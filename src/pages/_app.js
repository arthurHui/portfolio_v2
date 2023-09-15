import '@/app/globals.css'
import React from "react";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect;
    }

    return (
        <>
            <Head>
                <title>Arthur Hui</title>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
                <meta name="description" content="Arthur is a full stask developer. I am excited to showcase my projects and share my passion for web development through this portfolio website." />
                <link rel="shortcut icon" href="/images/favicon.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
                <link rel="icon" sizes="32x32" href="/images/favicon.png" />
                <link rel="icon" sizes="16x16" href="/images/favicon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}