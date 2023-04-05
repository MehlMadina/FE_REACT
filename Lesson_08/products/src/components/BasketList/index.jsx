import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem";


export default function BasketList() {
  const { basket, products } = useSelector(state => state);

  const basketDescr = basket.map(item => {
    const product = products.find(({id}) => id === item.id);
    return {...item, ...product}
  });


  return (
    <div>
      {basketDescr.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
    </div>
  );
}
