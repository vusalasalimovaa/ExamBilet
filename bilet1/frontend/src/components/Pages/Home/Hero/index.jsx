import React from 'react'
import style from "./Hero.module.scss"

const Hero = () => {
  return (
    <>
    <div className={style.hero}>
      <div className={style.container}>
        <div className={style.items}>
          <h1>Shop With Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis repudiandae magnam numquam eum temporibus nam alias provident ex ab saepe.</p>
          <div className={style.buttons}>
            <button className={style.shop}>SHOP NOW</button>
            <button className={style.club}>CLUB MEMBERSHIP</button>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Hero