export const SUM = 'SUM';

export const sumAction = payload => {
    return {
        type: SUM,
        payload: +payload
    }
}

export const clickerReducer = (state = 0, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "CLEAR") {
    return 0;
  } else if (action.type === SUM) {
    return state + action.payload;
  } else if (action.type === "MIN") {
    return state - action.payload;
  } else {
    return state;
  }
};
