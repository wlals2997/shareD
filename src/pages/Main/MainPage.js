import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button/Button.style';
import main_Image from '../../data/Saly-24.jpg';
import { useNavigate } from 'react-router-dom';

const Main=styled.div`
display:flex;
justify-content: center;
align-items: center;
`
const MainImage = styled.img`

  width: 800px;
  margin: auto;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
    height: auto;
    margin-top: 100px;
  }
`;
const Startbtn = styled.button`
  background-color: #553ced;
  width: 335px;
  height: 70px;
  border-radius: 8px;
  color: white;
`;
const Btn = styled.div`
  @media only screen and (max-width: 768px) {
    position: absolute;
    top: 70%;
    left: 15%;
  }
`;
const MainPage = () => {
  const navigate = useNavigate();
  return (
    <Main>
      <div>
        <MainImage src={main_Image} alt='mainImage'></MainImage>
      </div>
      <Btn>
        <Button
          onClick={() => {
            navigate('/select');
          }}
        >
          시작하기
        </Button>
      </Btn>
    </Main>
  );
};

export default MainPage;
