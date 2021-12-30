import { Provider } from 'react-redux';
import { createStore } from 'redux';
import React, { createContext, useMemo, useReducer } from 'react';
import { SelectOTT } from './SelectOTT/SelectOTT';

const SelectContext = createContext({
  selectData: {},
  dispatch:()=>{}
}); //Context 생성

const initialState = {
  selectOtt: null, 
  currentDate: null,
  startTime: null,
  closeTime: null,
  price:null,
  selectPay: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SelectOTT':
      return {
        ...state,
        selectOtt: action.ott
      };
    case 'SelecDate':
      return {
        ...state,
       closeTime: action.time,
       price:action.price
      };
    default:
      return state;
  }
};
let store =createStore(reducer)

const Selector = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => ({selectData: state, dispatch }), [state]);
  return (
    <SelectContext.Provider value={{ selectData: state, dispatch }}>
      {children}
    </SelectContext.Provider>
  );
};
export { SelectContext, Provider };
