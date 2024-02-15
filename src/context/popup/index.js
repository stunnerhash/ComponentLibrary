import { useMemo, useReducer, createContext, useContext } from 'react';
import { initialState, contextReducer } from './reducer';
import contextActions from './actions';
import contextSelectors from './selectors'

const PopupContext = createContext();

function PopupContextProvider({ children }) {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <PopupContext.Provider value={value}>{children}</PopupContext.Provider>;
}

function usePopupContext() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopupContext must be used within a PopupContextProvider');
  }
  const [state, dispatch] = context;
  const popupContextAction = contextActions(dispatch);
  const popupContextSelector = contextSelectors(state);
  return { state, popupContextAction, popupContextSelector };
}

export { PopupContextProvider, usePopupContext };
