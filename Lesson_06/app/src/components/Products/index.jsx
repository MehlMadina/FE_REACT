import React from "react";
import s from "./style.module.css";

export default function Products({
  id,
  title,
  description,
  price,
  images,
  imageIndex,
  delProducts,
  addToBasket,
  changePhoto
}) {
  return (
    <div className={s.card}>
      <img src={images[imageIndex % images.length]} onMouseEnter={() => changePhoto(id)} alt={title} />
      <div className={s.info}>
        <p>{title}</p>
        <p>{description}</p>
        <div className={s.price_block}>
          <p>{price}$</p>
          <div className={s.btns}>
            <button onClick={() => delProducts(id)}>Delete</button>
            <button onClick={() => addToBasket(id)}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}
