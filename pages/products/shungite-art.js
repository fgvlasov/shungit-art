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
	const error = products.error;
	const loading = products.loading;

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	return (
		<>
			<h1 className={styles.catalog_title}>Catalog of Shungite Art</h1>
			<div className={styles.catalog}>
				<CatalogMenu />
				<div className={styles.catalog_list}>
					{loading
						? <div>Loading... </div>
						: error
							? <div>Failed to load </div>
							: productsData && productsData.length > 0 && productsData.map((p, i) => {
								if (p.type == 'Shungite Art') {
									return (
										<Product key={i} product={p} />
									);
								}
							})}
				</div>
			</div>
		</>
	);
}