import ColumnHeaders from "../ColumnHeaders"
import Rows from "../Rows"

const Table = () =>{
  return (
    <div className='table-container'>
      <table className='table'>
        <ColumnHeaders />
        <Rows/> 
      </table>
    </div>
  )
}

export default Table;