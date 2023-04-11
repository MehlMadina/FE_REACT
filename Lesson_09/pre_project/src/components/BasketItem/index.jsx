import React from "react";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { decrementAction, incrementAction } from "../../store/reducer/basketReducer";

export default function BasketItem({ id, thumbnail, count, price, title }) {

const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <img src={thumbnail} alt={title} />
      <p>{title}</p>
      <p>
        {price} X {count} = {price * count}
      </p>
      <div className={s.btns}>
        <button onClick={() => dispatch(decrementAction(id))}>-</button>
        <button onClick={() => dispatch(incrementAction(id))}>+</button>
      </div>
    </div>
  );
}
