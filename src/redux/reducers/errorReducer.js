import {INIT_STATE_FAILURE, INIT_STATE_SUCCESSFUL} from "../actions/init";


const errorReducer = (state = { initError: null }, action) => {
    switch (action.type) {
        case INIT_STATE_SUCCESSFUL: {
            return { initError: null };
        }
        case INIT_STATE_FAILURE: {
            return { initError: 'Backend was failed!' };
        }
        default:
            return state;
    }
};

export default errorReducer;