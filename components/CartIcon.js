import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function CartIcon(props) {
	const cart = useSelector(state => state.cart);
	const items = cart.items;
	const count = items.reduce((acc, obj) => {
		return acc + obj.quantity;
	}, 0);

	return (
		<>
			<Link href="/cart">Cart:</Link>&nbsp;
			<span className="quantity-raw">
				{/*надо тут вывести количество добавленных в корзину товаров, то есть state.total*/}
				{items.length ? <span>{count}</span> : 0}
			</span>
		</>
	);
}