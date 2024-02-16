import { useEffect} from "react";
import { useGridContext } from "../context/grid";

function useSearch({field = '', query = ''}) {
  const {GridContextAction} = useGridContext()
  useEffect(()=>{
    GridContextAction.search({key:field, query});
  },[field,query,GridContextAction])
}

export default useSearch;