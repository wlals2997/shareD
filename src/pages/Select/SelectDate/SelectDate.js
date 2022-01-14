import React from 'react';

import SelectContainer from './SelectDay.style';
import Button from '../../../components/Button/Button.style';
import styled from 'styled-components';
import arrowdown from '../../../data/arrowdown.png'
//import { SelectContext } from '../index';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { SelectOTT } from '../SelectOTT';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';

const Back = styled.div`
  background: #f8f8f8;
`;
const AddTime = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  max-width: 640px;
  padding: 0 20px;
  width: 100%;
  min-width: 200px;
  padding: 15px 30px;
  font-size: 16px;
  box-sizing: border-box;
  border-radius: 4px;
  margin: 20px auto;
  height:56px;
`;

const A=styled.div`
display:flex;

`
const B=styled.div`
margin-right:5px;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  
  background: white;
  max-width: 640px;
  padding: 0 20px;
  width: 100%;
  min-width: 200px;
  
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 8px;
  padding:0 30px;
  
`;
const OttCard=styled.div`
background: white;
max-width: 640px;
padding: 20px 30px;
width: 100%;
height:70px;
min-width: 200px;

font-size: 17px;
box-sizing: border-box;
border-radius: 8px;
margin-bottom:5px;
`

const TimeCheckTitle = styled.h2`
  display: block;
  text-align: left;
  font-size: 18px;
  line-height: 50px;
  margin: 0;
  font-weight: bold;
  margin: 10px 0;
`;
const Clock = styled.div`
  width: 32px;
  height: 28px;
  border:1px solid #C4C4C4;
  border-radius:4px;
  font-weight: bold;
  font-size:20px;
  margin-right:4px;
  
`;

const TimeCard = styled.div`
display:flex;
  justify-content: space-between;
  
  margin-bottom: 20px;
  padding:0 40px;
`;
const Time = styled.div`

  color: gray;
`;
const PriceBox = styled.div`
display:flex;
justify-content:space-between;
padding:0 40px;
  margin-bottom: 40px;
  font-size:18px;
  font-weight:700;
`;

const D= styled.div`
display:flex;
justify-content: space-between;
`
const F=styled.img`
margin-top:12px;
width:12px;
height:6px;
`

const SelectDate = () => {
 
  const navigate = useNavigate();
  let selectott=useParams();
  //const { selectOtt } = selectData;
  //const { selectData, dispatch } = useContext(SelectContext);
  //const isSelete = false;

 // if (!isSelete) {
  // return <Navigate to='/select' replace={true} />;
  //}

  return (
    <Back>
      <SelectContainer>
        <div>
          <AddTime>
            <div>🕐 지금 결제 시 추가시간</div>
            <A>
            <Clock>04</Clock>
            <B>시간</B>
            <Clock>02</Clock>
            <B>분</B>
            <Clock>56</Clock>
            <B>초</B>
            </A>
          </AddTime>
        </div>
        <OttCard>
<D>
          <div>{selectott.selectott}</div>
          <F src={arrowdown} alt="down"></F>
          </D>
        </OttCard>
        <Card>
          <TimeCheckTitle> 이용시간과 금액을 확인해주세요.</TimeCheckTitle>

          <TimeCard>
            <Time>종료시점</Time>
            <Time>내일 00시</Time>
          </TimeCard>
          <TimeCard>
            <Time>이용시간</Time>
            <Time>28시간</Time>
          </TimeCard>
          
          <PriceBox>
            <div>금액</div>
            <div>0,000원</div>
          </PriceBox>

          <Button onClick={()=>{navigate('select/pay')}} >결제</Button>
        </Card>
      </SelectContainer>
    </Back>
  );
};
export default SelectDate;
