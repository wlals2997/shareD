import React from 'react';
import { Link } from 'react-router-dom';

import shareD_logo from '../../data/logo.JPG';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-white);
  padding: 5px;
  align-items: center;
  max-width: 1200px;
  margin:auto;
  
`;

const Logo = styled.img`
cursor: pointer;
width: 80px;
height: 80px;
}
`;
const Menu = styled.div`
  display: flex;
  gap:15px;
  font-weight: bold;
`;
const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  
`;

function Header() {
  return (
    <Navbar>
      <Link to='/'>
        
          <Logo src={shareD_logo} alt='Logo'></Logo>
        
      </Link>
      <Menu >
        <Link to='/Select' style={{ textDecoration: 'none' }}>
          <MenuList>파티매칭</MenuList>
        </Link>
        <Link to='/Guide' style={{ textDecoration: 'none' }}>
          <MenuList>사용안내</MenuList>
        </Link>
        <Link to='/MyPage' style={{ textDecoration: 'none' }}>
          <MenuList>마이페이지</MenuList>
        </Link>
        
      </Menu>
      <div></div>
    </Navbar>
  );
}
export default Header;
