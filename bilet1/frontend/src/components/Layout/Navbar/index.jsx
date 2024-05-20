import React from 'react'
import style from "./Navbar.module.scss"
import { SlBasket } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";




const Navbar = () => {
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.navbarStyle}>
            <h1>Selling.</h1>
            <div className={style.navbarTxt}>
              <ul>
                <a href="">
                  <Link to="/">
                  <li>Home</li>
                  </Link>
                  <li>Products</li>
                  <li>About us</li>
                  <li>Special</li>
                  <li>Testimonials</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </a>
              </ul>
            </div>

            <div className={style.icons}>

            <IoMenu className={style.menu} />

              <Link to="/basket">
                <SlBasket />
              </Link>

              <Link to="/fav">
                <IoIosHeartEmpty />
              </Link>


            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar