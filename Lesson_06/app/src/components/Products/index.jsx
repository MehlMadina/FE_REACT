import React from 'react';
import s from './style.module.css';

export default function Products({ id, title, description, price, image, delProducts, addToBasket }) {
  return (
    <div className={s.card}>
        <img src={image} alt={title} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <button onClick={() => delProducts(id)}>Delete</button>
        <button onClick={() => addToBasket(id)}>Add</button>
    </div>
  )
}
