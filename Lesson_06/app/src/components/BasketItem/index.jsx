import React from "react";
import s from "./style.module.css";

export default function BasketItem({
  id,
  title,
  price,
  count,
  decrement,
  increment,
  deleteFromBasket,
}) {
  return (
    <div className={s.item}>
      <p>{title}</p>
      <div className={s.info}>
        <p> Price: {price}$</p>
        <div className={s.count_btn}>
          <p>Count</p>
          <button onClick={() => decrement(id)}>-</button>
          <p>{count}</p>
          <button onClick={() => increment(id)}>+</button>
          <button onClick={() => deleteFromBasket(id)}>X</button>
        </div>
      </div>
    </div>
  );
}
