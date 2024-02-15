import { useEffect, useMemo } from "react";
import { useGridContext } from "../context/grid";

const useFilters = (filters) => {
  const {GridContextAction} = useGridContext()
  //JSON.stringify helps memoize the values inside filters
  const memoFilters = useMemo(()=>JSON.stringify(filters), [filters])
  useEffect(()=>{
    console.log('useFilter', JSON.parse(memoFilters));
    if(memoFilters.length) GridContextAction.filters(JSON.parse(memoFilters));
  },[memoFilters, GridContextAction])
}
 
export default useFilters;