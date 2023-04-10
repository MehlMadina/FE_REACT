import React from "react";
import { useSelector } from "react-redux";
import ProductsItem from "../../components/ProductsItem";
import { useParams } from "react-router-dom";
import s from './style.module.css';

export default function ProductsPage() {
  const { category } = useParams();

  const products = useSelector(({ products }) => {
    if (category === undefined) {
      return products;
    }
     return products.filter((item) => item.category === category);
  });

  return (
    <div>
      <h2>{category}</h2>
      <div className={s.products_container}>
        {products.map((item) => (
          <ProductsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
