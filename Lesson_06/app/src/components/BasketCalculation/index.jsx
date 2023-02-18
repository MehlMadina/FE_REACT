import React from "react";
import s from './style.module.css';

export default function BasketCalculation({ basket, clearBasket }) {
  const totalSum = basket.reduce(
    (acc, { count, price }) => acc + count * price,
    0
  );
  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);

  return (
    <div className={s.block}>
      <p>Total sum: {totalSum}$</p>
      <p>Total count: {totalCount}</p>
      <button onClick={clearBasket}>Delete basket</button>
    </div>
  );
}
