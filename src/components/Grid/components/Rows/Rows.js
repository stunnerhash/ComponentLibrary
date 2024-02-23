import { usePagination } from "../../hooks";
import Columns from "../Columns/Columns";

const Rows = () => {
  const {currentData} = usePagination();
  return ( 
    <tbody>
      {currentData?.map((item)=>
        <Columns
          key={item.index}
          data={item}
        />
      )}
    </tbody>
  );
}
 
export default Rows;