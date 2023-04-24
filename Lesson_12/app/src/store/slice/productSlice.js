import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [
      {
        id: 1,
        title: "Apple",
        price: 10,
      },
      {
        id: 2,
        title: "Banana",
        price: 5,
      },
      {
        id: 3,
        title: "Peach",
        price: 15,
      },
      {
        id: 4,
        title: "Pineapple",
        price: 20,
      },
      {
        id: 5,
        title: "Cherry",
        price: 19,
      },
    ],
  },
  reducers: {
    remove_product (state, { payload }) {
      state.list = state.list.filter(({ id }) => id !== payload);
    },

    add_product (state, { payload }) {
      state.list.push(payload);
    }
  },
});

export const { remove_product, add_product } = productSlice.actions;
export default productSlice.reducer;
