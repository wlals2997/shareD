import React from 'react';
import { Link } from 'react-router-dom';
import shareD_logo from '../../data/logo.png';
import styled from 'styled-components';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--color-white);
  padding: 5px;
  align-items: center;
  max-width: 1200px;
  margin: auto;
`;

const Logo = styled.img`
cursor: pointer;
width: 35px;
height: 40px;

}
`;
const Menu = styled.div`
  display: flex;
  gap:15px;
  font-weight: bold,
  textDecoration: 'none'
`;
const NavLink = styled(Link)`
  color: #808080;
  text-decoration: none;
  cursor: pointer;
  
`;
const activestyle = {
  color:'black'
}

const Header = () => {
  

  return (
    <Navbar>
      <NavLink to='/'>
        <Logo src={shareD_logo} alt='Logo'></Logo>
      </NavLink>
      <Menu>
        <NavLink exact to='/select' activeStyle={activestyle}>
          파티매칭
        </NavLink>
        <NavLink to='/guide' activeStyle={activestyle}>
          사용안내
        </NavLink>
        <NavLink to='/mypage' activeStyle={activestyle}>
          마이페이지
        </NavLink>
      </Menu>
      <div></div>
    </Navbar>
  );
};
export default Header;
