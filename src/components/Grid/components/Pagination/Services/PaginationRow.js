import { usePagination } from "../../../hooks";

const props ={

}

const PaginationRowWithConfig = ()=>{
  const {prev, next, jump, currentPage, currentPaginationRow} = usePagination();
  return (
    <div className="pagination-row-container">
      <button className="pagination-button" onClick={prev}>prev</button>
        {currentPaginationRow.map((item, index) => (
            <button 
              className={`pagination-button ${item === currentPage ? 'active' : ''}`} 
              key={index} 
              onClick={() => jump(item)}
            > {item}
            </button>
        ))}
      <button className="pagination-button" onClick={next}>next</button>
    </div>
  )
}
export default function PaginationRow (args=props){
  return PaginationRowWithConfig.bind(this,{...props, ...args})
};