import React, { useEffect, useState } from "react";
import s from "./style.module.css";

export default function ProductsFilter({ filterByPrice }) {

const initialValue = { min: 0, max: Infinity };
const [ price, setPrice ] = useState({ min: 0, max: Infinity });


useEffect(() => {
    filterByPrice(price)
 }, [price]);

const setMaxPrice = (value) => setPrice(({ min }) => ({ min, max: value })); 
const setMinPrice = (value) => setPrice(({ max }) => ({ max, min: value })); 

const minHandler = ({ target }) => {
    const value = +target.value;
    setMinPrice(value);
}

const maxHandler = ({ target }) => {
    const value = target.value === '' ? Infinity : +target.value;
    setMaxPrice(value);
}

console.log(price);

  return ( 
  <div className={s.filter}>
        <input type="number" value={price.min === 0 ? '' : price.min} placeholder="min price" onChange={minHandler}/>
        <input type="number" value={price.max === Infinity ? '' : price.max} placeholder="max price" onChange={maxHandler}/>
        <button onClick={() => setPrice(initialValue)}>Clear</button>
  </div>
  );
}
