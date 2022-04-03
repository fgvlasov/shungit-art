import CatLink from './CatalogLink'
import styles from "../styles/Catalog.module.scss"

export default function CatalogMenu() {
  return (
	<div className={styles.catalog_filter}>
			  <div className={styles.catalog_filter_title}>Categories of products</div>
			
			  <div className={styles.catalog_filter_item}>
				  <CatLink href={'/products'}><a>All</a></CatLink></div>
			  <div className={styles.catalog_filter_item}>
				  <CatLink href={'/products/shungite-art'}><a>Shungite Art</a></CatLink></div>
			  <div className={styles.catalog_filter_item}>
				  <CatLink href={'/products/shungite-models'}><a>Shungite models</a></CatLink></div>
			  <div className={styles.catalog_filter_item}>
				  <CatLink href={'/products/stained-glass'}><a>Stained glass</a></CatLink></div>
		  </div>
  )
}