export const FILTER_SEARCH = 'FILTER_SEARCH';

export const searchAction = (value) => {
    return {
        type: FILTER_SEARCH,
        payload: value
    }
};