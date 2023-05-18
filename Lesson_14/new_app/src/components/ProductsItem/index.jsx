import React from 'react';
import s from "./style.module.css";

export default function ProductItem({ title, price }) {
  return (
    <div className={s.item}>
        <p>{title}</p>
        <p>{price}€</p>
    </div>
  )
}
