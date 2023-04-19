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
export const productsSortFilterAction = (payload) => ({
  type: PRODUCTS_SORT_FILTER,
  payload,
});

const getPrice = ({price, discountPercentage}) => price - price * discountPercentage / 100;

export const productsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return action.payload.map((item) => ({ ...item, show: true }));
  } else if (action.type === PRODUCTS_SEARCH_FILTER) {
    return state.map((item) => ({
      ...item,
      show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
    }));
  } else if (action.type === PRODUCTS_RESET_FILTER) {
    return state.map((item) => ({ ...item, show: true }));
  } else if (action.type === PRODUCTS_SORT_FILTER) {
    // return [...state].sort((a, b) => action.payload === 1 ? a.price - b.price : b.price - a.price);
    return [...state].sort((a, b) => {
      if (action.payload === 1) {
        return getPrice(a) - getPrice(b);
      } else if (action.payload === 2) {
        return getPrice(b) - getPrice(a);
      } else {
        return 0
      }
    });
  } else {
    return state;
  }
};
