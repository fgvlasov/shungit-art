import useSWR from 'swr'
import Product from '../../components/product'
import CatalogMenu from '../../components/CatalogMenu'
import styles from "../../styles/Catalog.module.scss"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Products({ product }) {
  const { data, error } = useSWR('/api/cards', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

	return (
	  <>
		<h1 className={styles.catalog_title}>Catalog of Stained glass</h1>
		<div className={styles.catalog}>
			<CatalogMenu />
		  <div className={styles.catalog_list}>

      		{data.map((p, i) => {
        		if(p.type == 'Stained glass'){
				  return (
					<Product key={i} product={p} />
				  )
				}
			  }
			)}

      	</div>
		</div>
	  </>
  )
}