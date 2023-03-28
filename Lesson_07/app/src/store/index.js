import { combineReducers, createStore } from 'redux';
import { clickerReducer } from './reducer/clickerReducer';
import { tasksReducer } from './reducer/tasksReducer';

const rootReducer = combineReducers({
  clicker: clickerReducer,
  tasks: tasksReducer,
});

export const store = createStore(rootReducer);