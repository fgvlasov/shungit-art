import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Product.module.scss"

export default function Product({ product }) {

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
	  <div to="/" className={styles.pr_item_add} onClick={()=>{this.handleClick(product.id)}}>add</div>
    </div>
  )
}

