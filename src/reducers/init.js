import {INIT_STATE} from "../actions/init";

export const initStateReducer = (state = {}, action) => {
    switch (action.type) {
        case (INIT_STATE):
            return action.payload;
        default:
            return state;
    }
};