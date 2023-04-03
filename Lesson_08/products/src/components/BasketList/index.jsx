import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem";

export default function BasketList() {
  const basket = useSelector((state) => state.basket);

  return (
    <div>
      {basket.map((item) => (
        <BasketItem key={item.id} {...item} />
      ))}
    </div>
  );
}
