import React from "react";
import style from "./Product.module.scss";
import {
  useGetProductByIdQuery,
  useGetAllProductsQuery,
} from "../../../../services/product.js";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket, getCount } from "../../../../redux/BasketSlice.js";
import { Link } from "react-router-dom";
import { addToFav, deleteFav } from "../../../../redux/FavSlice.js";
import { FaHeart } from "react-icons/fa6";

const Products = () => {
  const { data: element } = useGetProductByIdQuery("664b38186aa2333c0e7eb877");
  // console.log(element);

  const { data: allProduct } = useGetAllProductsQuery();
  // console.log(allProduct);

  const { fav } = useSelector((store) => store.fav);

  const dispatch = useDispatch();
  return (
    <>
      <div className={style.products}>
        <div className={style.text}>
          <h5>POPULAR PRODUCTS</h5>
          <h1>Our Products</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
            consequatur laboriosam ipsam.
          </p>
        </div>
        <div className={style.container}>
          <div className={style.productGrid}>
            {allProduct &&
              allProduct.map((products) => {
                return (
                  <div className={style.gridItem}>
                    <img src={products.image} alt="" />
                    <p>{products.title}</p>
                    <div className={style.starandfav}>
                      <div className={style.star}>
                        <FaStar className={style.starcolor} />
                        <span>{products.rate}</span>
                      </div>
                      <div className={style.heart}>
                        {fav.find((el) => el._id == products._id) ? (
                          <FaHeart onClick={() => dispatch(deleteFav(products))} style={{ color: "red" }} />
                        ) : (
                          <FaRegHeart
                            onClick={() => {
                              dispatch(addToFav(products));
                            }}
                          />
                        )}

                        <span>{products.like}</span>
                      </div>
                    </div>

                    <p>{products.description}</p>
                    <div className={style.buttons}>
                      <button
                        onClick={() => {
                          dispatch(addToBasket(products));
                          dispatch(getCount());
                        }}
                        className={style.cart}
                      >
                        Cart
                      </button>
                      <Link to="/detail">
                        <button className={style.view}>View</button>
                      </Link>
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

export default Products;
