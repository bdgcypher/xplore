import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import { Btn } from './Btn'

const Navbar = () => {
  return (
    <Nav id="top">
      <NavLogo to="/">Xplore</NavLogo>
      <Bars />
      <NavItems>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/destinations">Destinations</NavItem>
        <NavItem to="/careers">Careers</NavItem>
      </NavItems>
      <NavBtn to="/destinations" primary={true} round={true} big={false}>Book a trip</NavBtn>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 10;
  position: relative;
`;

const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    color: #F06449;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 100%);
    font-size: 2rem;
    cursor: pointer;
  }

  &:hover {
    color: #F06449;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    color: #F06449;
  }
`;

const NavBtn = styled(Btn)`
  display: flex;
  align-items: center;
  max-height: 40px;
  margin-top: 10px;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
