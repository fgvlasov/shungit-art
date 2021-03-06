import React from 'react'
import { wrapper } from "../store/store";
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    	<Layout>
      		<Component {...pageProps} />
    	</Layout>
  )
}
export default wrapper.withRedux(MyApp);