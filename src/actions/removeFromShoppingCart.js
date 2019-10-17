export const REMOVE_ITEM_FROM_SHOPPING_CART = 'REMOVE_ITEM_FROM_SHOPPING_CART';

export const removeItemFromCart = (id) => {
    return {
        type: REMOVE_ITEM_FROM_SHOPPING_CART,
        payload: id
    }
};