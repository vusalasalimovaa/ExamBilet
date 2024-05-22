import React from "react";
import { useSelector } from "react-redux";
import style from "../Home/ExclusiveMenu/ExclusiveMenu.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { GoTrash } from "react-icons/go";

const Basket = () => {
  const { basket } = useSelector((store) => store.basket);
  return (
    <>
      <div className={style.exclusive}>
        <div className={style.container}>
          <h1>Basket</h1>

          <div className={style.gridItems}>
            {basket &&
              basket.map((basketElem) => {
                return (
                  <div className={style.items}>
                    <div className={style.menuimage}>
                      <img src={basketElem.image} alt="" />
                    </div>
                    <div className={style.title}>
                      <h3>{basketElem.title}</h3>
                      <p>{basketElem.description}</p>

                      <div style={{display:"flex", gap:"10px"}}>
                      <span>+</span>
                      <span>{basketElem.count}</span>
                      <span>-</span>
                      </div>
                      
                    </div>



                    <div className={style.price}>
                      <p>${basketElem.price}</p>
                    </div>

                    <div>
                      <GoTrash />
                      <FaRegHeart />
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

export default Basket;
