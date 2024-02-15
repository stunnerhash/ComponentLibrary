import { useEffect} from "react";
import { useGridContext } from "../context/grid";

function useSearch({field = '', query = ''}) {
  const {GridContextAction} = useGridContext()
  useEffect(()=>{
    console.count("newSearch");
    GridContextAction.search({key:field, query});
  },[field,query,GridContextAction])
}

export default useSearch;