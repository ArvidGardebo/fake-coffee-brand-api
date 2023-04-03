import Head from "next/head";

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
        {" "}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{" "}
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
