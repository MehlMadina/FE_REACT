import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import { addToCart } from "../../store/reducer/basketReducer";
import { useDispatch } from "react-redux";

export default function ProductDescriptionPage() {
  const { id } = useParams();

  const product = useSelector(({ products }) =>
    products.find((item) => item.id === +id)
  );

  const dispatch = useDispatch();

  const render = () => {
    if (product === undefined) {
      return <p>Страница грузится</p>;
    } else {
      const { id, title, description, thumbnail, price } = product;
      return (
        <div className={s.container}>
          <img src={thumbnail} alt={title} />
          <div className={s.info}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={s.price}>
              <p>Price: {price}$</p>
              <button onClick={() => dispatch(addToCart(id))}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      );
    }
  };

  return render();
}
