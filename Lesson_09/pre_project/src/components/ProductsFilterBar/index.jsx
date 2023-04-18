import React from 'react';
import s from "./style.module.css";
import { useDispatch } from 'react-redux';
import { productsSearchFilterAction } from '../../store/reducer/productsReducer';

export default function ProductFilterBar() {

const searchOnChange = event => dispatch(productsSearchFilterAction(event.target.value));
const sortOnChange = event => console.log(event.target.value);
const dispatch = useDispatch();

  return (
    <div className={s.container}>
        <input type="text" placeholder='Поиск...' onChange={searchOnChange}/>
        <select onChange={sortOnChange}>
            <option value="вверх">цена вверх</option>
            <option value="вниз">цена вниз</option>
        </select>
    </div>
  )
}
