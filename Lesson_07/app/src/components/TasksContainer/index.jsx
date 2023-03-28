import React from "react";
import AddTask from "../AddTask";
import TasksList from "../TasksList";

export default function TasksContainer() {
  return (
    <div>
      <AddTask />
      <TasksList />
    </div>
  );
}
