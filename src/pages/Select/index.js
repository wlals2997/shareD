
import React, { createContext, useMemo, useReducer } from 'react';
import { SelectOTT } from './SelectOTT'
import {SelectDate} from './SelectDate';

export const SelectContext = createContext({
  selectData: [],
  dispatch:()=>{},
}); //Context 생성

const initialState = {
  selectOtt: null, 
  currentDate: null,
  startTime: null,
  closeTime: null,
  price:0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SelectOTT':
      return {
        ...state,
        selectOtt: action.value
      };
 
    default:
      return state;
  }
};
//let store =createStore(reducer)

const Selector = () => {
  const [state,dispatch]=useReducer(reducer,initialState);
  const valueMemo = useMemo(() => ({selectData: state.selectData, dispatch }), [state.selectData]);
  return (
    <SelectContext.Provider value={valueMemo}>
    <SelectOTT/>
  <SelectDate/>
    <div>{state.startTime}</div>
    <div>{state.closetTime}</div>
    </SelectContext.Provider>
   
  );
};
export default Selector;
