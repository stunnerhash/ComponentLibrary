import { useCallback, useEffect, useMemo, useState } from "react";
import { useGridContext } from "../context/grid";

const paginationRowGenerator = ({maxPage, currentPage}) =>{
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

function usePagination() {
  const {GridContextAction,GridContextSelector} = useGridContext()
  
  const [currentData, setCurrentData] = useState();
  const [currentPaginationRow, setCurrentPaginationRow] = useState([]);
  const dataLength = useMemo(()=>GridContextSelector.filteredDataLength(),[GridContextSelector])

  const pageLimit = GridContextSelector.get('pageLimit');
  const currentPage = GridContextSelector.get('currentPage');
  const maxPage = Math.ceil(dataLength / pageLimit);

  const getCurrentData = useCallback(() => {
    const begin = (currentPage - 1) * pageLimit;
    const end = begin + pageLimit;
    const data = GridContextSelector.slicedData(begin, end);
    setCurrentData(data);
  },[currentPage, pageLimit, GridContextSelector])
  
  useEffect(() => {
    setCurrentPaginationRow(paginationRowGenerator({maxPage, currentPage}));
  }, [maxPage, currentPage]);

  useEffect(() => {
    getCurrentData()
  }, [getCurrentData]);
  
  function next() {
    GridContextAction.set({currentPage: Math.min(currentPage + 1, maxPage)})
  }
  function prev() {
    GridContextAction.set({currentPage: Math.max(currentPage - 1, 1)})
  }
  function jump(page) {
    const pageNumber = Math.max(1, page);
    GridContextAction.set({currentPage: Math.min(pageNumber, maxPage)})
  }

  return { next, prev, jump, currentData, currentPage, maxPage, currentPaginationRow };
}

export default usePagination;