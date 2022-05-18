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
    border-radius: 50px;
    border: 2px solid ${props => props.theme.text};
    content: ' ';
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: all 0.2 ease;
    width: 100%;
  }

  &:hover::after {
    padding: 0.3rem;
    transform: translate(-50%, -50%) scale(1);
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
