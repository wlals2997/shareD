import React, { createContext, useMemo, useReducer } from 'react';
import { SelectOTT } from './SelectOTT/SelectOTT';

const SelectContext = createContext({
  dispatch:()=>{}
}); //Context 생성

const initialState = {
  selectOtt: null, //   초기값
  currentDate: null,
  startTime: null,
  closeTime: null,
  selectPay: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SelectOTT':
      return {
        ...state,
        selectOtt: action.ott,
      };
    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({ initialState: state, dispatch }), [state]);
  return (
    <SelectContext.Provider value={{ initialState: state, dispatch }}>
      {children}
    </SelectContext.Provider>
  );
};
export { SelectContext, Provider };
