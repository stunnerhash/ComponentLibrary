import { useEffect, useMemo } from "react";
import { useGridContext } from "../context/grid"

const useSet = (object) =>{
  const {GridContextAction} = useGridContext()
  const [[key,value]] = useMemo(()=>Object.entries(object),[object])
  useEffect(()=>{
    GridContextAction.set({[key]:value});
  },[key, value, GridContextAction])
}
export default useSet;