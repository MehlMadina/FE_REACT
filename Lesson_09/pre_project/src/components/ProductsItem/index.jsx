import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/reducer/basketReducer";
import { useDispatch } from "react-redux"; 

export default function ProductsItem({ id, title, thumbnail, price, discountPercentage }) {

  const dispatch = useDispatch();

  const link = `/product/${id}`;

  return (
    <div  className={s.item}>
      <Link to={link}>
        <img src={thumbnail} alt={title} />
        <p>{title}</p>
        <div className={s.price_block}>
          <p style={{textDecoration: 'line-through'}}>{price}$</p>
          <p style={{color: 'red'}}>{(price - price * discountPercentage / 100).toFixed(2)}$</p>
        </div>
        
      </Link>
      <button onClick={() => dispatch(addToCart(id))}>Добавить в корзину</button>
    </div>
  );
}
