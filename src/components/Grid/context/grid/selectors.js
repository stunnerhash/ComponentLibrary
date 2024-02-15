const contextSelectors = (state) => {
  return {
    data: () => state.data,
    filteredData: () => state.filteredData,
    columns: () => state.columns,
    sortOrder: () => state.sortOrder,
  };
}
 
export default contextSelectors;