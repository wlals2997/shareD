import React, { createContext,useReducer } from 'react';
import {SelectOTT} from './SelectOTT/SelectOTT';


const SelectContext = createContext({});  //Context 생성

const initialState = {
  selectOtt: null,    //   초기값
  currentDate: null,
  startTime:null,
  closeTime: null,
  selectPay: null
};

const reducer =(state = initialState,action) =>{
    switch (action.type){
        case SelectOTT:
            
        return {
            ...state,
            selectOtt:action. ott
    };
    default:
        return state;
    }
};



const Provider=({children})=>{
    const [state,dispatch]=useReducer(reducer,initialState);
    const value ={state,dispatch};
    return(
<SelectContext.Provider value={value}>{children}</SelectContext.Provider>



        )
}
export {SelectContext,Provider};