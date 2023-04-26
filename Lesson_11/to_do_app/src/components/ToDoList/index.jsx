import React from "react";
import ToDoItem from "../ToDoItem";
import s from "./style.module.css";
import { useSelector } from "react-redux";

export default function ToDoList({ completed }) {

const toDoList = useSelector(state => state.todo.list);

  return (
    <div className={s.container}>
      {toDoList
           .filter(({ done }) => done === completed)
           .map((el) => (
        <ToDoItem key={el.id} {...el} />
      ))}
    </div>
  );
}
