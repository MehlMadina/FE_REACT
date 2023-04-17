import React from "react";
import s from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../store/reducer/basketReducer";

export default function BasketCalculation() {

  const dispatch = useDispatch();

  const { basket, products } = useSelector((state) => state);

  const totalPrice = basket.reduce(( acc, item ) => {
      const product = products.find(({ id }) => id === item.id);
      return acc + item.count * product.price
  }, 0);

  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);

  return (
    <div className={s.container}>
      <p>Общее количество: {totalCount}</p>
      <p>Общая стоимость: {totalPrice}</p>
      <button onClick={() => dispatch(clearBasket())}>Очистить</button>
    </div>
  );
}
