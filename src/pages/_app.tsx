import 'src/styles/globals.scss';
import '@fortawesome/fontawesome-free/css/all.css';
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps):JSX.Element {
  return <Component {...pageProps} />
}

export default MyApp
