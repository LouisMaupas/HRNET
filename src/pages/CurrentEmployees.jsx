import * as React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import style from "../utils/style";
import { getGlobalState } from "../utils/state";

// Styled components
const CurrentEmployeeMain = styled.main({
    display: "flex",
    justifyContent: "center",
    width: "90%",
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
  }),
  Title = styled.h2({
    textAlign: "center",
    color: `${style.primaryColor}`,
  });

/**
 * component page current employees
 * @returns
 */
const CurrentEmployees = () => {
  const employeesFromState = getGlobalState("employees");
  let retrievedEmployees;
  if (typeof employeesFromState === "string") {
    // parse
    retrievedEmployees = JSON.parse(employeesFromState);
  } else {
    // nothing to do
    retrievedEmployees = employeesFromState;
  }

  /**
   * Format data
   * @param {*} first
   * @param {*} last
   * @param {*} start
   * @param {*} department
   * @param {*} birth
   * @param {*} adress
   * @param {*} city
   * @param {*} state
   * @param {*} zip
   * @returns
   */
  function createData(
    first,
    last,
    start,
    department,
    birth,
    adress,
    city,
    state,
    zip
  ) {
    return {
      first,
      last,
      start,
      department,
      birth,
      adress,
      city,
      state,
      zip,
    };
  }

  // stock data
  const originalRows = [];
  if (retrievedEmployees !== null && retrievedEmployees !== "") {
    retrievedEmployees.forEach((employe) => {
      originalRows.push(
        createData(
          employe.first,
          employe.last,
          employe.start,
          employe.department,
          employe.birth,
          employe.adress,
          employe.city,
          employe.state,
          employe.zip
        )
      );
    });
  } else {
    console.log(
      "No employee found. Use the form to add some employees or reload the page."
    );
  }
  return (
    <>
      <Title> Current Employees</Title>
      <CurrentEmployeeMain>
        <Table data={originalRows} />
      </CurrentEmployeeMain>
    </>
  );
};

export default CurrentEmployees;
