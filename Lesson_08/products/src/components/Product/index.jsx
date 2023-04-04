import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../../store/reducer/productsReducer";
import { addBasketAction } from "../../store/reducer/basketReducer";

export default function Product({ id, title, price }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => dispatch(deleteProductAction(id))}>
        Delete
      </button>
      <button onClick={() => dispatch(addBasketAction(id))}>
        Add
      </button>
    </div>
  );
}
