// https://www.npmjs.com/package/react-hooks-global-state
import { createGlobalState } from "react-hooks-global-state";

/** intial state  */
const { setGlobalState, useGlobalState } = createGlobalState({
  employees: null,
});

/**
 * hook
 * @param {*} employee
 */
export const setAddEmployee = (employee) => {
  setGlobalState("employees", employee);
};

export { useGlobalState };
