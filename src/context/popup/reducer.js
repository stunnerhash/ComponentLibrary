import * as actionTypes from './types'

export const initialState = {
  isOpen:false,
  success:true,
  message:""
}

export function contextReducer(state, action){
  const { message, success} = action;
  switch(action.type){
    case actionTypes.OPEN:
      return { 
        ...state, 
        isOpen:true, 
        success, 
        message,
      }
    case actionTypes.CLOSE:
      return { 
        ...state, 
        isOpen:false,
        message:'',
      }
    default:{
      throw new Error (`Unhandled action type: ${action.type}`);
    }
  }
}