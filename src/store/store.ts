import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import  { thunk } from 'redux-thunk';
import { productsReducer } from './reducers/productsReducer';
import cartReducer from './reducers/cartReducer';
import orderReducer from './reducers/orderReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    order: orderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

// @ts-ignore
export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);