// import useSWR from 'swr';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product';
import CatalogMenu from '../../components/CatalogMenu';
import { loadProducts } from '../../store/actions';

import styles from "../../styles/Catalog.module.scss";

// const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Products() {
	// const { data, error } = useSWR('/api/cards', fetcher)
	const dispatch = useDispatch();
	const products = useSelector(state => state.products);
	const productsData = products.products;
	const isLoaded = products.isLoaded;

	useEffect(() => {
		!isLoaded && dispatch(loadProducts());
	}, [isLoaded, dispatch]);

	return (
		<>
			<h1 className={styles.catalog_title}>Catalog of Shungite Art</h1>
			<div className={styles.catalog}>
				<CatalogMenu />
				<div className={styles.catalog_list}>
					{!isLoaded
						? <div>Loading... </div>
						: productsData && productsData.length > 0 && productsData.map(product => {
							if (product.type == 'Shungite Art') {
								return (
									<Product key={product.id} product={product} />
								);
							}
						})}
				</div>
			</div>
		</>
	);
}