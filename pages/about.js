import styles from "../styles/Pages.module.scss"

export default function Page() {
  return (
  <>
      <div className={styles.page_text}>
        <h1 className={styles.title_h1}>About</h1>
        	<p className={styles.paragraf}>The main idea of creating ornaments is the use of natural materials.</p>
			<p className={styles.paragraf}>First, this is shungite, the most unique rock, which was formed even in the Precambrian period. According to many researchers, the age of shungite deposits can reach 2 billion years!</p>
			<p className={styles.paragraf}>Besides aesthetic beauty, the stone has fantastic healing properties: it helps to heal from diseases, strengthens health, rejuvenates, and is even used in beauty products.</p>
			<p className={styles.paragraf}>Rejuvenating and healing properties of schungite are confirmed by studies of scientists. It turns out that shungite contains molecules-antioxidants (fullerenes) which are very effective in combating aggressive free radicals that destroy living cells of the body.</p>
			<p className={styles.paragraf}>Also, in the process of creating our jewelry, we use dried plants collected in our Karelian forests. Flowers and leaves are collected at a specific season time and kept in special conditions, which preserves them a long time.</p>
			<p className={styles.paragraf}>Today, the use of dried plants is very popular - they can be found in pictures, postcards, panels, and albums. They're used in house decorations for creating the mood of the room. Herbarium - beauty, timeless.</p>
			<p className={styles.paragraf}>The combination of the beauty of nature and its useful properties, gives our products uniqueness and originality that will allow you to stand out against the background of your friends.</p>
      </div>
    </>
  )
}