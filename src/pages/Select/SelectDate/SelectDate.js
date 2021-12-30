import React from 'react';

import SelectContainer from './SelectDay.style';
import styled from 'styled-components';
import { SelectContext } from '..';
import { Navigate } from 'react-router-dom';
import { ottService } from '../../../data/data';
import { useContext } from 'react';
const Back = styled.div`
  background: #f8f8f8;
`;
const AddTime = styled.div`
  background-color: red;
  max-width: 640px;
  padding: 0 20px;
  width: 100%;
  min-width: 200px;

  padding: 8px 10px;
  font-size: 14px;

  box-sizing: border-box;
  border-radius: 4px;
  margin: 20px auto;
`;
const Card = styled.div`
  background: white;
  max-width: 640px;
  padding: 0 20px;
  width: 100%;
  min-width: 200px;
  padding: 8px 10px;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 8px;
`;
const SelectboxTitle = styled.h2`
  display: block;
  text-align: left;
  font-size: 18px;
  line-height: 50px;
  margin: 0;
  font-weight: bold;
  margin: 10px 0;
`;
const Selectbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 9px;
`;
const Select = styled.div`
  display: flex;
  flex: 1 0;

  flex-direction: column;
  height: 75px;
  align-items: center;
  padding-top: 5px;
  background-color: #f8f8f8;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;
const TimeCheckTitle = styled.h2`
  display: block;
  text-align: left;
  font-size: 18px;
  line-height: 50px;
  margin: 0;
  font-weight: bold;
  margin: 10px 0;
`;
const Time= styled.p`
color:gray;
`
const SelectDate = () => {
  const { selectOtt } = selectData;
  const { selectData, dispatch } = useContext(SelectContext);
  const isSelete = false;

  if (!isSelete) {
    return <Navigate to='/Select' replace={true} />;
  }
  
  return (
    <Back>
      <SelectContainer>
        <AddTime>&#9200 지금 결제 시 추가시간</AddTime>
        <Card>
        {ottService[selectOtt].title}

          <TimeCheckTitle> 이용시간과 금액을 확인해주세요.</TimeCheckTitle>
        <Time> 종료시점</Time>
        <Time> </Time>
        <Time> 이용시간</Time>
        
        </Card>
      </SelectContainer>
    </Back>
  );
};
export default SelectDate;
