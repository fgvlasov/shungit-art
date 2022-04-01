import Link from "next/link";
import styles from "../styles/Footer.module.scss"

export default function Footer() {
  return (
    <footer className={styles.footer}>
		<div id="footer_col_1" className={styles.footer_left}>
		  <div className={styles.footer_title}>
			  <Link href="/"><a>About</a></Link>
			</div>
		  <p>The main idea of creating ornaments is the use of natural materials.</p>
		  <Link href="/about"><a>Read more</a></Link>
		</div>
		<div id="footer_col_2" className={styles.footer_right}>
			<div className={styles.footer_title}>
				<Link href="/contacts"><a>Contacts</a></Link>
			</div>
			<div className={styles.footer_link}><Link href="mailto:contact@shuart.com"><a>Email</a></Link></div>
			<div className={styles.footer_link}><Link href="tel:+79110541274"><a>+7&nbsp;911&nbsp;054 12 74</a></Link></div>
		</div>
		<div id="footer_col_3" className={styles.footer_right}>
			<div className={styles.footer_title}><Link href="/help"><a>Help</a></Link></div>
			<div className={styles.footer_link}><Link href="/payment"><a>Payment</a></Link></div>
			<div className={styles.footer_link}><Link  href="/terms-use"><a>Terms of use</a></Link></div>
			<div className={styles.footer_link}><Link  href="/shipping-return" className="active-trail active"><a>Shipping &amp; return</a></Link></div>
		</div>
		<div id="footer_col_4" className={styles.footer_right}>
			<div className={styles.footer_title}><Link href="/social"><a>Social</a></Link></div>
			<div className={styles.footer_link}><Link href="http://instagram.com" target="_blank"><a>Instagram</a></Link></div>
			<div className={styles.footer_link}><Link href="http://youtube.com" target="_blank"><a>Youtube</a></Link></div>
		</div>
    </footer>
  );
}
