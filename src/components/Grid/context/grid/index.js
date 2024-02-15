import { useMemo, useReducer, createContext, useContext } from 'react';
import { initialState, contextReducer } from './reducer';
import contextActions from './actions';
import contextSelectors from './selectors'

const GridContext = createContext();

function GridContextProvider({ children }) {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
}

function useGridContext() {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error('useGridContext must be used within a GridContextProvider');
  }
  const [state, dispatch] = context;
  const GridContextAction = useMemo(()=>contextActions(dispatch), [dispatch]);
  const GridContextSelector = useMemo(()=>contextSelectors(state),[state]);
  return { state, GridContextAction, GridContextSelector };
}

export { GridContextProvider, useGridContext };
