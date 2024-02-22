import React from 'react'
import FilterLeads from './FilterLeads';
import ViewLeadsTable from './ViewLeadsTable';
import { FilterDataProvider } from '../../context/FilterContext';

const ViewLeads = () => {

  return (
    <FilterDataProvider>
      <FilterLeads />
      <ViewLeadsTable />
    </FilterDataProvider>
  );
};


export default ViewLeads