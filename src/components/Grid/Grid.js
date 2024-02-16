import './index.css'
import React from 'react';
import Rows from './components/Rows';
import ColumnHeaders from './components/ColumnHeaders';
import { PaginationRow } from './components/PaginationRow';
import { GridContextProvider } from './context/grid';
import { useFilters, usePagination, useSearch, useSetChildGrid, useSetColumns, useSetData } from './hooks';

const Grid = (props) => {
  return (
    <GridContextProvider>
      <GridComponent {...props} />
    </GridContextProvider>
  );
}

const GridComponent = ({
  dataSource = [], 
  columns =[], 
  searchQuery={}, 
  filters = {}, 
  showPaginationRow=false, 
  pageLimit=100, 
  paginationRowGenerator,
  childGrid,
}) =>{
  useSearch(searchQuery);
  useFilters(filters);
  useSetColumns({columns})
  useSetChildGrid(childGrid)
  useSetData({dataSource})
  const Pagination = usePagination({pageLimit, paginationRowGenerator})
  
  return(
    <>
      <div className='table-container'>
        <table className='table'>
          <ColumnHeaders />
          <Rows data={Pagination.currentData}/>
        </table>
      </div>
      {showPaginationRow && <PaginationRow {...Pagination}/>}
    </>
  )
}

export default Grid;