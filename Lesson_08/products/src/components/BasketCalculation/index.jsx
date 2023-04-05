import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";

export default function BasketCalculation() {
  const { basket, products } = useSelector((state) => state);

  const basketDescr = basket.map((item) => {
    const product = products.find(({ id }) => id === item.id);
    return { ...item, ...product };
  });

  const totalCount = basket.reduce((acc, { count }) => acc + count, 0);
  const totalPriceWithDiscount = basketDescr.reduce(
    (acc, { count, price, discount }) =>
      acc + (price - (price * discount) / 100) * count,
    0
  );
  const totalPriceWithoutDiscount = basketDescr.reduce(
    (acc, { price, count }) => acc + price * count,
    0
  );

  return (
    <div className={s.container}>
      <p>Total count: {totalCount}</p>
      <p>Total price: {totalPriceWithDiscount}$</p>
      <p>Total price discount: {totalPriceWithoutDiscount - totalPriceWithDiscount}$</p>
    </div>
  );
}
