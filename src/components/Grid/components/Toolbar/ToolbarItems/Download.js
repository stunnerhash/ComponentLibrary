import { useExcelExport } from "../../../hooks";
const Download = ()=>{
  const excelExport = useExcelExport();
  return (
    <div> <button onClick={excelExport}>Download</button> </div>
  )
}

export default Download;