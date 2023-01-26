import React from "react";

export default function AddProduct({ createProduct }) {
  const onSubmit = (event) => {
    event.preventDefault();
    const { title, price } = event.target;
    createProduct(title.value, price.value);
    title.value = "";
    price.value = "";
  };
  
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="название" name="title" />
      <input type="number" placeholder="цена" name="price" />
      <button>Добавить</button>
    </form>
  );
}
