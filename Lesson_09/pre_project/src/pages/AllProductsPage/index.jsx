import React from "react";
import { useSelector } from "react-redux";
import ProductsItem from "../../components/ProductsItem";
import s from './style.module.css';

export default function AllProductsPage() {
  const products = useSelector(({ products }) => products);

  return (
    <div className={s.products_container}>
      {products.map((el) => (
        <ProductsItem key={el.id} {...el} />
      ))}
    </div>
  );
}
