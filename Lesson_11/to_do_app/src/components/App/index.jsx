// import Test from "../Test";
import { useDispatch } from "react-redux";
import ToDoForm from "../ToDoForm";
import ToDoList from "../ToDoList";
import { useEffect } from "react";
import { fetchTodos } from "../../store/slice/todoSlice";
import UserList from "../UserList";
import { fetchUsers } from "../../store/slice/userSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {/* <Test /> */}
      <ToDoForm/>
      <h2>Done</h2>
      <ToDoList completed={true}/>
      <h2>In progress</h2>
      <ToDoList completed={false}/>
      <UserList />
    </div>
  );
}

export default App;
