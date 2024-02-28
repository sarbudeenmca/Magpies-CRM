import React from 'react'
import DataControls from './DataControls';
import DataTable from './DataTable';
import { DataControlsProvider } from '../../context/DataControlsContext';
const ViewLeads = () => {

  return (
    <DataControlsProvider>
      <DataControls />
      <DataTable />
    </DataControlsProvider>
  );
};


export default ViewLeads