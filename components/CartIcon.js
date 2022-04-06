import store from '../store/store'

export default function CartIcon(props) {
	
	function select(state) {
  		return state.total
	}
	//totalInCart = select(store.getState())
	//console.log(totalInCart)

    return (
		<div className="header_cart">
   			<a href="/cart">Bag: </a>
        	<span className="quantity-raw">
				{/*надо тут вывести количество добавленных в корзину товаров, то есть state.total*/}
	            {props.length ? <span>{props.length}</span> : 0}
        	</span>
		</div>
    );
}