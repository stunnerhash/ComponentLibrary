import * as actionTypes from './types';

const contextActions = (dispatch) => {
  return {
    open: (action) => {
      dispatch({type:actionTypes.OPEN, ...action});
    },
    close: () =>{
      dispatch({type:actionTypes.CLOSE})
    }
  };
}
 
export default contextActions;