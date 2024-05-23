import React from "react";
import { SlBasket } from "react-icons/sl";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "./Navbar.module.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { basket } = useSelector((store) => store.basket);
  const { fav } = useSelector((store) => store.fav);
  let basketCount = basket?.reduce((acc, elem) => (acc += elem.count), 0);
  return (
    <>
      <div className={style.navbar}>
        <div className={style.container}>
          <div className={style.navbarStyle}>
            <div className={style.logo}>
              <h1>Tasty</h1>
            </div>

            <div className={style.items}>
              <ul>
                <li>
                  <Link>Home</Link>
                </li>
                <li>
                  <Link>Menu</Link>
                </li>
                <li>
                  <Link>Specialties</Link>
                </li>
                <li>
                  <Link>Reservation</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                <li>
                  <Link>Contact</Link>
                </li>
              </ul>
            </div>

            <div className={style.icons}>
              <Link to="/basket">
                <SlBasket />
                <span>{basketCount}</span>
              </Link>

              <Link to="/fav">
                <FaRegHeart />
                <span>{fav.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
