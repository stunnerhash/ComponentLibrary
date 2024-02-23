import { useEffect, useMemo } from "react";
import { useGridContext } from "../context/grid";

const useSetColumns = (columns)=>{
  const {GridContextAction} = useGridContext()
  const memoColumns = useMemo(()=>JSON.stringify(columns),[columns])
  useEffect(() => {
    let newColumns = JSON.parse(memoColumns);
    GridContextAction.setColumns(newColumns);
  }, [memoColumns, GridContextAction]);
}
export default useSetColumns;