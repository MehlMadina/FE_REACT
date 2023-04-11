const defaultState = [
  { id: 1, count: 3 },
  { id: 2, count: 5 },
  { id: 3, count: 5 },
];
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const incrementAction = (payload) => ({ type: INCREMENT, payload });
export const decrementAction = (payload) => ({ type: DECREMENT, payload });

const getById = (state, find_id) => state.find(({ id }) => id === find_id);

export const basketReducer = (state = defaultState, action) => {
  if (action.type === INCREMENT) {
    const target = getById(state, action.payload);
    target.count++;
    return [...state];
  } else if (action.type === DECREMENT) {
    const target = getById(state, action.payload);
    target.count--;

    if (target.count === 0) {
      state = state.filter((el) => el !== target);
    }
    return [...state]
  } else {
    return state;
  }
};
