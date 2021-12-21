
import React,{ createContext } from 'react';
import { Routes } from 'react-router-dom';
import { ottService } from './data';

 export const SelectContext=React.createContext();//범위생성

const Select=()=>{
    return(
<SelectContext.Provider value={ottService}>
<Routes>
    
</Routes>


</SelectContext.Provider>

    )
}
