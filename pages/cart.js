import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart, addItem } from '../store/actions';
import Image from 'next/image';

import styles from "../styles/Cart.module.scss";

const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const items = cart.cart;

	useEffect(() => {
		dispatch(loadCart());
	}, [dispatch]);

	const newItem = {
		id: items.length,
		title: `Some fucking item #${items.length}`,
		price: "48.00",
		sale: "1",
		type: "Shungite Art",
		body: "Some body here",
		colors: "Colors here",
		materials: "shungite, tin, mineral glass, birch leaf",
		parameters: "30х20x5",
		image: "/Product_display_images/Shungite Birch Leaf v1.jpg"
	};

	return (
		<div className={styles.cart}>
			<h1>List of Products in your cart</h1>
			<div style={{ display: 'flex', alighItems: 'center', justifyContent: 'space-between' }}>
				<button
					onClick={() => dispatch(addItem(newItem))}
					style={{ backgroundColor: 'green', color: '#fff', marginTop: '0.5rem', marginBottom: '0.5rem', padding: '0.5rem' }}
				>
					Add Item
				</button>
				<p>Total items:&nbsp;
					<span style={{ color: 'green' }}>{items.length}</span>
				</p>
			</div>
			{
				items.length > 0 && items.map(({ id, title, image, price }) => {
					return (
						<div key={id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
							<div>
								<p>{title}</p>
								<p>{price} $</p>
							</div>
							<div>
								<Image src={image} alt={title} width={75} height={75} />
							</div>
						</div>
					);
				})
			}
		</div >
	);
};

export default Cart;