// https://www.npmjs.com/package/react-hooks-global-state
import { createGlobalState } from "react-hooks-global-state";
const employeesFromLocalStorage = localStorage.getItem("employees"),
  initialState = { employees: employeesFromLocalStorage };

/** set of functions from global state */
const { setGlobalState, useGlobalState, getGlobalState } =
  createGlobalState(initialState);

/**
 * hook
 * @param {*} employee
 */
export const setAddEmployee = (employee) => {
  setGlobalState("employees", employee);
};

export { useGlobalState, getGlobalState };
