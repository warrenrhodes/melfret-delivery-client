import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// const FeaterIcons

/**
 * The main entry point of our web application.
 * @returns The main app component.
 */
function CustomApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <style>@import url(&apos;https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap&apos;);</style>
        <title>Welcome to web-server!</title>
        <style type="text/css">{`
  @font-face {
    font-family: 'MaterialIcons';
    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${require('react-native-vector-icons/Fonts/FonstAwesome.ttf')}) format('truetype');
  }
`}</style>
      </Head>
      <div className="app">
        <header className="flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/nx-logo-white.svg" alt="Nx logo" width="75" height="50" />
          <h1>Welcome to web-server!</h1>
        </header>
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
