import useSWR from 'swr'
import styles from "../styles/Pages.module.scss"
import Layout from '../components/layout'
import Product from '../components/product'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Page() {
  const { data, error } = useSWR('/api/cards', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
	return (
  <>
      <div className={styles.grid}>
        <h1 className={styles.title}> SHUNGIT </h1>
        <p className={styles.paragraf}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
		    <ul>
      {data.map((p, i) => (
        <Product key={i} product={p} />
      ))}
    </ul>
    </>
  )
}

Page.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}