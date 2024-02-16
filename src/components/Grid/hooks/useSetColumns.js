import { useEffect, useMemo } from "react";
import { useGridContext } from "../context/grid";

const useSetColumns = ({columns})=>{
  const {GridContextAction} = useGridContext()
  const memoColumns = useMemo(()=>JSON.stringify(columns),[columns])
  useEffect(() => {
    GridContextAction.setColumns(JSON.parse(memoColumns));
  }, [memoColumns, GridContextAction]);
}
export default useSetColumns;