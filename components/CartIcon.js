export default function CartIcon(props) {
    return (
		<div className="header_cart">
   			<a href="/cart">Bag: </a>
        	<span className="quantity-raw">
	            {props.length ? <span>{props.length}</span> : 0}
        	</span>
		</div>
    );
}