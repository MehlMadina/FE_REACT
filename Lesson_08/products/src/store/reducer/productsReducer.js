const ADD = "PRODUCTS_ADD";
const DELETE = "DELETE_PROD";

export const addProductAction = (title, price, discount) => {
  return {
    type: ADD,
    payload: { id: Date.now(), title, price, discount },
  };
};

export const deleteProductAction = (payload) => ({ type: DELETE, payload });

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
  if (action.type === ADD) {
    return [...state, action.payload];
  } else if (action.type === DELETE) {
    return state.filter(({ id }) => id !== action.payload);
  } else {
    return state;
  }
};
