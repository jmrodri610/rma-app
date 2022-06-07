import React, { useState, useEffect, useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import IconButton from "@mui/material/IconButton";

import Grid from "@material-ui/core/Grid";
import { AuthContext } from "../../context/AuthContext";
import rmaApiService from "../../api/rmaApiService";
import { format as formatDate } from "date-fns";
import { PATH_ITEM } from "../../constants";
import { withRouter } from "react-router";

const columns = [
  { id: "rmaId", label: "Id", minWidth: 170 },
  {
    id: "createdDate",
    label: "Created on",
    minWidth: 100,
  },
  {
    id: "technitian",
    label: "Created by",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "hotel",
    label: "Hotel",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 100,
    align: "left",
  },
  {
    id: "isUnderWarranty",
    label: "Warranty",
    minWidth: 80,
    align: "left",
  },
  {
    id: "doc",
    label: "Document",
    minWidth: 80,
    align: "center",
  },
];

function List({ history }) {
  const authContext = useContext(AuthContext);

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    retrieveRMAList();
    // eslint-disable-next-line
  }, []);

  const retrieveRMAList = async () => {
    const token = authContext.getToken();
    try {
      const { data } = await rmaApiService.get("/retrieve-list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      data.forEach((item) => {
        const date = formatDate(new Date(item.createdDate), "PPP");
        item.createdDate = date;
        item.doc = (
          <IconButton>
            <PictureAsPdfIcon />
          </IconButton>
        );
      });

      setRows(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Paper
          sx={{
            width: "95%",
            overflow: "hidden",
            borderRadius: "1rem",
            marginTop: 10,
          }}
        >
          <TableContainer sx={{ maxHeight: 650 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        style={{ cursor: "pointer" }}
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        onClick={() => history.push(`${PATH_ITEM}/${row.id}`)}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : typeof value === "boolean"
                                ? value === true
                                  ? "YES"
                                  : "NO"
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Grid>
    </>
  );
}

export default withRouter(List);
