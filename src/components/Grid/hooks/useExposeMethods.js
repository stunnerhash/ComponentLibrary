import { useImperativeHandle } from "react";
import { useGridContext } from "../context/grid";
import useExcelExport from "./useExcelExport";

const useExposeMethods = (ref) =>{
  const excelExport = useExcelExport();
  const { GridContextAction,GridContextSelector } = useGridContext()
  useImperativeHandle(ref, ()=>({
    excelExport,
    selector: GridContextSelector,
    action: GridContextAction,
  }),[excelExport, GridContextAction, GridContextSelector])
}

export default useExposeMethods;