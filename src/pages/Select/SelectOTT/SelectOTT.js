import React, { useContext } from 'react';
// import { Row, Button, Accordion, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ottService } from '../../../data/data';
import { SelectContext } from '../index';
import SelectContainer from './SelectOTT.style';
import styled from 'styled-components';

const Back= styled.div`
background:#F8F8F8;
`
const Card=styled.div`
background:white;
max-width: 640px;
    padding: 0 20px;
  width: 100%;
  min-width: 200px;
  padding: 8px 10px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 8px;
  
`
const SelectboxTitle=styled.h2`
display:block;
text-align:left;
font-size: 18px;
line-height: 50px;
margin: 0;
font-weight: bold;
margin: 10px 0;
`
const Selectbox=styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-between;
gap:9px

`
const Select=styled.div`
display: flex;
    flex:1 0 ;
    
    flex-direction: column;
    height: 75px;
    align-items: center;
    padding-top: 5px;
    background-color: #F8F8F8;
    border-radius: 8px;
    cursor: pointer;
    border: none;
`
const SelectOTT = () => {
  const navigate = useNavigate();
const {dispatch}= useContext(SelectContext);
  return (
    <Back>
  <SelectContainer>
<Card>
<SelectboxTitle>
  보고싶은 서비스를 선택하세요.
  </SelectboxTitle>
<Selectbox>
{Object.entries(ottService).map((ott, i)=> {
              console.log(ott);
              //    let object=Object.entries(ottService);
              //    console.log(object);
              return (
                <Select
                  key={i}
                  onClick={() => {
                    dispatch({type:'SelectOTT',ott});
                    navigate('/select/date');
                  }}
                >
                  {ott[1].title}
                </Select>
              )
})}
</Selectbox>

</Card>
  </SelectContainer>
  </Back>
  );
};
export default SelectOTT;
