import {CHANGE_ORDER_ITEMS_COUNT} from "../actions/changeOrderItemsCount";
import {CLEAR_SHOPPING_CART} from "../actions/clearShoppingCart";
import {REMOVE_ITEM_FROM_SHOPPING_CART} from "../actions/removeFromShoppingCart";

export const orderReducer = (state = {items: []}, action) => {
    switch (action.type) {
        case (CHANGE_ORDER_ITEMS_COUNT): {
            let found = state.items.find(orderItem => {
                return orderItem.item.id === action.payload.item.id
            });

            if (action.payload.count === -1) {
                found.count += action.payload.count;
                return {
                    ...state,
                    items: state.items.filter(orderItem => orderItem.count > 0)
                }
            }

            if (!!found) {
                found.count += action.payload.count;
                return {...state, items: [...state.items]};
            } else {
                return {...state, items: [...state.items, action.payload]};
            }
        }
        case (REMOVE_ITEM_FROM_SHOPPING_CART): {
            return {...state, items: state.items.filter(orderItem => orderItem.item.id !== action.payload)};
        }
        case (CLEAR_SHOPPING_CART): {
            return {items: []};
        }
        default:
            return state;
    }
};