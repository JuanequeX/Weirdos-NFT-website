import React from 'react'
import styled from 'styled-components'
import TypeWriterText from '../TypeWriterText'
import CoverVideo from '../CoverVideo'
import RoundTextBlack from '../../assets/Rounded-Text-Black.png'
import { keyframes } from 'styled-components'

const Section = styled.section`
  background-color: ${props => props.theme.body};
  min-height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  position: relative;
  width: 100vw;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-height: 80vh;
  width: 75%;
`

const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 50%;
`

const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }
`

const Round = styled.div`
  border-radius: 50%;
  border: 1px solid ${props => props.theme.text};
  bottom: 2rem;
  height: 6rem;
  position: absolute;
  right: 90%;
  width: 6rem;

  img {
    animation: ${rotate} 6s linear infinite reverse;
    height: auto;
    width: 100%;
  }
`

const Circle = styled.span`
  align-items: center;
  background-color: ${props => props.theme.text};
  border-radius: 50%;
  color: ${props => props.theme.body};
  display: flex;
  font-size: ${props => props.theme.fontxl};
  height: 3rem;
  justify-content: center;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 3rem;
`
function Home() {
  return (
    <Section>
      <Container>
        <Box>
          <TypeWriterText />
        </Box>
        <Box>
          <CoverVideo />
        </Box>
        <Round>
            <Circle>
              &#x2193;
            </Circle>
           <img src={RoundTextBlack} alt="NFT" />
        </Round>
      </Container>
    </Section>
  )
}

export default Home
