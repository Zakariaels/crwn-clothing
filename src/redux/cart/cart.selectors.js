import { createSelector } from 'reselect';
import { createStore } from 'redux';

//input selector
//get the whole state and return a slice of iy (one layer or two!)
const selectCart = state => state.cart;

//output selector (which uses the input selector)
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [ selectCartItems ],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity, 0)
);