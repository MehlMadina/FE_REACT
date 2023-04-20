import React from 'react';
import s from "./style.module.css";
import { useDispatch } from 'react-redux';
import { todoChangeStatusAction, todoDeleteAction } from "../../store/reducer/toDoReducer";

export default function ToDoItem({ id, title, done }) {

const dispatch = useDispatch();

  return (
    <div className={s.item}>
        <input type="checkbox" checked={done} onChange={() => dispatch(todoChangeStatusAction(id))}/>
        <p className={done ? s.title_done : ''}>{title}</p>
        <button onClick={() => dispatch(todoDeleteAction(id))}>Remove</button>
    </div>
  )
}
