import React from "react";
import ToDo from "../ToDo";

export default function ToDoContainer() {
  const todos = [
    { id: 1, title: "Побегать", done: true },
    { id: 2, title: "Поесть", done: false },
    { id: 3, title: "Поспать", done: true },
    { id: 4, title: "Позаниматься", done: false },
    { id: 5, title: "Порисовать", done: true },
  ];

  return (
    <div>
      {
      todos.map(item => <ToDo key={item.id} {...item} />)
      }
    </div>
  );
}
