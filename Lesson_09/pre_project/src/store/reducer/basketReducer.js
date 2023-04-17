const defaultState = JSON.parse(localStorage.getItem("basket")) ?? [];
const writeToLocalStorage = (basket) =>
  localStorage.setItem("basket", JSON.stringify(basket));

const ADD_TO_CART = "ADD_TO_CART";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const BASKET_REMOVE = "BASKET_REMOVE";
const CLEAR_BASKET = "CLEAR_BASKET";

export const addToCart = (payload) => ({ type: ADD_TO_CART, payload });
export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({ type: DECREMENT, payload });
export const basketRemove = (payload) => ({ type: BASKET_REMOVE, payload });
export const clearBasket = () => ({ type: CLEAR_BASKET });

const getById = (state, find_id) => state.find(({ id }) => id === find_id);

export const basketReducer = (state = defaultState, action) => {
  if (action.type === ADD_TO_CART) {
    const target = getById(state, action.payload);
    if (target === undefined) {
      const newState = [...state, { id: action.payload, count: 1 }];
      writeToLocalStorage(newState);
      return newState;
    } else {
      target.count++;
      writeToLocalStorage(state)
      return [...state];
    }
  } else if (action.type === INCREMENT) {
    const target = getById(state, action.payload);
    target.count++;
    writeToLocalStorage(state);
    return [...state];
  } else if (action.type === DECREMENT) {
    const target = getById(state, action.payload);
    target.count--;

    if (target.count === 0) {
      const newState = state.filter((el) => el !== target);
      writeToLocalStorage(newState);
      return newState;
    }
    writeToLocalStorage(state);
    return [...state]
  } else if (action.type === BASKET_REMOVE) {
    const newState = state.filter(({ id }) => id !== action.payload);
    writeToLocalStorage(newState);
    return newState;
  } else if (action.type === CLEAR_BASKET) {
    writeToLocalStorage([]);
    return defaultState;
  } else {
    return state;
  }
};
