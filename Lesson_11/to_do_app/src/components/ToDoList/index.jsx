import React from "react";
import ToDoItem from "../ToDoItem";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function ToDoList() {

const toDoList = useSelector(state => state.todo);

  return (
    <div className={s.container}>
      {toDoList.map((el) => (
        <ToDoItem key={el.id} {...el} />
      ))}
    </div>
  );
}
