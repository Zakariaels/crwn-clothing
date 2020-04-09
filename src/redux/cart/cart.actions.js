import cartActionTypes from './cart.types';

export const toggleCartHidden = user => ({
    type: cartActionTypes.TOGGLE_CART_HIDDEN,
})

export const addItem = item => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
});