import React from 'react'
import s from './style.module.css'


export default function Product({id, title, price, deleteProduct}) {

    console.log(deleteProduct);
  return (
    <div className={s.card}>
        <p>{title}</p>
        <p>{price}</p>
        <button onClick={() => deleteProduct(id)}>Удалить</button>
    </div>
  )
}
