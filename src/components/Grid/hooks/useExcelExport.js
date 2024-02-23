import { useGridContext } from "../context/grid";
import { convertJsonToAoa, convertToExcel, downloadExcelFile, flattenArrayOfObjects } from "../utils";


const deleteFieldsFromArray = ({data, fields=[]}) =>{
  data?.forEach(dataItem=>{
    fields?.forEach(fieldItem=>{
      delete dataItem?.[fieldItem];
    })
  })
}

const useExcelExport = () =>{
  const {GridContextSelector} = useGridContext();
  const childGrid = GridContextSelector.child()
  const filteredData = GridContextSelector.filteredData();
  const contextColumns = GridContextSelector.columns();

  const excelExport = ({showChild = true, columns})=>{
    const flattenedData = flattenArrayOfObjects(filteredData);
    if(!showChild) deleteFieldsFromArray({data:flattenedData, fields:[childGrid.field]})
    const aoa = convertJsonToAoa(flattenedData, (columns || contextColumns), childGrid);
    const excelBuffer = convertToExcel(aoa); 
    downloadExcelFile(excelBuffer, 'output.xlsx');
  }
  return excelExport;
}
export default useExcelExport;
