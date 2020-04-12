import cartActionTypes from './cart.types';
import { addItemToCart } from './cart.utils';
import { removeItemFromCart } from './cart.utils';

const INITIAL_STAT = {
    hidden: true,
    cartItems: []
};

const cartReducrer = (state = INITIAL_STAT, action) => {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id)
            };
        case cartActionTypes.REMOVE_ITEM:
            return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        default: 
            return state;
    }
}

export default cartReducrer;