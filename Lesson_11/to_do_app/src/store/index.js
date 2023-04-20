import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducer/toDoReducer";

const rootReducer = combineReducers({
    todo: todoReducer
});

export const store = createStore(rootReducer);