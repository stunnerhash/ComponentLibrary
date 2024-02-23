import { useId, useMemo } from "react"
import { useGridContext } from "../../context/grid"
import { usePagination } from "../../hooks"

const CheckboxHeader = () =>{
  const id = useId()
  const {currentData} = usePagination();
  const {GridContextSelector,GridContextAction} = useGridContext()
  const handleCheckbox = (e) =>{
    const {checked} = e.target;
    const selectedRows = currentData.map(data=>({index:data.index, value:checked}))
    GridContextAction.setSelectedRows(selectedRows);
  }
  const checked = useMemo(()=>{
    const checked = currentData?.reduce((acc, data)=> acc && GridContextSelector.selectedRowValue(data.index), true) 
    return !!checked;
  }, [currentData, GridContextSelector]);
  return (
    <th style={{width:'20px'}}>
      <input id={id} type="checkbox" checked={checked} onChange={handleCheckbox} style={{ transform: 'scale(1.5)' }}/>
    </th>
  )
}
export default CheckboxHeader