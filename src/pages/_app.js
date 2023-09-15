import '@/app/globals.css'
import React from "react";

export default function MyApp({ Component, pageProps }) {

    if (typeof document === 'undefined') {
        React.useLayoutEffect = React.useEffect;
    }

    return (
        <Component {...pageProps} />
    )
}