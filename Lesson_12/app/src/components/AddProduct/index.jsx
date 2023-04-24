import React from "react";
import { useDispatch } from "react-redux";
import { add_product } from "../../store/slice/productSlice";
import s from "./style.module.css";

export default function AddProduct() {

const dispatch = useDispatch();

const submit = (event) => {
  event.preventDefault();
  const title = event.target.title.value;
  const price = +event.target.price.value;
  dispatch(
    add_product({
      id: Date.now(),
      title,
      price
    })
  );
  event.target.reset();
};

  return (
    <form onSubmit={submit} className={s.form}>
      <input type="text" name="title" placeholder="Title" />
      <input type="number" name="price" placeholder="Price" />
      <button>Add</button>
    </form>
  );
}
