import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  decrementAction,
  deleteAction,
  incrementAction,
} from "../../store/reducer/basketReducer";

export default function BasketItem({ id, title, price, count, discount }) {
  const dispatch = useDispatch();

  const discPrice = (price - price * discount / 100).toFixed(2);

  return (
    <div className={s.basket_container}>
      <p>{title}</p>
      <p>Price: { discPrice }$ X {count} = {discPrice * count}$</p>
      <p>Count: {count}</p>
      <div className={s.btns}>
        <button onClick={() => dispatch(decrementAction(id))}>-</button>
        <button onClick={() => dispatch(incrementAction(id))}>+</button>
      </div>
      <button onClick={() => dispatch(deleteAction(id))}>Delete</button>
    </div>
  );
}
