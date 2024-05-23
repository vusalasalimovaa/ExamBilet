import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../Home/ExclusiveMenu/ExclusiveMenu.module.scss";
import { FaHeart } from "react-icons/fa";
import { GoTrash } from "react-icons/go";
import { clearFav, deleteFav } from "../../../redux/FavSlice";
import { addToBasket } from "../../../redux/BasketSlice";

const Basket = () => {
  const { fav } = useSelector((store) => store.fav);
  const dispatch = useDispatch();
  return (
    <>
      <div className={style.exclusive}>
        <div className={style.container}>
          <h1>Wishlist</h1>

          <div className={style.gridItems}>
            {fav &&
              fav.map((favElem) => {
                return (
                  <div
                    key={favElem._id}
                    className={style.items}
                    style={{ position: "relative" }}
                  >
                    <div className={style.menuimage}>
                      <img src={favElem.image} alt="" />
                    </div>
                    <div className={style.title}>
                      <h3>{favElem.title}</h3>
                      <p>{favElem.description}</p>
                      <button onClick={() => dispatch(addToBasket(favElem))}>
                        Add to basket
                      </button>
                    </div>

                    <div className={style.price}>
                      <p>${favElem.price}</p>
                    </div>

                    <div>
                      <FaHeart
                        onClick={() => dispatch(deleteFav(favElem))}
                        style={{
                          color: "red",
                          position: "absolute",
                          right: "5px",
                        }}
                      />
                    </div>
                  </div>
                );
              })}

            <button onClick={() => dispatch(clearFav())}>Clear Fav</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
