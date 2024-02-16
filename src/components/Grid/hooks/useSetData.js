import { useEffect } from "react";
import { useGridContext } from "../context/grid";

const useSetData = ({dataSource}) =>{
  const {GridContextAction} = useGridContext()
  useEffect(() => {
    GridContextAction.setData(dataSource);
  }, [dataSource, GridContextAction]);
}
export default useSetData;