import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function CartIcon(props) {

	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const items = cart.cart;

	return (
		<>
			<Link href="/cart">Cart:</Link>&nbsp;
			<span className="quantity-raw">
				{/*надо тут вывести количество добавленных в корзину товаров, то есть state.total*/}
				{items.length ? <span>{items.length}</span> : 0}
			</span>
		</>
	);
}