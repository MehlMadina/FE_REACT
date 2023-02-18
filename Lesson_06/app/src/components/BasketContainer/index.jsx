import React from "react";
import BasketItem from "../BasketItem";
import BasketCalculation from "../BasketCalculation";

export default function BasketContainer({ basket, increment, decrement, deleteFromBasket, clearBasket }) {
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
      <BasketCalculation basket={basket} clearBasket={clearBasket} />
    </div>
  );
}
