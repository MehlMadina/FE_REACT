const TODO_DELETE = "TODO_DELETE";
const TODO_CHANGE_STATUS = "TODO_CHANGE_STATUS";
const TODO_ADD = "TODO_ADD";


export const todoDeleteAction = (payload) => ({type: TODO_DELETE, payload});
export const todoChangeStatusAction = (payload) => ({type: TODO_CHANGE_STATUS, payload});
export const todoAddAction = (payload) => ({type: TODO_ADD, payload});

const defaultState = [
  {
    id: 1,
    title: "morning yoga",
    done: false,
  },
  {
    id: 2,
    title: "read book",
    done: true,
  },
  {
    id: 3,
    title: "buy products",
    done: true,
  },
  {
    id: 4,
    title: "to do homework",
    done: false,
  },
];


export const todoReducer = (state = defaultState, action) => {
    if (action.type === TODO_CHANGE_STATUS) {
        const target = state.find(({ id }) => id === action.payload);
        target.done = !target.done;
        return [...state];

    } else if (action.type === TODO_DELETE) {
        return state.filter(({ id }) => id !== action.payload);
    } else if (action.type === TODO_ADD) {
      return [...state, { id: Date.now(), title: action.payload, done: false }]
    } else {
        return state
    }
};
