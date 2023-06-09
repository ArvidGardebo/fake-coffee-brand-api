import Head from "next/head";
import "../styles/slider/sandbox.css";
import "../styles/slider/embla.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
          overflow-x: hidden;
        }
      `}</style>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
        <title>Fake Coffee Api</title>
        <meta
          name="description"
          content="API page that let users get access to data about fake coffee products and information on how to use it"
        />
        <meta property="og:image" content="https://i.imgur.com/5DO1bE3.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
