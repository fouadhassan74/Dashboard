import React, { useState } from "react";
import "../DataTable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
function DataTable() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "UserName",
      width: 220,
      renderCell: (params) => {
        return (
          <div className='userinfo'>
            <img className='img' src={params.row.img} alt='avatar' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "status",
      headerName: "Status",
      width: 90,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: "none" }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className='dataTable' style={{ height: 700, width: "100%" }}>
      <DataGrid
        className='dataGrid'
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 8 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;
