import { useGridContext } from "../../context/grid";
import ColumnHeader from "./ColumnHeader";

const ColumnHeaders = () => {
  const {GridContextSelector} = useGridContext() 
  return ( 
    <thead>
      <tr>
        {GridContextSelector.columns().map((column, index)=>
          <ColumnHeader
            key={index}
            {...column}
          />
        )}
      </tr>
    </thead>
  );
}
export default ColumnHeaders;