import React from 'react';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';

function Step01(){
const navigate= useNavigate();
    // const [nextPage, setNextPage] = useState();
    // const nextStep= (e) =>{

    //     setNextPage(e.target.value);
        
        
    // }

    return ( 
    <div class="top">
    
        <div>
    
            <div> 원하시는 OTT서비스를 선택하세요.</div>
           
        </div>
        <div>
        <button onClick={()=>{navigate({pathname:'./pages/select/step02'})}} value="netflix" type="button" class="btn btn-default">넷플릭스</button>
        <button  value="wave" type="button" class="btn btn-default">웨이브</button>
           
          
        </div>
    
</div>
    );
}

export default Step01;