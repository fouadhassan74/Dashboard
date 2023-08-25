import React from "react";
import "./list.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DataTable from "../../components/DataTable/DataTable";
function List() {
  return (
    <div className='listPage'>
      <Sidebar />
      <div className='listCOntainer'>
        <Navbar />
        <div className='dataTable'>
          <DataTable />
        </div>
      </div>
    </div>
  );
}

export default List;
