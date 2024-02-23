
import { useState } from "react";
import { useGridContext } from "../../context/grid";
import Column from "./Column";
import ChildGrid from "../ChildGrid";
import CheckboxColumn from "./CheckboxColumn";

const Columns = ({data = {}}) => {
  const { GridContextSelector } = useGridContext() 
  const [showChild, setShowChild] = useState(false);
  const handleShowChild = (e)=>{
    setShowChild(e.target.checked);
  }
  return (
    <>
      <tr>
        {GridContextSelector.get('showCheckbox') && <CheckboxColumn dataIndex={data.index}/>}
        {GridContextSelector.columns().map((column,index)=>(
          <Column
            key={index}
            data={data}
            colIndex={index}
            handleShowChild={handleShowChild}
            {...column}
          />
        ))}
      </tr>
      {showChild &&
        <ChildGrid
          data={data}
        />
      }
    </>
  );
}
export default Columns
