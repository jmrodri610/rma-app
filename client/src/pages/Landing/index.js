import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PersistentDrawerLeft from "../../components/PersistentDrawerLeft";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import IconButton from "@mui/material/IconButton";

const columns = [
  { id: "ID", label: "Id", minWidth: 170 },
  { id: "created", label: "Fecha de creación", minWidth: 100 },
  {
    id: "createdBy",
    label: "Creado por",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "hotel",
    label: "Hotel",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Estado",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "doc",
    label: "Documento",
    minWidth: 170,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(ID, created, createdBy, hotel, status, doc) {
  return { ID, created, createdBy, hotel, status, doc };
}

const rows = [
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
  createData("RMA-01234", "01-01-2021", 'Miriam Manzano', 'Ibis','Activo', <IconButton><PictureAsPdfIcon /></IconButton>),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <PersistentDrawerLeft title="Lista de RMA">
      <Paper sx={{ width: "100%", overflow: "hidden"}}>
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
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
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
    </PersistentDrawerLeft>
  );
}
