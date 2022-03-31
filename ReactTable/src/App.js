import React from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
function App() {
  const columnDefs= [
    { headerName: "Sr_No", field: "Sr_No" },
    { headerName: "EstateOfficeCode", field: "EstateOfficeCode",},
    {headerName: "UrbanEstateCode",field: "UrbanEstateCode",},
    { headerName: "UrbanEstateName", field: "UrbanEstateName" },
    { headerName: "Address1", field: "Address1" },
    { headerName: "Address2", field: "Address2" },
    { headerName: "Address3", field: "Address3" },
    { headerName: "State", field: "State" },
    { headerName: "PIN", field: "PIN" },
    { headerName: "ZonePotential", field: "ZonePotential" },
    { headerName: "DateFrom", field: "DateFrom" },
    { headerName: "DateTo", field: "DateTo" },
    { headerName: "CreatedBy", field: "CreatedBy" },
    { headerName: "CreatedDate", field: "CreatedDate" },
    { headerName: "ModifiedBy", field: "ModifiedBy" },
    { headerName: "ModifiedDate", field: "ModifiedDate" },

    ]

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("http://127.0.0.1:8000/department").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp})})
}
  return (
    <div className="App">
      <div className="ag-theme-alpine" style={ {height: '1000px',width:'2200px',overflow:'auto'} }>
        <AgGridReact
            columnDefs={columnDefs}
            // rowData={rowData}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;