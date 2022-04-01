import styles from "../styles/Pages.module.scss"
import Layout from '../components/layout'

export default function Page() {
  return (
  <>
      {/* use head and add meta tag in head component  */}

      {/* use layout and add other ui component  */}

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