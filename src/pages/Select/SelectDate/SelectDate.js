import React from "react";
import {Container,Row,Card} from 'react-bootstrap'
import SelectContainer from './SelectOTT.style';
const SelectDate=()=>{
    return(
        <Container>
        <SelectContainer >
          <Row>
          <Card >
    <Card.Body>
              <Card.Title>이용시간과 금액을 확인해주세요</Card.Title>
           
            </Card.Body>
            </Card>
          </Row>
          </SelectContainer>
         </Container>
    )
}
export default SelectDate;