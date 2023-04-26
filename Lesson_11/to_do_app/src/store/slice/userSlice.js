import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!resp.ok) {
        throw new Error("Server error");
      }
      const data = await resp.json();
      // const changeData = data.map(({ id, name }) => ({ id, name, age: 20}));
      const changeData = data.map(({ id, name }) => ({
        id,
        name,
        age: Math.round(Math.random() * 20 + 10),
      }));
      return changeData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchRemove = createAsyncThunk(
  "users/fetchRemove",
  async(id, { dispatch }) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    });
    dispatch(remove(id));
  }
)

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
    },
    remove: (state, { payload }) => {
      state.list = state.list.filter(({ id }) => id !== payload);
    }
  },
  extraReducers: (builder) => {
    builder
          .addCase(fetchUsers.pending, (state) => {
            state.status = "loading";
          })
          .addCase(fetchUsers.fulfilled, (state, { payload }) => {
            state.status = "resolve";
            state.list = payload;
          })
          .addCase(fetchUsers.rejected, (state, { payload }) => {
            state.status = "rejected";
            state.error = payload;
          })
  }
});

export const { age_increment, remove } = userSlice.actions;
export default userSlice.reducer;