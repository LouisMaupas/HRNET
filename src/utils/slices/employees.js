import { createSlice } from "@reduxjs/toolkit";

//
const initialState = { isDisplayed: false };
/**
 * Get an intial state, an object of reducer functions and a slice name,
 * and automatically generates action creators (createAction) and action types that correspond to the reducers (createReducer) and state
 */
const employeesSlice = createSlice({
  name: "employees ",
  initialState: initialState,
  // List of reducers: each one defines the action to do / the change of state expected by actions
  // also defined creator actions
  reducers: {
    /**
     * Update state
     * @param {*} state
     * @param {*} action
     */
    displayEmployees: (state, action) => {
      state.isDisplayed = !state.isDisplayed;
    },
  },
});

// destructuring slice to recover the reducers and the actions
const { actions, reducer } = employeesSlice;
// export each action individually
export const { displayEmployees } = actions;
// reducer is the default export, not the slice
export default reducer;
