import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/Products/Product.module.scss";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { store } from "../../../redux/store";
import { TbLetterX } from "react-icons/tb";
import { clearFav, deleteFav } from "../../../redux/FavSlice";
import { addToBasket } from "../../../redux/BasketSlice";

const Fav = () => {
  const { fav } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.products}>
        <div className={style.container}>
          <div className={style.productGrid}>
            {fav &&
              fav.map((favElem) => {
                return (
                  <div className={style.gridItem}>
                    <img src={favElem.image} alt="" />
                    <p>{favElem.title}</p>
                    <div className={style.starandfav}>
                      <div className={style.star}>
                        <FaStar className={style.starcolor} />
                        <span>{favElem.rate}</span>
                      </div>
                      <div className={style.heart}>
                        <FaHeart
                          onClick={() => dispatch(deleteFav(favElem))}
                          style={{ color: "red" }}
                        />
                        <span>{favElem.like}</span>
                      </div>
                    </div>

                    <p>{favElem.description}</p>
                    <div className={style.buttons}>
                      <button onClick={() => dispatch(addToBasket(favElem))} className={style.cart}>Cart</button>
                      <button className={style.view}>View</button>
                    </div>

                    <TbLetterX
                      onClick={() => {
                        dispatch(deleteFav(favElem));
                      }}
                      className={style.xletter}
                    />
                  </div>
                );
              })}
          </div>
          <button
            onClick={() => {
              dispatch(clearFav());
            }}
            className={style.clearButton}
          >
            Clear Fav
          </button>
        </div>
      </div>
    </>
  );
};

export default Fav;
