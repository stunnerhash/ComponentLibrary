const Pagination = ({inject, className='pagination-container'}) =>{
  return (
    <div className={className} >
      {inject.map((PaginationItem, index)=><PaginationItem key={index}/>)}
    </div>
  )
}
export default Pagination;