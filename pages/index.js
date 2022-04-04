import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Pages.module.scss"
import Layout from '../components/layout'
import Products from '../components/ProductSlider'

import React from 'react'
import cartReducer from '../components/reducers/cartReducer'
import { Provider } from 'redux'
import { createStore } from 'redux'

const store = createStore(cartReducer);

export default function Page() {
	return (
  <>
      <div className={styles.main_links}>
        <div className={styles.main_links_type}>
			<Link href="/products/shungite-art">
		 		<a><Image src="/cat_1.jpg" alt="Shungit Art" width={300} height={300} /></a>
	  		</Link>
			<div className={styles.main_links_title}><Link href="/type/shungite-art">Shungite Art</Link></div>
			<div className={styles.main_links_starting}>Starting at $25</div>
		</div>
        <div className={styles.main_links_type}>
			<Link href="/products/shungite-models">
		 		<a><Image src="/cat_shungite.jpg" alt="Shungit Models" width={300} height={300} /></a>
	  		</Link>
			<div className={styles.main_links_title}><Link href="/type/shungite-models">Shungite Models</Link></div>
			<div className={styles.main_links_starting}>Starting at $20</div>
		</div>
        <div className={styles.main_links_type}>
			<Link href="/products/stained-glass">
		 		<a><Image src="/12.jpg" alt="Stained glass" width={300} height={300} /></a>
	  		</Link>
			<div className={styles.main_links_title}><Link href="/type/stained-glass">Stained glass</Link></div>
			<div className={styles.main_links_starting}>Starting at $20</div>
		</div>
      </div>
	  <Products />
    </>
  )
}


Page.getLayout = function getLayout(page) {
  return (
    <Provider store={store}>
		<Layout>
			{page}
	  	</Layout>
	</Provider>
  )
}