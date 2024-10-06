import React, { useEffect, useState} from 'react';
import { Layout } from '../Components';
import 'tailwindcss/tailwind.css'
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>)
}

export default MyApp;