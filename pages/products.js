import { useState } from 'react'
import useSWR from 'swr'
import Product from '../components/product'
import CatalogMenu from '../components/CatalogMenu'
import styles from "../styles/Catalog.module.scss"


export default function Products({ product }) {
  
  const fetcher = (url) => fetch(url).then((res) => res.json())

  // https://swr.vercel.app/ru/docs/pagination
  const [pageIndex, setPageIndex] = useState(8);
  const { data, error } = useSWR('/api/cards?page=${pageIndex}', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

	return (
	  <>
		<h1 className={styles.catalog_title}>Catalog of Products</h1>
		<div className={styles.catalog}>
		  <CatalogMenu />
		  <div className={styles.catalog_list}>
      		{data.map((p, i) => {
				  return (
					<Product key={i} product={p} />
				  )
			  }
			)}
			<button onClick={() => setPageIndex(pageIndex - 1)}>Назад</button>
    		<button onClick={() => setPageIndex(pageIndex + 1)}>Вперёд</button>
      	  </div>
		</div>
	  </>
  )
}