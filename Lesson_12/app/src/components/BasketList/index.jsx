import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../BasketItem";

export default function BasketList() {
  const list = useSelector((state) => state.basket.list);

  return (
    <div>
      {list.map((el) => (
        <BasketItem key={el.id} {...el} />
      ))}
    </div>
  );
}
