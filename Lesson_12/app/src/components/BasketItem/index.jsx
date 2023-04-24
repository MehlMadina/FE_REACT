import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../store/slice/basketSlice";

export default function BasketItem({ id, title, price, count }) {

const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <p>{id}</p>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(decrement(id))}>-</button>
      <button onClick={() => dispatch(increment(id))}>+</button>
    </div>
  );
}
