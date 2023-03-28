import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/reducer/tasksReducer";

export default function AddTask() {

  const dispatch = useDispatch();  

  const submit = (event) => {
    event.preventDefault();
    const { task } = event.target;
    dispatch(addTask(task.value));
    task.value = "";
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="task" placeholder="Task" />
      <button>Add task</button>
    </form>
  );
}
