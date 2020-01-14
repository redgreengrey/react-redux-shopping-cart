import {combineReducers} from 'redux';
import {changePageReducer} from "./changePage";
import {productsReducer} from "./init";
import {orderReducer} from "./order";
import {searchReducer} from "./filterSearch";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    currentPage: changePageReducer,
    products: productsReducer,
    order: orderReducer,
    search: searchReducer,
    error: errorReducer
});

export default rootReducer;