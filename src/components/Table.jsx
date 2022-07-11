import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { uuid } from "uuidv4";
import SearchBar from "material-ui-search-bar";
// import DeleteIcon from '@mui/icons-material/Delete';
// import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from "@mui/utils";

const retrievedEmployees = JSON.parse(localStorage.getItem("employees"));

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

/**
 *
 * @param {*} a
 * @param {*} b
 * @param {*} orderBy
 * @returns
 */
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

/**
 * Get comparator asc/desc for stableSort()
 * @param {*} order desc or asc
 * @param {*} orderBy column
 * @returns
 */
function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

/**
 * Array.prototype.sort() for cross-browser compatibility with IE11
 * @param {*} array data Formated
 * @param {*} comparator getComparator()
 * @returns
 */
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "first",
    numeric: false,
    disablePadding: true,
    label: "First Name",
  },
  {
    id: "last",
    numeric: false,
    disablePadding: false,
    label: "Last Name",
  },
  {
    id: "start",
    numeric: true,
    disablePadding: false,
    label: "Start Date",
  },
  {
    id: "department",
    numeric: true,
    disablePadding: false,
    label: "Department",
  },
  {
    id: "birth",
    numeric: true,
    disablePadding: false,
    label: "Date of Birth",
  },
  {
    id: "street",
    numeric: false,
    disablePadding: false,
    label: "Street",
  },
  {
    id: "city",
    numeric: false,
    disablePadding: false,
    label: "City",
  },
  {
    id: "State",
    numeric: false,
    disablePadding: false,
    label: "State",
  },
  {
    id: "zip",
    numeric: true,
    disablePadding: false,
    label: "Zip Code",
  },
];

/**
 * Table Head
 * @param {*} props
 * @returns
 */
function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {/* <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
          />
        </TableCell> */}
        {headCells.map((headCell, i) => (
          <TableCell
            key={`${uuid()}`}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

/**
 * Toolbar
 * @param {*} props
 * @returns
 */
const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {/* Hrnet Employees */}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>{/* <DeleteIcon /> */}</IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>{/* <FilterListIcon /> */}</IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

//
EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

/**
 * Table component + search component
 * @returns
 */
export default function EnhancedTable() {
  // search component
  const [searched, setSearched] = useState("");
  const [rows, setRows] = useState(originalRows);
  const requestSearch = (searchedVal) => {
    const filteredRows = originalRows.filter((row) => {
      return (
        row.first.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.last.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.adress.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.birth.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.city.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.department.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.start.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.state.toLowerCase().includes(searchedVal.toLowerCase()) ||
        row.zip.toLowerCase().includes(searchedVal.toLowerCase())
      );
    });
    setRows(filteredRows);
  };
  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
  };

  // table component
  const [order, setOrder] = React.useState("desc");
  const [orderBy, setOrderBy] = React.useState("first");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  /**
   * handle sort feature
   * @param {*} event
   * @param {*} property
   */
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // FIXME useless ?
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.first);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // FIXME useless ?
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  /**
   * Handle rows per page
   * @param {*} event
   */
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /**
   * Handle change dense controle
   * @param {*} event
   */
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <SearchBar
          value={searched}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.first);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.first)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={`${uuid()}`}
                      selected={isItemSelected}
                    >
                      {/* <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell> */}
                      {/* <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.first}
                      </TableCell> */}
                      <TableCell align="right">{row.first}</TableCell>
                      <TableCell align="right">{row.last}</TableCell>
                      <TableCell align="right">{row.start}</TableCell>
                      <TableCell align="right">{row.department}</TableCell>
                      <TableCell align="right">{row.birth}</TableCell>
                      <TableCell align="right">{row.adress}</TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                      <TableCell align="right">{row.state}</TableCell>
                      <TableCell align="right">{row.zip}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      />
    </Box>
  );
}
