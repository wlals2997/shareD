import React from 'react';
import { Container, Row, Button, Card,Accordion } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ottService } from '../../../data/data';
import SelectContainer from './SelectOTT.style';
import styles from '../SelectOTT/SelectOTT.module.css';
import styled from 'styled-components'



const SelectOTT = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mycomponent} >
    <Container>
      <SelectContainer >
        <Row>
        <Card >
  <Card.Body>
            <Card.Title>보고싶은 서비스를 선택하세요</Card.Title>
            {Object.entries(ottService).map(function (ott, i) {
              console.log(ott);
              //    let object=Object.entries(ottService);
              //    console.log(object);
              return (
                <Button
                  key={i}
                  onClick={() => {
                    navigate('/select/date');
                  }}
                >
                  {ott[1].title}
                </Button>
              );
            })}
          </Card.Body>
          </Card>
        </Row>
        
        <Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>결제 후 환불이 가능한가요?</Accordion.Header>
    <Accordion.Body>
      환불하지마
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>결제 후 어떻게 사용할 수 있나요?</Accordion.Header>
    <Accordion.Body>
      저희 쉐어디 마이페이지에서 아이디, 비밀번호를 확인하신 후 구독하신 OTT서비스를 통해 
      로그인하시면 바로 사용가능합니다.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
      </SelectContainer>
    </Container>
    </div>
  );
};
export default SelectOTT;
