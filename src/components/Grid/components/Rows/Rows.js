import { useGridContext } from "../../context/grid";
import { useSearch } from "../../hooks";
import Columns from "../Columns/Columns";
const Rows = () => {
  const {GridContextSelector} = useGridContext() 
  return ( 
    <tbody>
      {GridContextSelector.filteredData().map((item, index)=>
        <Columns
          key={index}
          data={item}
        />
      )}
    </tbody>
  );
}
 
export default Rows;