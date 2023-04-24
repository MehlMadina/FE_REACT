import { createSlice } from "@reduxjs/toolkit";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    list: [

    ],
  },
  reducers: {

    add_to_basket(state, { payload }) {
      const product = state.list.find(({ id }) => id === payload);
      if (product) {
        product.count++;
      } else {
        state.list.push({ id: payload, count: 1 });
      }
    },

    increment(state, { payload }) {
        state.list.find(({ id }) => id === payload).count++;
    },

    decrement(state, { payload }) {
        state.list.find(({ id }) => id === payload).count--;
    }
  },
});

export const { add_to_basket, increment, decrement } = basketSlice.actions;
export default basketSlice.reducer;
