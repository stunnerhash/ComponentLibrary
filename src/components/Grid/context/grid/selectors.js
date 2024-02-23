const contextSelectors = (state) => {
  return {
    get: (field)=>state[field],
    data: () => state.data,
    filteredData: () => state.filteredData,
    filteredDataLength: () => state.filteredData.length,
    columns: () => state.columns,
    sortOrder: () => state.sortOrder,
    slicedData: (start, end) => state.filteredData.slice(start,end),
    getSelectedRowValue:(index)=>state.selectedRows[index],
    child: () => state.child
  };
}
 
export default contextSelectors;