import React from 'react';

function Step01(){
    const handleClick= (e) =>{
        console.log(e.target);
        alert("버튼 클릭");
    };

    return ( 
    <div class="top">
    
        <div>
    
            <div> 원하시는 OTT서비스를 선택하세요.</div>
           
        </div>
        <div>
        <button onClick={handleClick} value="넷플릭스" type="button" class="btn btn-default">넷플릭스</button>
        <button type="button" class="btn btn-default">웨이브</button>
           
          
        </div>
    
</div>
    );
}

export default Step01;