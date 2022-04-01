import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from "../styles/Header.module.scss"

const path = [
  { uid: 21, name: ' About', id: 1, path: 'About' },
  { uid: 31, name: 'Catalog', id: 2, path: 'Catalog' },
  { uid: 41, name: 'Gallery', id: 3, path: 'Gallery' }
];
export default function Header() {
  return (
	<>
	      <Head>
        <title>Shungite Art</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400,500,700&display=swap" 
		  rel="stylesheet"
        />
      </Head>
      <header className={styles.header}>
		<div className={styles.header_cash}>
			<select className="form-control form-select" id="edit-selected-currency" name="selected_currency">
				<option value="EUR">€</option>
				<option value="USD" selected="selected">$</option>
			</select>
		</div>
	  	<Link className={styles.header_logo} href="/">
		 <a><Image src="/logo_shu.svg" alt="Shungit Art" width={100} height={110} /></a>
	  	</Link>
		<div className={styles.header_cart}>
   			<a href="/cart">Bag: </a>
			<span className="quantity-raw">0</span>
		</div>
	  </header>
	  <nav  className={styles.nav}>
        <ul className="">
          {path.map((value) => {
            return (
              <li className="" key={value.uid}>
                <Link href={value.path}>
                  <a className=""> {value.name} </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
	</>
  );
}
