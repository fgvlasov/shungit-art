import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Product.module.scss"

export default function Product({ product }) {
  return (
    <div className={styles.pr}>
	  <Link href="/product/[id]" as={`/product/${product.id}`}>
		<a><Image src={product.image} alt={product.title} width={300} height={300} /></a>
	  </Link>
	  <div className={styles.pr_title}>
		<Link href="/product/[id]" as={`/product/${product.id}`}>
          <a>{product.title}</a>
        </Link>
	  </div>
	  <div className={styles.pr_price}>{product.price}</div>
    </div>
  )
}
