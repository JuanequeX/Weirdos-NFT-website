import React from 'react'
import styled from 'styled-components'
import Carousel from '../Carousel'
import Button from '../Button'
import { ThemeProvider } from 'styled-components'
import {dark} from '../../styles/Themes'

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
const Title = styled.h2`
  align-self: flex-start;
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  margin: 0 auto;
`

const SubText = styled.p`
  align-self: flex-start;
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.fontlg};
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`
const SubTextLight = styled.p`
  align-self: flex-start;
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  font-size: ${props => props.theme.fontmd};
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`

const ButtonContainer = styled.div`
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
`

const About = () => {
  return (
    <Section>
      <Container>
        <Box><Carousel /></Box>
        <Box>
          <Title>
            Welcome To The Weirdos Club.
          </Title>
          <SubText>
            The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS
          </SubText>
          <SubTextLight>
            With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark} >
              <Button text="Join our Discord" link="#about" />
            </ThemeProvider >
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  )
}

export default About
