import './index.css'
import React, { forwardRef } from 'react';
import { GridContextProvider } from './context/grid';
import { useExposeMethods, useFilters, useSearch, useSet, useSetChildGrid, useSetColumns, useSetData } from './hooks';
import { DirectionalLayout } from './layout/DirectionalLayout/DirectionalLayout';
import Table from './components/Table';

const Grid = forwardRef(({
  dataSource = [], // array of objects
  columns =[], // array of objects 
  searchQuery={}, // object {field:'', query:''} 
  filters = {}, // object {[filterName]:[option1,option2]} - (|| for different options) and (&& for different filters) 
  pageLimit=100, // integer - max number of rows in a page
  childGrid, // object {field:'', scrollHeight:'200px', columns, filters, searchQuery } where field of child data in dataSource
  toolbar, // Your toolbar component, with all injected features
  pagination, // Your pagination componeont, with all injected features
  showCheckbox=false, // adds a checkbox column
  ...rest
}, ref) => {// selectors, actions, excelExport and other functionality can be accessed through ref
  return (
    <GridContextProvider>
      <GridComponent 
        dataSource={dataSource}
        columns={columns}
        searchQuery={searchQuery}
        filters={filters}
        pageLimit={pageLimit}
        childGrid={childGrid}
        toolbar={toolbar}
        showCheckbox={showCheckbox}
        ref={ref}
        pagination={pagination}
        {...rest}
      />
    </GridContextProvider>
  );
})

const GridComponent = forwardRef(({
  dataSource, columns, searchQuery, filters, pageLimit, childGrid, toolbar, showCheckbox, pagination,
}, ref) =>{
  useExposeMethods(ref)
  useSearch(searchQuery);
  useFilters(filters);
  useSetColumns(columns);
  useSetChildGrid(childGrid);
  useSetData(dataSource);
  useSet({showCheckbox})
  useSet({pageLimit});
  return(
    <DirectionalLayout direction='top' content={toolbar}>
      <DirectionalLayout direction='bottom' content={pagination}>
        <Table/>
      </DirectionalLayout>
    </DirectionalLayout>
  )
})

export default Grid;