import React from "react";
import { useDispatch } from "react-redux";

export default function Product({ id, title, price }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>{title}</p>
      <p>{price}</p>
      <button onClick={() => dispatch({ type: "DELETE", payload: id })}>
        Delete
      </button>
    </div>
  );
}
