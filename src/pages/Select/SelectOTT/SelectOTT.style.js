import styled from 'styled-components';

import * as BootStrap from 'react-bootstrap';

export const Container= styled(BootStrap.Container)
`height: 100vh;
max-width:640px;
width:100%;
padding:50px 30px;

`;
export const Back= styled.div`
background:#F8F8F8;
`
export const Card=styled.div`
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
export const SelectboxTitle=styled.h2`
display:block;
text-align:left;
font-size: 18px;
line-height: 50px;
margin: 0;
font-weight: bold;
margin: 10px 0;
`
export const Selectbox=styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
justify-content: space-between;
gap:9px

`
export const Select=styled.div`
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
export const SelectImg=styled.img`
width: 44px;
height: 44px;

`





 