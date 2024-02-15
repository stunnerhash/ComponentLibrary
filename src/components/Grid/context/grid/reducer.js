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
        columns:action.payload
      }

    case actionTypes.SORT:
      const newSortKey = action.payload.key;
      const newSortOrder = state.sortOrder.order === 'desc' ? 'asc': 'desc';
      newFilteredData = state.filteredData.sort((a,b) => {
        let valueA = extractNestedValue(a,newSortKey), valueB = extractNestedValue(b, newSortKey);
        const typeA = typeof valueA;
        if(newSortOrder === 'desc') [valueA,valueB] = [valueB,valueA]
        if(['number', 'boolean'].includes(typeA)){
          return valueA-valueB;
        }else if(['string'].includes(typeA)){
          return valueA.localeCompare(valueB, undefined, {sensitivity: 'accent'})
        }else {
          return 0;
        }
      })
      return {
        ...state,
        filteredData: newFilteredData,
        sortOrder: {
          key:newSortKey,
          order:newSortOrder
        },
      }

    case actionTypes.SEARCH:
      const newSearchkey = action.payload.key
      const newSearchQuery = action.payload.query;
      if(!newSearchkey) newFilteredData = state.data;
      else newFilteredData = state.data.filter((item)=>{
        const itemValue = extractNestedValue(item, newSearchkey);
        return itemValue?.includes(newSearchQuery);
      })
      return {
        ...state, 
        filteredData: newFilteredData,
      }
      
    case actionTypes.FILTERS:
      const newFilters = action.payload;
      console.log("action.payload",action.payload);
      newFilteredData = [...state.data];
      console.log("newFilters",newFilters)
      for (const key in newFilters) {
        const values = newFilters[key];
        newFilteredData = newFilteredData.filter(data => values.includes(extractNestedValue(data, key)));
      }
      return {
        ...state,
        filteredData: newFilteredData
      }
    default:{
      throw new Error (`Unhandled action type: ${action.type}`);
    }
  }
}