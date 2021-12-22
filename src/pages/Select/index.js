import React,{createContext} from "react";

const SelectContext=createContext();

const initState={
    selectOtt:null,
    currentDays:null,
    currentDate:null,
    currentTime:null,
    selectPay:null,
}