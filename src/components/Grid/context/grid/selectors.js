const contextSelectors = (state) => {
  return {
    data: () => state.data,
    filteredData: () => state.filteredData,
    filteredDataLength: () => state.filteredData.length,
    columns: () => state.columns,
    sortOrder: () => state.sortOrder,
    slicedData: (start, end) => state.filteredData.slice(start,end),
    child: () => state.child
  };
}
 
export default contextSelectors;