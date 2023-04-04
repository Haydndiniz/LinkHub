// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="LinkHub for sites, projects and status by Haydn Diniz"
        />
        <meta
          name="keywords"
          content="Haydn, haydndiniz, DevOps, PiDeck, Photography, linkHub, CV"
        />
        <link rel="icon" href="/favicon.gif" type="image/gif"/>
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
        <script async src='https://www.googletagmanager.com/gtag/js?id=G-G6T4SKP93W'></script>
        <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G6T4SKP93W');`
            }}
          ></script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
