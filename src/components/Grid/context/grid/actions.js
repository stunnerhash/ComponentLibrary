import * as actionTypes from './types';

const contextActions = (dispatch) => {
  return {
    set:(payload)=>{
      dispatch({type: actionTypes.SET, payload})
    },
    setData: (payload) => {
      dispatch({type:actionTypes.SET_DATA, payload});
    },
    setColumns: (payload) =>{
      dispatch({type:actionTypes.SET_COLUMNS, payload})
    }, 
    sort: (payload) =>{
      dispatch({type: actionTypes.SORT, payload});
      dispatch({type:actionTypes.RESET})
    },
    search: (payload) =>{
      dispatch({type:actionTypes.SEARCH, payload})
      dispatch({type:actionTypes.RESET})
    },
    filters: (payload) =>{  
      dispatch({type:actionTypes.FILTERS, payload})
      dispatch({type:actionTypes.RESET})
    },
    setChild: (payload)=>{
      dispatch({type:actionTypes.SET_CHILD_GRID, payload})
    },
    setSelectedRows: (payload)=>{
      dispatch({type:actionTypes.SET_SELECTED_ROWS, payload})
    },
    reset:()=>{
      dispatch({type:actionTypes.RESET})
    }
  };
}
 
export default contextActions;