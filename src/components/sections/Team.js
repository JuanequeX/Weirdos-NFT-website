import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/Nfts/bighead-1.svg'
import img2 from '../../assets/Nfts/bighead-2.svg'
import img3 from '../../assets/Nfts/bighead-3.svg'
import img4 from '../../assets/Nfts/bighead-4.svg'
import img5 from '../../assets/Nfts/bighead-5.svg'
import img6 from '../../assets/Nfts/bighead-6.svg'
import img7 from '../../assets/Nfts/bighead-7.svg'
import img8 from '../../assets/Nfts/bighead-8.svg'
import img9 from '../../assets/Nfts/bighead-9.svg'
import ConfettiComponent from '../Confetti'

const Section = styled.section`
  background-color: ${props => props.theme.body};
  min-height: 100vh;
  position: relative;
  width: 100vw;
`

const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.body};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 2rem auto;
  width: 75%;
`

const Item = styled.div`
  border-radius: 20px;
  backdrop-filter: blur(4px);
  border: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.body};
  margin: 2rem 1rem;
  padding: 1rem 0;
  position: relative;
  width: calc(20rem - 4vw);
  z-index: 5;

  &:hover{
    img{
      transform: translateY(-2rem) scale(1.2);
    }
  }
`
const ImgContainer = styled.div`
  background-color: ${props => props.theme.carouselColor};
  border: 1px solid ${props => props.theme.text};
  border-radius: 20px;
  cursor: pointer;
  margin: 0 auto;
  width: 14rem;

  img {
    height: auto;
    transition:  0.3s ease;
    width: 100%;
  }
`
const Name = styled.h2`
  font-size: ${props => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${props => props.theme.text};
  margin-top: 1rem;
`

const Position = styled.h2`
  font-size: ${props => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba},0.9)`};
  margin-top: 1rem;
  font-weight: 400;
`
const Title = styled.h1`
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  display: flex;
  font-size: ${props => props.theme.fontxxl};
  justify-content: flex-start;
  margin: 1rem auto;
  text-transform: capitalize;
  width: fit-content;
`

const MemberComponent = ({img, name="", position=""}) => {
  return (
    <Item>
      <ImgContainer>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}

const Team = () => {
  return (
    <Section id="team">
      <ConfettiComponent />
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1} name="SKYBLAZE" position="Founder"/>
        <MemberComponent img={img2} name="MEGNUM" position="Co-Funder"/>
        <MemberComponent img={img3} name="MONKEY KING" position="Director"/>
        <MemberComponent img={img4} name="BLACK PANTHER" position="Manager"/>
        <MemberComponent img={img5} name="DEATHSTROKE" position="Artist"/>
        <MemberComponent img={img6} name="LAZY KONG" position="Social Media Manager"/>
        <MemberComponent img={img7} name="CYBER PUNK" position="Blockchain Specialist"/>
        <MemberComponent img={img8} name="MONK" position="Web3 Developer"/>
        <MemberComponent img={img9} name="BANANA" position="Grqaphic Designer"/>
      </Container>
    </Section>
  )
}

export default Team
