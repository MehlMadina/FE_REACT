export const TASK = 'TASK';

export const addTask = payload => {
    return {
        type: TASK,
        payload: payload
    }
}

export const tasksReducer = (state = [], action ) => {
    if (action.type === TASK) {
        return [...state, action.payload]
    } else {
        return state
    }
}