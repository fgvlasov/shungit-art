import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../store/actions';
import Product from '../components/product'
import styles from "../styles/Catalog.module.scss"


const Cart = () => {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	//const items = cart.cart;
	const items = cart.cart.filter(
		(value, index, self) =>
  			index === self.findIndex((t) => (
    		t.id === value.id && t.title === value.title
  			)
		)
	);

	useEffect(() => {
		dispatch(loadCart());
	}, [dispatch]);

	return (
		<div className={styles.catalog}>
			<h1>List of Products in your cart</h1>
			<div className={styles.catalog_list}>
      			{items.length > 0 && items.map((p, i) => {
				  return (
					<Product key={i} product={p} />
				  )
			  	}
			  )}
			</div>
		</div >
	);
};

export default Cart;