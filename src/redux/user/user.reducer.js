import { userActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
};

//userReducer is a pure function (get an input and send an output)
//state is given to the userReducer by the redux store whenever an action fires
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
    default:
        return state;
    }
};

export default userReducer;