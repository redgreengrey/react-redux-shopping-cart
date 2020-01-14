import {INIT_STATE_SUCCESSFUL, INIT_STATE_FAILURE} from "../actions/init";

export const productsReducer = (state = {}, action) => {
    switch (action.type) {
        case INIT_STATE_SUCCESSFUL:
            return action.payload;
        case INIT_STATE_FAILURE:
            return [];
        default:
            return state;
    }
};