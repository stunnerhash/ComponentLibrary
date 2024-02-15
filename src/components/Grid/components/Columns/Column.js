
import { useMemo } from "react";
import { extractNestedValue } from "../../utils";
const Column = (props) =>{
  const {data={}, field} = props;
  const renderedComponent = useMemo(()=>{
    const {data={}, template, field} = props;
    if(template) return template({rowData:data, value: extractNestedValue(data, field)})
  },[props])
  return (
    <td>{renderedComponent || extractNestedValue(data, field)}</td>
  )
}
 
export default Column;