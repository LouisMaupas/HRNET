// https://www.npmjs.com/package/react-hooks-global-state
import { createGlobalState } from "react-hooks-global-state";

const initialState = { employees: "" };
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
