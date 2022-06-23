import React, { useRef } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import img1 from '../../assets/Nfts/bighead-1.svg'
import img2 from '../../assets/Nfts/bighead-2.svg'
import img3 from '../../assets/Nfts/bighead-3.svg'
import img4 from '../../assets/Nfts/bighead-4.svg'
import img5 from '../../assets/Nfts/bighead-5.svg'
import img6 from '../../assets/Nfts/bighead-6.svg'
import img7 from '../../assets/Nfts/bighead-7.svg'
import img8 from '../../assets/Nfts/bighead-8.svg'
import img9 from '../../assets/Nfts/bighead-9.svg'
import img10 from '../../assets/Nfts/bighead-10.svg'

import ETH from '../../assets/icons8-ethereum-48.png'

const Section = styled.section`
  align-items: center;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  width: 100vw;

  &>*:first-child{
    animation-duration: 20s;
  }

   &>*:last-child{
    animation-duration: 20s;
  }
`
const move = keyframes`
  0%{transform: translateX(100%)}
  100%{transform: translateX(-100%)}
`


const Row = styled.div`
  animation: ${move} linear infinite ${props => props.direction};
  box-sizing: content-box;
  display: flex;
  margin: 2rem 0;
  white-space: nowrap;
`

const ImgContainer = styled.div`
  background-color: ${props => props.theme.body};
  border-radius: 20px;
  cursor: pointer;
  margin: 0 1rem;
  width: 15rem;

  img {
    height: auto;
    width: 100%;
  }
`

const Details = styled.div`
  background-color: ${props => props.theme.text};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: 2px solid ${props =>`rgba(${props.theme.bodyRgba}, 0.5)`};
  color: ${props => props.theme.body};
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;

  span {
    color: ${props => `rgba${props.theme.bodyRgba}, 0.5`};
    font-size: ${props => props.theme.fontsm};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    color: ${props => props.theme.body};
    font-size: ${props => props.theme.fontmd};
    font-weight: 600;
  }

`

const Price = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  img{
    height: auto;
    width: 1rem;
  }
`

const NftItem = ({img, number=0, price=0, passRef}) => {

  let play = (e) => {
    passRef.current.style.animationPlayState = 'running';
  }

  let pause = (e) => {
    passRef.current.style.animationPlayState = 'paused';
  }

  return(
    <ImgContainer onMouseOver={e => pause(e)}  onMouseOut={e => play(e)}>
      <img src={img} alt="The Weirdos"></img>
      <Details>
          <div>
            <span>Weirdos</span> <br />
            <h1>#{number}</h1>
          </div>
          <div>
            <span>Price</span>
            <Price>
              <img src={ETH} alt="Ethereum" />
              <h1>{Number(price).toFixed(1)}</h1>
            </Price>
          </div>
      </Details>
    </ImgContainer>
  )
}

const Showcase = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  return (
    <Section id='showcase'>
      <Row direction='none' ref={Row1Ref}>
        <NftItem img={img1} number={653} passRef={Row1Ref} price={1} />
        <NftItem img={img2} number={123} passRef={Row1Ref} price={6} />
        <NftItem img={img3} number={546} passRef={Row1Ref} price={1.7} />
        <NftItem img={img4} number={456} passRef={Row1Ref} price={8.1} />
        <NftItem img={img5} number={946} passRef={Row1Ref} price={2.2} />
      </Row>
      <Row direction='reverse' ref={Row2Ref}>
        <NftItem img={img6} number={234} passRef={Row2Ref} price={3.1} />
        <NftItem img={img7} number={344} passRef={Row2Ref} price={1.2} />
        <NftItem img={img8} number={524} passRef={Row2Ref} price={4.5} />
        <NftItem img={img9} number={345} passRef={Row2Ref} price={6.7} />
        <NftItem img={img10}number={128} passRef={Row2Ref} price={9}  />
      </Row>
    </Section>
  )
}

export default Showcase
