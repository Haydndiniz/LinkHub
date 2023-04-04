import Head from "next/head";
import "../css/index.css";
import { Analytics } from "@vercel/analytics/react";
// import { hotjar } from 'react-hotjar'
// import { useEffect } from 'react'

// const HJID = 3433831
// const HJSV = 6


function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   hotjar.initialize(HJID, HJSV)
  // }, [])
  return (
    <>
      <Head>
        <title>Haydn | LinkHub</title>
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
