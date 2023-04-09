import React from "react";
import s from './style.module.css';

export default function ProductsItem({ title, image, description }) {
  return (
    <div className={s.item}>
      <img src={image} alt={title} />
      <p>{title}</p>
      <button>Добавить в корзину</button>
    </div>
  );
}
