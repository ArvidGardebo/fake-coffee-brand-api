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
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
