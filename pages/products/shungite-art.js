import useSWR from 'swr'
import Product from '../../components/product'
import CatalogMenu from '../../components/CatalogMenu'
import styles from "../../styles/Catalog.module.scss"

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../components/actions/cartActions'

const fetcher = (url) => fetch(url).then((res) => res.json())

function Products({ product }) {
//export default function Products({ product }) {
  const { data, error } = useSWR('/api/cards', fetcher)
    
  handleClick = (id)=>{
        this.props.addToCart(id); 
    }

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
	
  let itemList = this.props.items.map(item=>{
        return(
				<>
      		{data.map((p, i) => {
        		if(p.type == 'Shungite Art'){
				  return (
					<Product key={i} product={p} />
				  )
				}
			  }
			)}
			</>
			            )
        })
	return (
	  <>
		<h1 className={styles.catalog_title}>Catalog of Shungite Art</h1>
		<div className={styles.catalog}>
			<CatalogMenu />
		  <div className={styles.catalog_list}>

 			{itemList}

      	  </div>
		</div>
	  </>
  )
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products)