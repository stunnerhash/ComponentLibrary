const contextSelectors = (state) => {
  return {
    get: (field)=>state[field],
    data: () => state.data,
    filteredData: () => state.filteredData,
    filteredDataLength: () => state.filteredData.length,
    columns: () => state.columns,
    sortOrder: () => state.sortOrder,
    slicedData: (start, end) => state.filteredData.slice(start,end),
    selectedRowValue:(index)=>state.selectedRows[index],
    selectedRowsIndex: ()=>{
      const {selectedRows} = state;
      const newSelectedRow = [];
      selectedRows.forEach((item,index)=>(item && newSelectedRow.push(index)))
      return newSelectedRow;
    },
    selectedRowsData:()=>{
      const {selectedRows, data} = state;
      const newSelectedRow=[];
      selectedRows.forEach((item,index)=>item && newSelectedRow.push(data[index]))
      return newSelectedRow;
    },
    child: () => state.child
  };
}
 
export default contextSelectors;