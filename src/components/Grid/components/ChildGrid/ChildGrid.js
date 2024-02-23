import Grid from "../../Grid";
import { useGridContext } from "../../context/grid";

const ChildGrid = ({data}) =>{
  const { GridContextSelector } = useGridContext() 
  const {field, columns, scrollHeight, filters, searchQuery, childGrid } = GridContextSelector.child()
  return (
    <tr style={{height:scrollHeight}}>
      {GridContextSelector.get('showCheckbox') && <td></td>}
      <td colSpan={columns.length} className="child-table-container">
        <Grid
          dataSource={data?.[field]}
          columns={columns}
          filters={filters}
          searchQuery={searchQuery}
          childGrid={childGrid}
        />
      </td>
    </tr>
  )
}
export default ChildGrid;