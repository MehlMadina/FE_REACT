import { productsLoadAction } from "../reducer/productsReducer";

export const asyncLoadProductsAction = async (dispatch) => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  dispatch(productsLoadAction(data));
};
