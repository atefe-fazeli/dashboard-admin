import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 20 },
  { field: "product", headerName: "Product", width: 160 },
  { field: "stock", headerName: "Stock", width: 160 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 160,
    renderCell: (params) =>
      <Box
        display="flex"
        flexDirection="row"
        spacing={2}
      >
        <DeleteIcon />
      </Box>
    ,
  },
];

const rows = [
  { id: 1, product: "book 1", stock: "Jon", status: 35, price: 120 },
  { id: 2, product: "laptop 2", stock: "Cersei", status: 42, price: 120 },
  { id: 3, product: "phone 3", stock: "Jaime", status: 45, price: 120 },
  { id: 4, product: "laptop 4", stock: "Arya", status: 16, price: 120 },
  { id: 5, product: "bycicle", stock: "Daenerys", status: null, price: 120 },
  { id: 6, product: "flower4", stock: null, status: 150, price: 120 },
  { id: 7, product: "phone5", stock: "Ferrara", status: 44, price: 120 },
  { id: 8, product: "smart watch5", stock: "Rossini", status: 36, price: 120 },
  { id: 9, product: "book3", stock: "Harvey", status: 65, price: 120 },
];
function Products() {
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

export default Products;
