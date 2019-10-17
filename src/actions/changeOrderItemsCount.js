export const CHANGE_ORDER_ITEMS_COUNT = 'CHANGE_ORDER_ITEMS_COUNT';

export const changeOrderItemsCount = (count, item) => {
    return {
        type: CHANGE_ORDER_ITEMS_COUNT,
        payload: {count, item}
    }
};