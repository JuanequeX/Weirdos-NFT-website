import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect'
import Button from './Button'

const Title = styled.h1`
  align-self: flex-start;
  color: ${props => props.theme.text};
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;

  span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
  }

  .text-1 {
    color: blue;
  }

  .text-2 {
    color: orange;
  }

  .text-3 {
    color: red;
  }
`;

const Subtitle  = styled.h3`
  align-self: flex-start ;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
  width: 80%;
`
const ButtonContainer = styled.div`
  align-self: flex-start;
  width: 80%;
`

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discover A New Era Of Cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter.typeString(`<span class="text-1">NFTs!</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-2">Collectible Items.</span>`)
            .pauseFor(2000)
            .deleteAll()
            .typeString(`<span class="text-3">Ape Killers!</span>`)
            .pauseFor(2000)
            .deleteAll()
            .start();
          }}
        />
      </Title>
      <Subtitle>Bored Of Apes? Try Something New.</Subtitle>
      <ButtonContainer>
        <Button text="Explore" link="#about" />
      </ButtonContainer>
    </>
  )
}

export default TypeWriterText
