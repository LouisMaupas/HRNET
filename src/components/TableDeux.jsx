import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const retrievedEmployees = JSON.parse(localStorage.getItem("employees"));

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

const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
];

retrievedEmployees.forEach((employe) => {
  rows.push(
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

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Date of Birth</TableCell>
            <TableCell align="right">Street</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Zip Code</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.first}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.first}
              </TableCell>
              <TableCell align="right">{row.last}</TableCell>
              <TableCell align="right">{row.start}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.birth}</TableCell>
              <TableCell align="right">{row.adress}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.zip}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
