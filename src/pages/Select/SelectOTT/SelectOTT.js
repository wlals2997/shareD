import React, { useContext,useState,useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import netflix_Logo from '../../../data/netflix.png'
import wave_Logo from '../../../data/wave.png'
import { SelectContext } from '../index';
import * as A from './SelectOTT.style'



const SelectOTT = () => {
  let [selectOTT,setSelectOTT]=useState(undefined)
  const navigate = useNavigate();
const {dispatch}= useContext(SelectContext);

const setService=useCallback((e)=>{
setSelectOTT(e.target.innerText);

dispatch({type:'SelectOTT',value:selectOTT })
},[selectOTT]);
navigate(`/select/${selectOTT}/date`)

  return (
    <A.Back>
  <A.Container>
<A.Card>
<A.SelectboxTitle>
  보고싶은 서비스를 선택하세요.
  </A.SelectboxTitle>
<A.Selectbox  onClick={setService}>
<A.Select><A.SelectImg src={ netflix_Logo} alt='netflix'></A.SelectImg>Netflix</A.Select>
<A.Select ><A.SelectImg src={ wave_Logo} alt='wave' ></A.SelectImg>Wave</A.Select>

</A.Selectbox>

</A.Card>
  </A.Container>
  </A.Back>
  );
};
export default SelectOTT;
