import { useDispatch, useSelector } from 'react-redux';
import { loadCart, addItem, removeItem } from '../store/actions';

export default function CartIcon(props) {

	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	const items = cart.cart;

    return (
		<div className="header_cart">
   			<a href="/cart">Bag: </a>
        	<span className="quantity-raw">
				{/*надо тут вывести количество добавленных в корзину товаров, то есть state.total*/}
	            {items.length ? <span>{items.length}</span> : 0}
        	</span>
		</div>
    );
}