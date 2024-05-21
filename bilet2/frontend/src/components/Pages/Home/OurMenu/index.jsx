import React from 'react'
import style from "./Menu.module.scss"
import { useGetAllProductQuery, useGetProductByIdQuery } from '../../../../services/products'

const OurMenu = () => {

  const {data:element} = useGetProductByIdQuery("664c9b1957813af6236d2ddd")
  console.log(element)

  const {data:allProduct} = useGetAllProductQuery()
  console.log(allProduct)
  return (
    <>
    <div className={style.lineandtxt}>
      <div className={style.line1}></div>
      <h2>Our Menu</h2>
      <div className={style.line1}></div>
    </div>

    <div className={style.items}>
      <p>Breakfast</p>
      <p>Brunch</p>
      <p>Lunch</p>
      <p>Dinner</p>
    </div>

    <div className={style.menu}>
      <div className={style.container}>
        <div className={style.griditem}>
          {allProduct && allProduct.map((elem) => {
            return (
              <div className={style.items}>
            <h3>{elem.title}</h3>
            <div className={style.desandprice}>
            <p>{elem.description}</p>
            <div className={style.line}></div>
            <p>{elem.price}</p>
            </div>
          </div>
            )
          })}
          

          

          



        </div>
      </div>
    </div>
    </>
  )
}

export default OurMenu