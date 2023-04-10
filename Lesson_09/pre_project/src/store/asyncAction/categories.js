import { categoriesLoadAction } from "../reducer/categoriesReducer";

export const asyncLoadCategoriesAction = async (dispatch) => {
  const response = await fetch("https://dummyjson.com/products/categories");
  const data = await response.json();
  dispatch(categoriesLoadAction(data));
};
