import React, { useState } from 'react'
import styled from 'styled-components'
import { Minus } from '../Icons/Minus'
import { Plus } from '../Icons/Plus'

const Container = styled.div`
  border-bottom: 1px solid ${props => props.theme.carouselColor};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 3rem 0;
  padding: 1rem 0.5rem;
`
const Title = styled.h1`
  align-items: center;
  display: flex;
  font-size: ${props => props.theme.fontsm};
  justify-content: space-between;
`
const Reveal = styled.div`
  color: ${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
  display: ${props => props.clicked ? 'block' : 'none'};
  font-size: ${props => props.theme.fontsm};
  font-weight: 300;
  line-height: 1.1rem;
  margin-top: 1rem;
`

const Name = styled.div`
  align-items: center;
  display: flex;
`

const Indicator = styled.span`
  align-items: center;
  display: flex;
  font-size: ${props => props.theme.fontxl};
  justify-content: center;

  svg {
    fill: ${props => props.theme.carouselColor};
    height: auto;
    width: 1rem;
  }
`

const Accordion = ({title, reveal}) => {
  const [ collapse, setCollapse ] = useState(false)
  return (
    <Container>
      <Title onClick={() => setCollapse(!collapse )}>
        <Name>
          <span>
            {title}
          </span>
        </Name>
        {
          collapse ? <Indicator>
            <Minus />
          </Indicator> : <Indicator>
            <Plus />
          </Indicator>
        }
      </Title>
      <Reveal clicked={collapse}>
        {reveal}
      </Reveal>

    </Container>
  )
}

export default Accordion
