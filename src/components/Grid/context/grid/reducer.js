import { extractNestedValue } from '../../utils';
import * as actionTypes from './types'

export const initialState = {
  data:[],
  filteredData: [],
  columns:[],
  sortOrder:{
    key:'',
    order:''
  },
  search:{
    key:'',
    query:''
  },
  child:{
    field:'',
    columns:[],
    filters:{},
    searchQuery:{},
    scrollHeight:'200px'
  },
  filters:{}
}

export function contextReducer(state, action){
  let newFilteredData;
  switch(action.type){
    case actionTypes.SET_DATA:
      return { 
        ...state, 
        data:[...action.payload],
      }
    case actionTypes.SET_COLUMNS:
      return {
        ...state, 
        columns:[...action.payload]
      }
    case actionTypes.SORT:
      const newSortKey = action.payload.key;
      const newSortOrder = state.sortOrder.order === 'desc' ? 'asc': 'desc';
      newFilteredData = getSortedData(state.filteredData, {key:newSortKey, order:newSortOrder})
      return {
        ...state,
        filteredData: newFilteredData,
        sortOrder: {
          key:newSortKey,
          order:newSortOrder
        },
      }
    case actionTypes.SEARCH:
      newFilteredData = getSearchedData(state.data, action.payload)
      newFilteredData = getFilteredData(newFilteredData, state.filters)
      return {
        ...state, 
        filteredData: newFilteredData,
        search: {...action.payload}
      }
    case actionTypes.FILTERS:
      newFilteredData = getSearchedData(state.data, state.search)
      newFilteredData = getFilteredData(newFilteredData, action.payload);
      return {
        ...state,
        filteredData: newFilteredData,
        filters: {...action.payload}
      }
    case actionTypes.SET_CHILD_GRID:
      return{
        ...state,
        child:{
          ...state.child,
          ...action.payload
        }
      }
    default:{
      throw new Error (`Unhandled action type: ${action.type}`);
    }
  }
}

const getSearchedData = (data, searchQuery) =>{
  let newData = [...data];
  const {key, query} = searchQuery;
  if(key) newData = data.filter((item)=>{
    const itemValue = extractNestedValue(item, key);
    return itemValue?.includes(query);
  })
  return newData;
}

const getFilteredData = (data,filters)=>{
  let newData = [...data];
  for (const key in filters) {
    const values = filters[key];
    newData = newData.filter(data => values.includes(extractNestedValue(data, key)));
  }
  return newData;
}

const getSortedData = (data, sortOrder) =>{
  const {key, order} = sortOrder;
  const newData = data.sort((a,b) => {
    let valueA = extractNestedValue(a,key), valueB = extractNestedValue(b, key);
    const typeA = typeof valueA;
    if(order === 'desc') [valueA,valueB] = [valueB,valueA]

    if(['number', 'boolean'].includes(typeA)) return valueA-valueB;
    else if(['string'].includes(typeA))return valueA.localeCompare(valueB, undefined, {sensitivity: 'accent'})
    else return 0;
  })
  return newData;
}