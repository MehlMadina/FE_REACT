import React from "react";
import ProductItem from "../ProductsItem";

export default function ProductsList({ products }) {
  return (
    <div>
      {products
      .filter(({ show }) => show)
      .map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </div>
  );
}
