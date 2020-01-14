export const INIT_STATE = 'INIT_STATE';
export const INIT_STATE_SUCCESSFUL = 'INIT_STATE_SUCCESSFUL';
export const INIT_STATE_FAILURE = 'INIT_STATE_FAILURE';

export const initState = () => {
    return {
        type: INIT_STATE
    }
};