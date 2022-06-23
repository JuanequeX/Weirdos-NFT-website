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
  align-items: center;
  display: flex;
  justify-content: space-between;
  list-style: none;
`

const MenuItem = styled.li`
  color: ${props => props.theme.text};
  cursor: pointer;
  margin: 0 1rem;

  &::after {
    content: ' ';
    background-color: ${props => props.theme.text};
    display: block;
    height: 2px;
    transition: width 0.3s ease;
    width: 0%;
  }

  &:hover::after {
    width: 100%;
  }

`

const Navigation = () => {
  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu>
          <MenuItem onClick={() => scrollTo('home')} >Home</MenuItem>
          <MenuItem onClick={() => scrollTo('about')} >About</MenuItem>
          <MenuItem onClick={() => scrollTo('roadmap')}>Roadmap</MenuItem>
          <MenuItem onClick={() => scrollTo('showcase')}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={() => scrollTo('faq')}>Faq</MenuItem>
        </Menu>
        <Button text="Connect Wallet" link="https://google.com" />
      </NavBar>
    </Section>
  )
}

export default Navigation
