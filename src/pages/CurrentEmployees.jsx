import * as React from "react";
import styled from "styled-components";
import Table from "../components/Table";
// import TableDeux from "../components/TableDeux"

// lib pour tableaux +/- par ordre de preference
/*
https://mui.com/material-ui/react-table/ => bien
https://material-table.com/#/ => bien
https://github.com/gregnb/mui-datatables => bien ?
https://www.npmjs.com/package/react-data-table-component => ?
https://table-react-component.vercel.app/ => ?
http://rsuite.github.io/rsuite-table/ => ?
https://www.npmjs.com/package/react-basic-datatable => nul ?
*/

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
        {/* <TableDeux></TableDeux> */}
      </CurrentEmployeeMain>
    </>
  );
};

export default CurrentEmployees;
