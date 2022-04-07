import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Product.module.scss";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/actions';
import { loadCart } from '../store/actions';

export default function Product({ product }) {

	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	
	useEffect(() => {
		dispatch(loadCart());
	}, [dispatch]);

	return (
		<div className={styles.pr_item}>
			<Link href="/product/[id]" as={`/product/${product.id}`}>
				<a><Image src={product.image} alt={product.title} width={320} height={320} /></a>
			</Link>
			<div className={styles.pr_item_title}>
				<Link href="/product/[id]" as={`/product/${product.id}`}>
					<a>{product.title}</a>
				</Link>
			</div>
			<div className={styles.pr_item_price}>$ {product.price}</div>
			{cart.cart.includes(product)
				? <button className={styles.pr_item_add} onClick={() => dispatch(removeItem(product.id))}>Remove {product.id}</button>
				: <button className={styles.pr_item_add} onClick={() => dispatch(addItem(product))}>Add to cart</button>
			}
		</div>
	);
}