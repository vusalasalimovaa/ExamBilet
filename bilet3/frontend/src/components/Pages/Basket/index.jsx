import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/ExclusiveMenu/ExclusiveMenu.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import {
  clearBasket,
  decreaseCount,
  deleteBasket,
  increaseCount,
} from "../../../redux/BasketSlice";
import { addToFav, deleteFav } from "../../../redux/FavSlice";

const Basket = () => {
  const { basket } = useSelector((store) => store.basket);
  const { fav } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.exclusive}>
        <div className={style.container}>
          <h1>Basket</h1>

          <div className={style.gridItems}>
            {basket &&
              basket.map((basketElem) => {
                return (
                  <div key={basketElem._id} className={style.items}>
                    <div className={style.menuimage}>
                      <img src={basketElem.image} alt="" />
                    </div>
                    <div className={style.title}>
                      <h3>{basketElem.title}</h3>
                      <p>{basketElem.description}</p>

                      <div style={{ display: "flex", gap: "10px" }}>
                        <button
                          onClick={() => dispatch(increaseCount(basketElem))}
                        >
                          +
                        </button>
                        <span>{basketElem.count}</span>
                        <button
                          onClick={() => dispatch(decreaseCount(basketElem))}
                        >
                          -
                        </button>
                      </div>
                    </div>

                    <div className={style.price}>
                      <p>${basketElem.price}</p>
                    </div>

                    <div>
                      <GoTrash
                        onClick={() => dispatch(deleteBasket(basketElem))}
                      />

                      {fav.find((elem) => elem._id == basketElem._id) ? (
                        <FaHeart
                          onClick={() => dispatch(deleteFav(basketElem))}
                          style={{ color: "red" }}
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() => dispatch(addToFav(basketElem))}
                        />
                      )}
                    </div>
                  </div>
                );
              })}

            <button onClick={() => dispatch(clearBasket())}>
              Clear Basket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
