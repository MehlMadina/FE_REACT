import React from "react";
import s from "./style.module.css"
import { useDispatch } from "react-redux";
import { remove_product } from "../../store/slice/productSlice";
import { add_to_basket } from "../../store/slice/basketSlice";

export default function ProductItem({ id, title, price }) {

const dispatch = useDispatch();

  return (
    <div className={s.item}>
      <p>{title}</p>
      <p>Price: {price}$</p>
      <button onClick={() => dispatch(remove_product(id))}>Remove</button>
      <button onClick={() => dispatch(add_to_basket(id))}>Add to cart</button>
    </div>
  );
}
