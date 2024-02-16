import Grid from "../../Grid";
import { useGridContext } from "../../context/grid";

const ChildGrid = ({data}) =>{
  const { GridContextSelector } = useGridContext() 
  const {field, columns, scrollHeight, filters, searchQuery } = GridContextSelector.child()
  return (
    <tr style={{height:scrollHeight}}>
      <td colSpan={columns.length}>
        <Grid
          dataSource={data?.[field]}
          columns={columns}
          filters={filters}
          searchQuery={searchQuery}
        />
      </td>
    </tr>
  )
}
export default ChildGrid;