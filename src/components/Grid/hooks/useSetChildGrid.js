import { useEffect, useMemo } from "react";
import { useGridContext } from "../context/grid";

const useSetChildGrid = (childGrid)=>{
  const {GridContextAction} = useGridContext()
  const memoColumns = useMemo(()=>JSON.stringify(childGrid),[childGrid])
  useEffect(() => {
    if(memoColumns) GridContextAction.setChild(JSON.parse(memoColumns));
  }, [memoColumns, GridContextAction]);
}
export default useSetChildGrid;