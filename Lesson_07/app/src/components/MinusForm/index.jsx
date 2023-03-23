import React from "react";
import { useDispatch } from "react-redux";

export default function MinusForm() {
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    const { number } = event.target;
    dispatch({ type: "MIN", payload: +number.value });
    number.value = "";
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input type="number" name="number" placeholder="Number" />
        <button>Decrease</button>
      </form>
    </div>
  );
}
