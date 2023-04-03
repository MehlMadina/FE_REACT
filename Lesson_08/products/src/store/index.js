import { combineReducers, createStore } from 'redux';
import { productsReducer } from './reducer/productsReducer';
import { basketReducer } from './reducer/basketReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    basket: basketReducer,
});

export const store = createStore(rootReducer);

