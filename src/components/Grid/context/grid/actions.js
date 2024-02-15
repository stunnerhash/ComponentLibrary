import * as actionTypes from './types';

const contextActions = (dispatch) => {
  return {
    setData: (payload) => {
      dispatch({type:actionTypes.SET_DATA, payload});
    },
    setColumns: (payload) =>{
      dispatch({type:actionTypes.SET_COLUMNS, payload})
    }, 
    sort: (payload) =>{
      dispatch({type: actionTypes.SORT, payload});
    },
    search: (payload) =>{
      dispatch({type:actionTypes.SEARCH, payload})
    },
    filters: (payload) =>{  
      dispatch({type:actionTypes.FILTERS, payload})
    },
  };
}
 
export default contextActions;