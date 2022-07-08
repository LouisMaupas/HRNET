import * as React from "react";
import styled from "styled-components";
import Table from "../components/Table";

// Styled components
const CurrentEmployeeMain = styled.main({
  display: "flex",
  justifyContent: "center",
  width: "90%",
});

/**
 * component page current employees
 * @returns
 */
const CurrentEmployees = () => {
  return (
    <>
      <h2> Curent Employees</h2>
      <CurrentEmployeeMain>
        <Table />
      </CurrentEmployeeMain>
    </>
  );
};

export default CurrentEmployees;
