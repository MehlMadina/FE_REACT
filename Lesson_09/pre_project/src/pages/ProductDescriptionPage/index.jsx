import React, { useState } from "react";
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
  const [ imgIndex, setImgIndex ] = useState(0);

  const render = () => {
    if (product === undefined) {
      return <p>Страница грузится</p>;
    } else {
      const { id, title, description,  price, discountPercentage, images } =
        product;
      return (
        <div className={s.container}>
          <div>
            <img src={images[imgIndex]} alt={title} />
            <div className={s.images_block}>
              {
                images.map((img, index) => 
                <img 
                   key={img} 
                   src={img} 
                   alt={title}
                   className={imgIndex === index ? s.active : ''}
                   onClick={() => setImgIndex(index)}
                />)
              }
            </div>
          </div>
          
          <div className={s.info}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className={s.price}>
              <p style={{ textDecoration: "line-through" }}>{price}$</p>
              <p style={{ color: "red" }}>
                {(price - (price * discountPercentage) / 100).toFixed(2)}$
              </p>
            </div>
            <button onClick={() => dispatch(addToCart(id))}>
              Добавить в корзину
            </button>
          </div>
        </div>
      );
    }
  };

  return render();
}
