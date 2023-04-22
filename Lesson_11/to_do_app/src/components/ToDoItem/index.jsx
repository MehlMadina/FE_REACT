import React from 'react';
import s from "./style.module.css";
import { useDispatch } from 'react-redux';
import { remove, changeStatus } from '../../store/slice/todoSlice';

export default function ToDoItem({ id, title, done }) {

const dispatch = useDispatch();

  return (
    <div className={s.item}>
        <input type="checkbox" checked={done} onChange={() => dispatch(changeStatus(id))}/>
        <p className={done ? s.title_done : ''}>{title}</p>
        <button onClick={() => dispatch(remove(id))}>Remove</button>
    </div>
  )
}
