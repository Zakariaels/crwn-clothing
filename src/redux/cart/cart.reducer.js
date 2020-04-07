import cartActionTypes from './cart.types';

const INITIAL_STAT = {
    hidden: true
}

const cartReducrer = (state = INITIAL_STAT, action) =>  {
    switch(action.type) {
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default: 
            return state;
    }
}

export default cartReducrer;