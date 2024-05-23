import React from "react";
import style from "./ExclusiveMenu.module.scss";
import { useGetAllMenuQuery } from "../../../../services/menu";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../../redux/BasketSlice";
import { addToFav, deleteFav } from "../../../../redux/FavSlice";
import { FaHeart } from "react-icons/fa";

const ExclusiveMenu = () => {
  const dispatch = useDispatch();
  const { fav } = useSelector((store) => store.fav);

  const { data: allMenu } = useGetAllMenuQuery();
  // console.log(allMenu);
  return (
    <>
      <div className={style.exclusive}>
        <div className={style.container}>
          <h1>Discover Our Exclusive Menu</h1>
          <div className={style.menuitems}>
            <p className={style.main}>Main</p>
            <p className={style.dessertndrink}>Dessert</p>
            <p className={style.dessertndrink}>Drinks</p>
          </div>
          <div className={style.gridItems}>
            {allMenu &&
              allMenu.map((elem) => {
                return (
                  <div className={style.items}>
                    <div className={style.menuimage}>
                      <img src={elem.image} alt="" />
                    </div>
                    <div className={style.title}>
                      <h3>{elem.title}</h3>
                      <p>{elem.description}</p>
                    </div>

                    <div className={style.price}>
                      <p>${elem.price}</p>
                    </div>

                    <div>
                      <button
                        onClick={() => {
                          dispatch(addToBasket(elem));
                          dispatch(getCount());
                        }}
                      >
                        Add to Cart
                      </button>
                      {fav.find((el) => el._id == elem._id) ? (
                        <FaHeart
                          onClick={() => dispatch(deleteFav(elem))}
                          style={{ color: "red" }}
                        />
                      ) : (
                        <FaRegHeart onClick={() => dispatch(addToFav(elem))} />
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExclusiveMenu;
