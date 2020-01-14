import {FILTER_SEARCH} from "../actions/filterSearch";

export const searchReducer = (state = '', action) => {
    switch (action.type) {
        case (FILTER_SEARCH): {
            return action.payload;
        }
        default:
            return state;
    }
};