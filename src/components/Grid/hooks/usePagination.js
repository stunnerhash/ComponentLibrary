import { useCallback, useEffect, useMemo, useState } from "react";
import { useGridContext } from "../context/grid";

const defaultPaginationRowGenerator = ({maxPage, currentPage}) =>{
  const newPaginationRow = [1];
  if(maxPage>1) newPaginationRow.push(maxPage);
  [0,1,2,5,10,20,50,100,200,500].forEach((item)=>{
    const left = currentPage-item, right = currentPage+item;
    if(!newPaginationRow.includes(left) && newPaginationRow.length<=10 && left>1){
      newPaginationRow.push(left);
    }
    if(!newPaginationRow.includes(right) && newPaginationRow.length<=10 && right<maxPage){
      newPaginationRow.push(right);
    }
  })
  newPaginationRow.sort((a,b)=>a-b)
  return newPaginationRow;
}

function usePagination({pageLimit, paginationRowGenerator = defaultPaginationRowGenerator}) {
  const {GridContextSelector} = useGridContext()
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState();
  const [currentPaginationRow, setCurrentPaginationRow] = useState([]);
  const dataLength = useMemo(()=>GridContextSelector.filteredDataLength(),[GridContextSelector])
  const maxPage = Math.ceil(dataLength / pageLimit);

  const getCurrentData = useCallback(() => {
    const begin = (currentPage - 1) * pageLimit;
    const end = begin + pageLimit;
    const data = GridContextSelector.slicedData(begin, end);
    setCurrentData(data);
  },[currentPage, pageLimit, GridContextSelector])
  
  useEffect(() => {
    setCurrentPaginationRow(paginationRowGenerator({maxPage, currentPage}));
  }, [maxPage, currentPage, paginationRowGenerator]);

  useEffect(() => {
    getCurrentData()
  }, [getCurrentData, currentPage]);
  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }
  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }
  function jump(page) {
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  return { next, prev, jump, currentData, currentPage, maxPage, currentPaginationRow };
}

export default usePagination;