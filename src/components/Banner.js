import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import img1 from '../assets/Nfts/bighead-1.svg'
import img2 from '../assets/Nfts/bighead-2.svg'
import img3 from '../assets/Nfts/bighead-3.svg'
import img4 from '../assets/Nfts/bighead-4.svg'
import img5 from '../assets/Nfts/bighead-5.svg'
import img6 from '../assets/Nfts/bighead-6.svg'


const Section = styled.section`
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  height: 25rem;
  position: relative;
  width: 100vw;
  border-top: 2px solid ${props => props.theme.text};
  background-color: ${props => `rgba(${props.theme.textRgba}, 0.9)`};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const ImgContainer = styled.div`
  margin: 0 1rem;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.2;


  img {
    height: auto;
    width: 15rem;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.body};
  font-size: ${props => props.theme.fontxxxl};
  padding: 1rem 2rem;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${props => props.theme.text};
  width: 35%;
  z-index: 10;
`
const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35%;
`
const JoinNow = styled.button`
  background-color: ${props => props.theme.body};
  border-radius: 50px;
  border: none;
  color: ${props => props.theme.text};
  cursor: pointer;
  display: inline-block;
  font-size: ${props => props.theme.fontlg};
  font-weight: 600;
  outline: none;
  padding: 1.5rem 3rem;
  position: relative;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(0.9);
  }

  &::after {
    border-radius: 50px;
    border: 2px solid ${props => props.theme.body};
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
const Banner = () => {
  return (
    <Section>
      <ImgContainer>
        <img src={img1} alt='The Weirdos' />
        <img src={img2} alt='The Weirdos' />
        <img src={img3} alt='The Weirdos' />
        <img src={img4} alt='The Weirdos' />
        <img src={img5} alt='The Weirdos' />
        <img src={img6} alt='The Weirdos' />
      </ImgContainer>
      <Title>Join the <br />weirdos club </Title>
      <BtnContainer>
        <JoinNow>
          Join Now
        </JoinNow>
       </BtnContainer>
    </Section>
  )
}

export default Banner
