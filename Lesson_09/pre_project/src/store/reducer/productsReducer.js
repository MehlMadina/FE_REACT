const defaultState = [];

const LOAD_PRODUCTS = "LOAD_PRODUCTS";
const PRODUCTS_SEARCH_FILTER = "PRODUCTS_SEARCH_FILTER";
const PRODUCTS_RESET_FILTER = "PRODUCTS_RESET_FILTER";
const PRODUCTS_SORT_FILTER = "PRODUCTS_SORT_FILTER";

export const productsLoadAction = (payload) => ({
  type: LOAD_PRODUCTS,
  payload,
});
export const productsSearchFilterAction = (payload) => ({
  type: PRODUCTS_SEARCH_FILTER,
  payload,
});
export const productsResetFilter = () => ({
  type: PRODUCTS_RESET_FILTER
});

export const productsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload.map((item) => ({ ...item, show: true }));
  } else if (action.type === PRODUCTS_SEARCH_FILTER) {
    return state.map((item) => ({
      ...item,
      show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
    }));
  } else if (action.type === PRODUCTS_RESET_FILTER) {
    return state.map(item => ({...item, show: true}))
  } else if (action.type === PRODUCTS_SORT_FILTER) {
    
  } else {
    return state;
  }
};
