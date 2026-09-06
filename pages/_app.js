import '../styles/globals.css';
import 'prismjs/themes/prism-tomorrow.css';
import 'katex/dist/katex.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <span className="theme-bejamas" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
