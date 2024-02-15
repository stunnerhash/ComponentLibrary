import { useMemo } from "react";
import { useGridContext } from "../../context/grid";

const ColumnHeader = ({field,text, width}) => {
  const {GridContextAction, GridContextSelector} = useGridContext();
  const arrowIcon = useMemo(()=>{
    const {key, order} = GridContextSelector.sortOrder();
    if(key === field) return (order === "asc" ? "↑" : "↓");
  }, [field, GridContextSelector])

  const handleSort = () =>{
    GridContextAction.sort({key:field})
  }
  return (
    <th onClick={handleSort} style={{width:width}}>
      <div>
        <span> {text} {arrowIcon} </span>
      </div>
    </th>
  );
}
export default ColumnHeader;