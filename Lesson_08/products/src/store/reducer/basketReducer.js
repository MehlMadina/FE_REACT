const defaultState = [{ id: 12, count: 1 }];

const getById = (state, find_id) => state.find(({ id }) => id === find_id);

export const basketReducer = (state = defaultState, action) => {
  if (action.type === "ADD_BASKET") {
    const target = getById(state, action.payload);

    if (target === undefined) {
      return [...state, { id: action.payload, count: 1 }];
    } else {
      target.count++;
      return [...state];
    }
  } else if (action.type === "INCREMENT") {
    const target = getById(state, action.payload);
    target.count++;
    return [...state];
  } else if (action.type === "DECREMENT") {
    const target = getById(state, action.payload);
    target.count--;

    if (target.count === 0) {
        state = state.filter(el => el !== target);
    }
    
    return [...state];
  } else {
    return state;
  }
};
