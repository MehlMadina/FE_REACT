import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsItem from "../../components/ProductsItem";
import { useParams } from "react-router-dom";
import s from './style.module.css';
import ProductFilterBar from "../../components/ProductsFilterBar";
import { productsResetFilter } from "../../store/reducer/productsReducer";

export default function ProductsPage() {

const dispatch = useDispatch();  

useEffect(() => {
  dispatch(productsResetFilter())
}, []);

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
      <ProductFilterBar />
      <div className={s.products_container}>
        {products
         .filter(({show}) => show)
         .map((item) => (
          <ProductsItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
