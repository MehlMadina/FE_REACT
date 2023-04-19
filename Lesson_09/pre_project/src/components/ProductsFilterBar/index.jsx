import React from 'react';
import s from "./style.module.css";
import { useDispatch } from 'react-redux';
import { productsSearchFilterAction, productsSortFilterAction } from '../../store/reducer/productsReducer';

export default function ProductFilterBar() {
const dispatch = useDispatch();
const searchOnChange = event => dispatch(productsSearchFilterAction(event.target.value));
const sortOnChange = event => dispatch(productsSortFilterAction(+event.target.value));


  return (
    <div className={s.container}>
        <input type="text" placeholder='Поиск...' onChange={searchOnChange}/>
        <select onChange={sortOnChange}>
            <option value="1">цена вверх</option>
            <option value="2">цена вниз</option>
        </select>
    </div>
  )
}
