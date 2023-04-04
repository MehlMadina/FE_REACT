import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import {
  decrementAction,
  deleteAction,
  incrementAction,
} from "../../store/reducer/basketReducer";

export default function BasketItem({ id, count }) {
  const dispatch = useDispatch();

  return (
    <div className={s.basket_container}>
      <p>id: {id}</p>
      <p>count: {count}</p>
      <div className={s.btns}>
        <button onClick={() => dispatch(decrementAction(id))}>-</button>
        <button onClick={() => dispatch(incrementAction(id))}>+</button>
      </div>
      <button onClick={() => dispatch(deleteAction(id))}>Delete</button>
    </div>
  );
}
