import {combineReducers} from 'redux';
import {changePageReducer} from "./changePage";
import {initStateReducer} from "./init";
import {orderReducer} from "./order";

export const rootReducer = combineReducers({
    currentPage: changePageReducer,
    products: initStateReducer,
    order: orderReducer
});