import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    list: [
      {
        id: 1,
        name: "Alina",
        age: 25,
      },
      {
        id: 2,
        name: "Sam",
        age: 31,
      },
      {
        id: 3,
        name: "Sergey",
        age: 40,
      },
      {
        id: 4,
        name: "Anna",
        age: 19,
      },
    ],
  },
  reducers: {
    age_increment: (state, action) => {
        state.list.find(({ id }) => id === action.payload).age++;
    }
  }
});

export const { age_increment } = userSlice.actions;
export default userSlice.reducer;