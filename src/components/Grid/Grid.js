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
  dataSource = [], // array of objects
  columns =[], // array of objects 
  searchQuery={}, // object {field:'', query:''} 
  filters = {}, // object {[filterName]:[option1,option2]} - (|| for different options) and (&& for different filters) 
  pageLimit=100, // integer - max number of rows in a page
  showPaginationRow=false, // bool to enable paginationRow
  paginationRowGenerator, //function for paginationRow generator
  childGrid, // object {field:'', scrollHeight:'200px', columns, filters, searchQuery } where field of child data in dataSource
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