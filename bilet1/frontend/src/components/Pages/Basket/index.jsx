import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/Products/Product.module.scss";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { store } from "../../../redux/store";
import {
  clearBasket,
  decreaseCount,
  deleteProduct,
  increaseCount,
} from "../../../redux/BasketSlice";
import { TbLetterX } from "react-icons/tb";
import { FaHeart } from "react-icons/fa6";
import { addToFav, deleteFav } from "../../../redux/FavSlice";

const Basket = () => {
  const { basket } = useSelector((store) => store.basket);
  const { fav } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.products}>
        <div className={style.container}>
          <div className={style.productGrid}>
            {basket.map((basketElem) => {
              return (
                <div className={style.gridItem}>
                  <img src={basketElem.image} alt="" />
                  <p>{basketElem.title}</p>
                  <div className={style.starandfav}>
                    <div className={style.star}>
                      <FaStar className={style.starcolor} />
                      <span>{basketElem.rate}</span>
                    </div>
                    <div className={style.heart}>
                      {fav.find((el) => el._id == basketElem._id) ? (
                        <FaHeart onClick={() => dispatch(deleteFav(basketElem))} style={{ color: "red" }} />
                      ) : (
                        <FaRegHeart onClick={() => dispatch(addToFav(basketElem))} />
                      )}
                      <span>{basketElem.like}</span>
                    </div>
                  </div>

                  <div className={style.count}>
                    <button
                      onClick={() => {
                        dispatch(increaseCount(basketElem));
                      }}
                      className={style.plus}
                    >
                      +
                    </button>
                    <span>{basketElem.count}</span>
                    <button
                      onClick={() => {
                        dispatch(decreaseCount(basketElem));
                      }}
                      className={style.minus}
                    >
                      -
                    </button>
                  </div>

                  <p>{basketElem.description}</p>
                  <div className={style.buttons}>
                    <button className={style.cart}>Cart</button>
                    <button className={style.view}>View</button>
                  </div>

                  <TbLetterX
                    onClick={() => {
                      dispatch(deleteProduct(basketElem));
                    }}
                    className={style.xletter}
                  />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => {
              dispatch(clearBasket());
            }}
            className={style.clearButton}
          >
            Clear Basket
          </button>
        </div>
      </div>
    </>
  );
};

export default Basket;
