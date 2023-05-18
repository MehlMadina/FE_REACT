import React, { useState } from "react";
import ProductsFilter from "../ProductsFilter";
import ProductsList from "../ProductsList";

export default function ProductsContainer() {

  const initialState = [
    { id: 1, title: "apple", price: 12, show: true },
    { id: 2, title: "peach", price: 8, show: true },
    { id: 3, title: "pineapple", price: 25, show: true },
    { id: 4, title: "cherry", price: 15, show: true },
    { id: 5, title: "cucumber", price: 9, show: true },
    { id: 6, title: "potato", price: 10, show: true },
    { id: 7, title: "tomato", price: 18, show: true },
    { id: 8, title: "onions", price: 11, show: true },
  ];

  const [products, setProducts] = useState(initialState);

  const filterByPrice = (({ min, max }) => {
    setProducts(pre => pre.map(item => ({ ...item, show: item.price <= max && item.price >= min })));
  }) 

  return (
    <div>
      <ProductsFilter filterByPrice={filterByPrice}/>
      <ProductsList products={products} />
    </div>
  );
}
