import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadCart } from '../store/actions'

import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/Cart.module.scss"

export default function Page() {
	const dispatch = useDispatch();
	const cart = useSelector(state => state.cart);
	//console.log(cart);

	useEffect(() => {
		dispatch(loadCart());
	}, [dispatch]);

	return (
      <div className={styles.cart}>
		<h1>List of Products in your cart</h1>
      </div>

  )
}