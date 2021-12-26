import React from 'react';
import { Link } from 'react-router-dom';

import shareD_logo from '../../data/logo.JPG';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-white);
  padding: 16px;
  align-items: center;
  max-width: 1200px;
  margin:auto;
  
`;
const Icon = styled.div`
  width: 24px;
  height: 24px;

  cursor: pointer;
`;
const Logo = styled.img`
width: 80px;
height: 80px;
}
`;
const Menu = styled.div`
  display: flex;
  text-align:center;
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
        <Icon>
          <Logo src={shareD_logo} alt='Logo'></Logo>
        </Icon>
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
    </Navbar>
  );
}
export default Header;
