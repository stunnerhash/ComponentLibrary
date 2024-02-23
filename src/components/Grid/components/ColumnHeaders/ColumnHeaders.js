import { useGridContext } from "../../context/grid";
import CheckboxHeader from "./CheckboxHeader";
import ColumnHeader from "./ColumnHeader";

const ColumnHeaders = () => {
  const {GridContextSelector} = useGridContext()

  return ( 
    <thead>
      <tr>
        {GridContextSelector.get('showCheckbox') && <CheckboxHeader/>}
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
