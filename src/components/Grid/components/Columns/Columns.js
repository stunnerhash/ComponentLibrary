
import { useGridContext } from "../../context/grid";
import Column from "./Column";

const Columns = ({data = {}}) => {
  const { GridContextSelector } = useGridContext() 
  return (
    <tr>
      {GridContextSelector.columns().map((column,index)=>(
        <Column
          key={index}
          data={data}
          {...column}
        />
      ))}
    </tr>
  );
}
export default Columns