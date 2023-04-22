import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      {
        id: 1,
        title: "morning yoga",
        done: false,
      },
      {
        id: 2,
        title: "read book",
        done: true,
      },
      {
        id: 3,
        title: "buy products",
        done: true,
      },
      {
        id: 4,
        title: "to do homework",
        done: false,
      },
    ],
  },
  reducers: {

    remove(state, action) {
      state.list = state.list.filter(({ id }) => id !== action.payload);
    },

    add(state, action) {
      state.list.push({ id: Date.now(), title: action.payload, done: false }); 
    },

    changeStatus(state, action) {
      const target = state.list.find(({ id }) => id === action.payload);
      target.done = !target.done;
    },
  },
});

export const {add, remove, changeStatus } = todoSlice.actions;
export default todoSlice.reducer;
