import './index.css'
import React, { useEffect } from 'react';
import Rows from './components/Rows';
import ColumnHeaders from './components/ColumnHeaders';
import { GridContextProvider, useGridContext } from './context/grid';
import { useFilters, useSearch } from './hooks';
const Grid = (props) => {
  return (
    <GridContextProvider>
      <GridComponent {...props} />
    </GridContextProvider>
  );
}

const GridComponent = ({dataSource = [], columns =[], searchQuery={}, filters = []}) =>{
  const {GridContextAction} = useGridContext()
  useSearch(searchQuery);
  useFilters(filters);
  useEffect(() => {
    const setDataAndColumns = () => {
      GridContextAction.setData(dataSource);
      GridContextAction.setColumns(columns);
    };
    setDataAndColumns();
  }, [dataSource, columns, GridContextAction]);
  return(
    <div className='table-container'>
      <table className='table'>
        <ColumnHeaders />
        <Rows/>
      </table>
    </div>
  )
}

export default Grid;