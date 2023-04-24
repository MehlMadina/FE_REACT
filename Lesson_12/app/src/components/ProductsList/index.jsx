import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";

export default function ProductsList() {
  const products = useSelector((state => state.product.list));

  return (
    <div>
      {products.map((el) => (
        <ProductItem key={el.id} {...el} />
      ))}
    </div>
  );
}
