import * as React from "react";
import styled from "styled-components";
import Table from "../components/Table";
import style from "../utils/style";

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
  return (
    <>
      <Title> Current Employees</Title>
      <CurrentEmployeeMain>
        <Table />
      </CurrentEmployeeMain>
    </>
  );
};

export default CurrentEmployees;
