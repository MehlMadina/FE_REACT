import { createStore, combineReducers } from 'redux';
import { categoriesReducer } from './reducer/categoriesReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer
})

export const store = createStore(rootReducer);