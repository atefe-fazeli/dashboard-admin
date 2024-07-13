import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography } from "@mui/material";

function Users() {
  function editUserHandler() {}
  function deleteUserHandler(params) {
    setRows(rows.filter((item) => item.id != params.row.id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "user", headerName: "User", width: 180 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "status", headerName: "Status", width: 130 },
    {
      field: "transaction",
      headerName: "Transaction",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Button
            sx={{
              backgroundColor: "green",
              padding: "2px",
              borderRadius: "8px",
              color: "white",
            }}
            onClick={() => editUserHandler(params)}
          >
            <Typography variant="body2">edit</Typography>
          </Button>
          <DeleteIcon
            fontSize="small"
            color="error"
            onClick={() => deleteUserHandler(params)}
          />
        </Box>
      ),
    },
  ];

  const [rows, setRows] = useState([
    {
      id: 1,
      user: "edi",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 2,
      user: "nono",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 3,
      user: "pepi",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 4,
      user: "belbel",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 5,
      user: "gomonagi",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 6,
      user: "pofak",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 7,
      user: "jinda",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 8,
      user: "konda",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
    {
      id: 9,
      user: "pepi",
      email: "atefefazeli@gmail.com",
      status: "active",
      transaction: 120,
    },
  ]);
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default Users;
