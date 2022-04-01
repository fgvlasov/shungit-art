import Link from 'next/link'

export default function Product({ product }) {
  return (
    <li>
      <Link href="/product/[id]" as={`/product/${product.id}`}>
        <a>{product.title}</a>
      </Link>
    </li>
  )
}
