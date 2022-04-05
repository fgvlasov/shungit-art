import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import styles from "../../styles/Product.module.scss"
import React from 'react'


const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function Product() {
  const { query } = useRouter()
  const { data, error } = useSWR(
    () => query.id && `/api/cards/${query.id}`,
    fetcher
  )

  if (error) return <div>sss{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
	 <div className={styles.pr}>
	  <Image src={data.image} alt={data.title} width={320} height={320} />
	  <div className={styles.pr_title}>
		{data.title}
	  </div>
	  <div className={styles.pr_price}>$ {data.price}</div>
	 </div>

  )
}
