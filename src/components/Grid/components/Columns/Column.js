
import { useId, useMemo } from "react";
import { extractNestedValue } from "../../utils";
import { useGridContext } from "../../context/grid";
const Column = (props) =>{
  const id = useId()
  const {data={}, field, colIndex, handleShowChild} = props;
  const renderedComponent = useMemo(()=>{
    const {data={}, template, field} = props;
    if(template) return template({rowData:data, value: extractNestedValue(data, field)})
  },[props])

  const { GridContextSelector } = useGridContext() 
  const {field:childField} = GridContextSelector.child()
  const showCheckbox = (colIndex === 0 && data?.[childField]);
  return (
    <td style={{position:'relative', paddingLeft:(showCheckbox?"20px":"0")}}>
      {showCheckbox && <input id={id} type="checkbox" onChange={handleShowChild} style={{position:'absolute', left:5, marginRight:'1px'}}/>}
      {renderedComponent ||  extractNestedValue(data, field) }
    </td>
  )
}
 
export default Column;