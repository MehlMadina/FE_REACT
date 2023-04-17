import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/reducer/basketReducer";
import { useDispatch } from "react-redux"; 

export default function ProductsItem({ id, title, thumbnail }) {

  const dispatch = useDispatch();

  const link = `/product/${id}`;

  return (
    <div  className={s.item}>
      <Link to={link}>
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
      </Link>
      <button onClick={() => dispatch(addToCart(id))}>Добавить в корзину</button>
    </div>
  );
}
