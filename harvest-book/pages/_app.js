import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/images/harvest_book_logo.png" />
          <title>Harvest Book</title>
      </Head>
      <Component {...pageProps} />
    </>

  );
}
