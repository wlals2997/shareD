import React from 'react';
import { Link } from 'react-router-dom';

function Nav (){
    return(
        <div>
            <Link to="/">
                <button>쉐어디란?</button>
            </Link>
            <Link to="/step01">
                <button>구독하기</button>
            </Link>
        </div>
    )
}
export default Nav;