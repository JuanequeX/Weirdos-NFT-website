import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: ${props => props.theme.text};
  border-radius: 50px;
  border: none;
  color: ${props => props.theme.body};
  cursor: pointer;
  display: inline-block;
  font-size: ${props => props.theme.fontsm};
  outline: none;
  padding: 0.9rem 2.3rem;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    border: 2px solid ${props => props.theme.text};
    border-radius: 50px;
    content: ' ';
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2 ease;
    width: 100%;
    height: 100%;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
  }
`



const Button = ({text, link}) => {
  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer" >
        {text}
      </a>
    </Btn>
  )
}

export default Button
