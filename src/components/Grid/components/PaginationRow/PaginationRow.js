import { usePagination } from "../../hooks";

const PaginationRow = ()=>{
  const {prev, next, jump, currentPage, currentPaginationRow} = usePagination();
  return (
    <div className="pagination-container">
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
export default PaginationRow;