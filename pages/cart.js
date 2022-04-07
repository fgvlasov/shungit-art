import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

import { loadCart } from '../store/actions';
import Product from '../components/product';
import styles from "../styles/Catalog.module.scss";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const items = cart.items;
	const totalPrice = cart.totalPrice;

	useEffect(() => {
		dispatch(loadCart());
	}, [dispatch]);

	return (
		<div className={styles.catalog}>
			<h1>List of Products in your cart</h1>
			<div className={styles.catalog_list}>
				{items.length > 0
					? items.map((p, i) => {
						return (
							<Product key={i} product={p} buttons={false} />
						);
					})
					: (
						<div>
							<p>No items in your cart yet</p>
							<Link href="/products">Go to shop</Link>
						</div>
					)
				}
			</div>
			{items.length > 0 &&
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<p>Total price:</p>
					<p style={{ color: 'green', fontWeight: 'bold', marginLeft: '0.5rem' }}>{totalPrice}</p>
				</div>
			}
		</div >
	);
};

export default Cart;