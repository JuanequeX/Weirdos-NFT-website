import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const Section = styled.section`
  background-color: ${props => props.theme.body};
  width: 100vw;
`

const NavBar = styled.nav`
  align-items: center;
  display: flex;
  height: ${props => props.theme.navHeight};
  justify-content: space-between;
  margin: 0 auto;
  width: 85%;
`
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${props => props.theme.text};
  cursor: pointer;

  &::after {
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background-color: ${props => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

`

const Navigation = () => {
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Roadmap</MenuItem>
          <MenuItem>Showcase</MenuItem>
          <MenuItem>Team</MenuItem>
          <MenuItem>Faq</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com" />
      </NavBar>
    </Section>
  )
}

export default Navigation
