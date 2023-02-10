import React, { useState, useEffect } from "react";
import BasketCalculation from "../BasketCalculation";
import BasketContainer from "../BasketContainer";
import Products from "../Products";
import s from "./style.module.css";

export default function ProductContainer() {
  
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);


  useEffect(() => {
    (async () => {
      const resp = await fetch("https://dummyjson.com/products");
      const data = await resp.json();
      const result = data.products.map(
        ({ id, title, price, description, images }) => ({
          id,
          title,
          price,
          description,
          image: images[0],
        })
      );
      setProducts(result);
    })();
  }, []);


  useEffect(() => {
    const products_ids = products.map(({ id }) => id);
    setBasket(basket.filter(({ id }) => products_ids.includes(id)));
  }, [products]);


  const delProducts = (delId) => {
    const newArr = products.filter(({ id }) => id !== delId);
    setProducts(newArr);
  };


  const addToBasket = (value) => {
    const productFromBasket = basket.find(({ id }) => id === value);

    if (productFromBasket) {
      productFromBasket.count++;
      setBasket([...basket]);
    } else {
      const target = products.find(({ id }) => id === value);
      setBasket([...basket, { ...target, count: 1 }]);
    }
  };


  const increment = (value) => {
    const target = basket.find(({ id }) => id === value);
    target.count++;
    setBasket([...basket]);
  };


  const decrement = (value) => {
    const target = basket.find(({ id }) => id === value);
    target.count--;

    if (target.count === 0) {
      setBasket(basket.filter((el) => el !== target));
    } else {
      setBasket([...basket]);
    }
  };


  const clearBasket = () => setBasket([]);


  const deleteFromBasket = (value) =>
    setBasket(basket.filter(({ id }) => id !== value));

  return (
    <div>
      <BasketContainer
        basket={basket}
        decrement={decrement}
        increment={increment}
        deleteFromBasket={deleteFromBasket}
      />
      <BasketCalculation basket={basket} clearBasket={clearBasket} />
      <div className={s.container}>
        {products.map((el) => (
          <Products
            key={el.id}
            {...el}
            delProducts={delProducts}
            addToBasket={addToBasket}
          />
        ))}
      </div>
    </div>
  );
}
