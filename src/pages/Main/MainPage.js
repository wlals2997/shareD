import React from 'react';
import styled from 'styled-components';
import main_Image from '../../data/Saly-24.jpg';
import { useNavigate } from 'react-router-dom';

const Main = styled.div`
  display: flex;

  @media only screen and (max-width: 500px) {
    margin-top: 130px;
    height: 400px;
    width: 530px;
  }
`;
const MainImage = styled.img`
  width: 800px;
  margin: auto;
`;
const Startbtn = styled.button`
  background-color: #553ced;
  width: 335px;
  height: 70px;
  border-radius: 8px;
  color: white;
`;
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <MainImage src={main_Image} alt='mainImage'></MainImage>
      <Startbtn
        onClick={() => {
          navigate('/select');
        }}
      >
        시작하기
      </Startbtn>
    </Main>
  );
};

export default MainPage;
