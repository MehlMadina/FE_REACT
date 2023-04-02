export const products = [
  {
    id: 1,
    title: "bike",
    price: 1500,
    discount: 10,
  },
  {
    id: 2,
    title: "sky",
    price: 2000,
    discount: 30,
  },
  {
    id: 3,
    title: "ball",
    price: 5000,
    discount: 15,
  },
];

export const productsReducer = (state = products, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE") {
    return state.filter(({ id }) => id !== action.payload);
  } else {
    return state;
  }
};
