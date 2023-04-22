import React from 'react';
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { add } from '../../store/slice/todoSlice';

export default function ToDoForm() {

const dispatch = useDispatch();  

const submit = event => {
    event.preventDefault();
    dispatch(add(event.target.title.value));
    event.target.reset();
}

  return (
    <form onSubmit={submit} className={s.form}>
        <input type="text" name='title' placeholder='Enter your todo items'/>
        <button>Add</button>
    </form>
  )
}
