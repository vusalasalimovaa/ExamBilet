import React from "react";
import style from "./Navbar.module.scss";
import { SlBasket } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { count } = useSelector((store) => store.count);
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.navbarStyle}>
            <h1>Selling.</h1>
            <div className={style.navbarTxt}>
              <ul>
                <Link to="/">
                  <li className={style.home}>Home</li>
                </Link>
                <li>
                  <a href="">Products</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Special</a>
                </li>
                <li>
                  <a href="">Testimonials</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>

            <div className={style.icons}>
              <IoMenu className={style.menu} />

              <Link to="/basket">
                <SlBasket />
                <span>{count}</span>
              </Link>

              <Link to="/fav">
                <IoIosHeartEmpty />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
