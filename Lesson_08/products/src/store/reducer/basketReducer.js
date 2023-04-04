const ADD_BASKET = "ADD_BASKET";
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const DELETE = "DELETE";

export const addBasketAction = (payload) => ({ type: ADD_BASKET, payload });
export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({ type: DECREMENT, payload });
export const deleteAction = (payload) => ({ type: DELETE, payload });

const getById = (state, find_id) => state.find(({ id }) => id === find_id);

export const basketReducer = (state = [], action) => {
  if (action.type === ADD_BASKET) {
    const target = getById(state, action.payload);

    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      target.count++;
      return [...state];
    }
  } else if (action.type === INCREMENT) {
    const target = getById(state, action.payload);
    target.count++;
    return [...state];
  } else if (action.type === DECREMENT) {
    const target = getById(state, action.payload);
    target.count--;

    if (target.count === 0) {
      state = state.filter((el) => el !== target);
    }
    return [...state];
  } else if (action.type === DELETE) {
    return state.filter(({ id }) => id !== action.payload);
  }
  return state;
};
