import {CHANGE_ORDER_ITEMS_COUNT} from "../actions/changeOrderItemsCount";
import {CLEAR_SHOPPING_CART} from "../actions/clearShoppingCart";
import {REMOVE_ITEM_FROM_SHOPPING_CART} from "../actions/removeFromShoppingCart";

export const orderReducer = (state = [], action) => {
    switch (action.type) {
        case (CHANGE_ORDER_ITEMS_COUNT): {
            let found = state.find(orderItem => {
                return orderItem.item.id === action.payload.item.id
            });

            if (action.payload.count === -1) {
                found.count += action.payload.count;
                return state.filter(orderItem => orderItem.count > 0);
            }

            if (!!found) {
                return [...state.map(x => {
                    if (x.item.id === action.payload.item.id) {
                        x.count += action.payload.count;
                    }
                    return x;
                })];
            } else {
                return [...state, action.payload];
            }
        }
        case (REMOVE_ITEM_FROM_SHOPPING_CART): {
            return [...state.filter(orderItem => orderItem.item.id !== action.payload)];
        }
        case (CLEAR_SHOPPING_CART): {
            return [];
        }
        default:
            return state;
    }
};