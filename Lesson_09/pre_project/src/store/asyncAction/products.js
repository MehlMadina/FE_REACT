import { productsLoadAction } from "../reducer/productsReducer";

export const asyncLoadProductsAction = async (dispatch) => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  dispatch(productsLoadAction(data.products));
};
