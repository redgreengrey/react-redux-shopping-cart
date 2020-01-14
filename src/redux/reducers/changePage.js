import {CHANGE_PAGE} from '../actions/changePage';

export function changePageReducer(state = {}, action) {
    switch (action.type) {
        case (CHANGE_PAGE):
             return action.payload;
        default:
            return state;
    }
}

