import Link from 'next/link'
import { Slide } from "react-slideshow-image"
import 'react-slideshow-image/dist/styles.css'
import useSWR from 'swr'
import Product from '../components/product'
import styles from "../styles/Pages.module.scss"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Products({ product }) {
  const { data, error } = useSWR('/api/cards', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const style = {
    textAlign: 'center',
    background: 'teal',
    padding: '-30px 0px',
    fontSize: '30px'
  };

  const properties = {
    duration: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    indicators: true,
	responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ]	
  };
	return (
	  <div className={styles.slider}>
		<div className={styles.slider_title}>Sale</div>
        <Slide {...properties}>
      		{data.map((p, i) => {
        		if(i <= 20 && p.sale == '1'){
				  return (
					<Product key={i} product={p} />
				  )
				}
			  }
			)}
	    	{/*<div style={style}>First Slide</div>*/}
        </Slide>
      </div>
  )
}