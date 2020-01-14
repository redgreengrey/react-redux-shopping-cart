import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers';
import { createLogicMiddleware } from 'redux-logic';
import rootLogic from './logic';
import axios from 'axios';
import {PRODUCTS} from "./actions/changePage";

const initialState = {
    products: [],
    currentPage: PRODUCTS,
    order: []
};

const deps = { httpClient: axios };

const logicMiddleware = createLogicMiddleware(rootLogic, deps);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootLogicStore = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(logicMiddleware)));
