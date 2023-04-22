// import { createStore, combineReducers } from "redux";
// import { todoReducer } from "./reducer/toDoReducer";

// const rootReducer = combineReducers({
//     todo: todoReducer
// });

// export const store = createStore(rootReducer);


import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSlice";
import userSlice from "./slice/userSlice";


export const store = configureStore({
    reducer: {
        todo: todoReducer,
        user: userSlice
    }
})