import React from "react";
import { Container,Row,Button } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import  {ottService} from '../data'
const SelectOTT=()=>{
    const navigate = useNavigate();

return(
<div>
<Container>
  <Row>
   {
   Object.entries(ottService).map(function(ott,i){
       console.log(ott)
    //    let object=Object.entries(ottService);
    //    console.log(object);
          return (
        <Button key={i} onClick={()=>{navigate('/select/date')}}>{ott[1].title}</Button>
       )
   })

   } 
   
  </Row>
</Container>
</div>
)
}
export default SelectOTT;