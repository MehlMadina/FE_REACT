import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export default function BasketItem({ id, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_container}>
      <p>id: {id}</p>
      <p>count: {count}</p>
      <div className={s.btns}>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: id })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: id })}>
          +
        </button>
      </div>
    </div>
  );
}
