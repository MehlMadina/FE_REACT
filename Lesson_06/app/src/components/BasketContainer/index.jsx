import React from "react";
import BasketItem from "../BasketItem";

export default function BasketContainer({ basket, increment, decrement, deleteFromBasket }) {
  return (
    <div>
      {basket.map((item) => (
        <BasketItem
          key={item.id}
          {...item}
          increment={increment}
          decrement={decrement}
          deleteFromBasket={deleteFromBasket}
        />
      ))}
    </div>
  );
}
