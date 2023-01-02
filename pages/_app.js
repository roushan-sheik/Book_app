import '../styles/globals.css';
import { Fragment } from 'react';
import Header from '../components/Header';

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Header/>
      <Component {...pageProps} />
    </Fragment>
  );
}
