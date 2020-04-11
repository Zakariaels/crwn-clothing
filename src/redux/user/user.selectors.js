import { createSelector } from 'reselect';

//input selector
//get the whole state and return a slice of iy (one layer or two!)
const selectUser = state => state.user;

//output selector (which uses the input selector)
export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => user.currentUser
);
