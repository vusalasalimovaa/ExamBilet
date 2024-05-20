import React from 'react'
import style from "./Product.module.scss"

const Products = () => {
  return (
    <>
      <div className={style.products}>
        <div className={style.container}>
          <div className={style.text}>
            <h3>POPULAR PRODUCTS</h3>
            <h1>Our Products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
          </div>
          <div className={style.productGrid}>
            <div className={style.gridItem}>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products