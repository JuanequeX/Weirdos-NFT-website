import React, {useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import gsap from 'gsap'
import ScrollTrigger   from 'gsap/ScrollTrigger'

const Section = styled.section`
  background-color: ${props => props.theme.body};
  min-height: 100vh;
  position: relative;
  width: 100vw;
`

const Title = styled.h1`
  align-items: center;
  border-bottom: 2px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  display: flex;
  font-size: ${props => props.theme.fontxxl};
  justify-content: center;
  margin: 1rem auto;
  text-transform: capitalize;
  width: fit-content;
`
const Container = styled.div`
  align-items: center;
  background-color: ${props => props.theme.body};
  display: flex;
  height: 200vh;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  width: 70%;
`
const SvgContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`

const Items = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  width: 100%;

  &>*:nth-of-type(2n +1) {
    justify-content: start;

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;
    }

    p {
      border-radius: 50px 0 50px 0;
    }
  }


  &>*:nth-of-type(2n) {
    justify-content: end;

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 50px 0 50px;
    }
  }
`
const Item = styled.li`
  display: flex;
  height: 100%;
  width: 100%;
`

const ItemContainer = styled.div`
  border: 3px solid ${props => props.theme.text};
  height: fit-content;
  padding: 1rem;
  width: 40%;
`

const Box = styled.p`
  background-color: ${props => props.theme.carouselColor};
  border: 1px solid ${props => props.theme.text};
  color: ${props => props.theme.text};
  height: fit-content;
  padding: 1rem;
  position: relative;
`
const Subtitle = styled.span`
  color: ${props => props.theme.text};
  display: block;
  font-size: ${props => props.theme.fontxl};
  text-transform: capitalize;
`

const Text = styled.span`
  color: ${props => props.theme.text};
  display: block;
  font-size: ${props => props.theme.fontsm};
  text-transform: capitalize;
  font-weight: 400;
  margin: 0.5rem;
`


const RoadMapItem = ({title, subText, addToRef}) => {
   return(
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <Subtitle>{title}</Subtitle>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>

  )
}

const Roadmap = () => {

const revealRefs = useRef([]);
revealRefs.current = [];
gsap.registerPlugin(ScrollTrigger);

const addToRefs = (el) => {
  if(el && !revealRefs.current.includes(el)) {
    revealRefs.current.push(el);
  }
}

useLayoutEffect(() => {
  let t1 = gsap.timeline();
  revealRefs.current.forEach((el, index) => {
    t1.fromTo(
      el.childNodes[0],
      {
        y: '0'
      },{
        y: '-30%',

        scrollTrigger: {
          id: `section-${index + 1}`,
          trigger: el,
          start: 'top center+=200px',
          end:'bottom center',
          scrub: true,
          // markers: true,
        }
      }
    )
  })

  return() => {

  };
},[])

  return (
    <Section>
      <Title>Roadmap</Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem addToRef={addToRefs} title="Grand Opening" subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRef={addToRefs} title="Great Benefits" subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRef={addToRefs} title="Early Access" subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRef={addToRefs} title="New Merch" subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
          <RoadMapItem addToRef={addToRefs} title="Holders Ranking" subText="Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat." />
        </Items>
      </Container>
    </Section>
  )
}

export default Roadmap
