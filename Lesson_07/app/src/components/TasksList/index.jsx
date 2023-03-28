import React from "react";
import { useSelector } from "react-redux";

export default function TasksList() {
  const tasks = useSelector(state => state.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <p key={task}>{task}</p>
      ))}
    </div>
  );
}
