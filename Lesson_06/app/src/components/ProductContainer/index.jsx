import React, { useState, useEffect } from "react";
import BasketContainer from "../BasketContainer";
import Modal from "../Modal";
import Products from "../Products";
import s from "./style.module.css";

export default function ProductContainer() {
  
  const [products, setProducts] = useState(null);
  const [basket, setBasket] = useState(
    () => JSON.parse(localStorage.getItem("basket")) ?? []
  );

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);


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
          images,
          imageIndex: 0
        })
      );
      setProducts(result);
    })();
  }, []);

  
  const changePhoto = productId => {
    products.find(({id}) => id === productId).imageIndex++;
    setProducts([...products]);
  };


  useEffect(() => {
    if (products === null) {
      return
    }
    const products_ids = products.map(({ id }) => id);
    setBasket(pre => pre.filter(({ id }) => products_ids.includes(id)));
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

  const [modal, setModal] = useState(true);

  const openWindow = () => setModal(true);
  const closeWindow = () => setModal(false);

  const deleteFromBasket = (value) =>
    setBasket(basket.filter(({ id }) => id !== value));

  return (
    <div>
      <button onClick={openWindow}>Open basket ({basket.reduce((pre, {count}) => pre + count, 0)})</button>
      {
         modal ?
      <Modal closeWindow={closeWindow}> 
        <BasketContainer
        basket={basket}
        decrement={decrement}
        increment={increment}
        deleteFromBasket={deleteFromBasket}
        clearBasket={clearBasket}
      />
      </Modal>
      : ''
    }
      
      
      <div className={s.container}>
        {
          products === null
          ? 'Товары грузятся'
          : products.map((el) => (
          <Products
            key={el.id}
            {...el}
            delProducts={delProducts}
            addToBasket={addToBasket}
            changePhoto={changePhoto}
          />
        ))}
      </div>
    </div>
  );
}
