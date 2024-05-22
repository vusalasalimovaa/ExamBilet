import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../services/products";

const DetailMenu = () => {
  const { id } = useParams();
  const { data } = useGetProductByIdQuery(id);
  console.log(data);

  return <>{data.price}</>;
};

export default DetailMenu;
