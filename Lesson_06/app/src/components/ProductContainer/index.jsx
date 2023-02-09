import React, { useState, useEffect } from 'react';
import Products from '../Products';
import s from './style.module.css';

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


const delProducts = (delId) => {
  const newArr = products.filter(({ id }) => id !== delId);
  setProducts(newArr);
};


const addToBasket = (value) => {
  const target = products.find(({ id }) => id === value);
  setBasket([...basket, { ...target, count: 1 }]);
};

console.log(basket);

  return (
    <div className={s.container}>
        {
            products.map(el => <Products key={el.id} {...el} delProducts={delProducts} addToBasket={addToBasket}/>)
        }
    </div>
  )
}
