import { useId, useMemo } from "react";
import { useGridContext } from "../../context/grid";

const CheckboxColumn = ({dataIndex}) =>{
  const id = useId();
  const {GridContextAction, GridContextSelector} = useGridContext()
  const checked = useMemo(()=>GridContextSelector.selectedRowValue(dataIndex),[GridContextSelector,dataIndex])
  const handleCheckbox = (e) =>{
    GridContextAction.setSelectedRows([{index:dataIndex, value:e.target.checked}])
  }
  return (
    <td>
      <input id={id} type="checkbox" checked={checked} onChange={handleCheckbox} style={{ transform: 'scale(1.5)' }}/>
    </td>
  )
}
export default CheckboxColumn;