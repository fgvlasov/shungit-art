import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import CartIcon from './CartIcon'
import styles from "../styles/Header.module.scss"

const path = [
  { uid: 21, name: ' About', id: 1, path: '/about' },
  { uid: 31, name: 'Products', id: 2, path: '/products' },
  { uid: 41, name: 'Gallery', id: 3, path: '/gallery' }
];
export default function Header() {
  return (
	<>
	  <Head>
        <title>Shungite Art</title>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
	
      </Head>
      <header className={styles.header}>
		<div className={styles.header_cash}>
			cash
		</div>
	  	<Link className={styles.header_logo} href="/">
		 <a><Image src="/logo_shu.svg" alt="Shungit Art" width={100} height={110} /></a>
	  	</Link>
		<CartIcon />
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
