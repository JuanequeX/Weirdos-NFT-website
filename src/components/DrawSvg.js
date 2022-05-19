import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger   from 'gsap/ScrollTrigger'
import Vector from '../Icons/Vector'
import styled, {keyframes} from 'styled-components'

const VectorContainer = styled.div`
  height: 100%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  top: 0.5rem;
  transform: translateX(-50%);
  width: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
`

const Bounce = keyframes`
  from { transform: translateX(-50%) scale(0.5); }
  to { transform: translateX(-50%) scale(1); }
`

const Ball = styled.div`
  animation: ${Bounce} 0.5s linear infinite alternate;
  background-color: ${props => props.theme.text};
  border-radius: 50%;
  height: 1.5rem;
  left: 50%;
  position: absolute;
  top: 0;
  transform: translateX(-50%);
  width: 1.5rem;
`

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    let svg = document.getElementsByClassName('svg-path')[0];
    const length = svg.getTotalLength();

    // Start positioning of svg drawing
    svg.style.strokeDasharray = length;

    // Hide svg before scrolling start
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline ({
      scrollTrigger:{
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;

          // also reverse the drawing when scroll goes up
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: self => {
          if(self.isActive){
            ballRef.current.style.display ='none'
          }else{
            ballRef.current.style.display ='inline-block'
          }
        }
      }
    })

    return () => {
      if(t1) t1.kill();
    }
  }, [])

  return (
    <>
      <Ball ref={ballRef}/>
      <VectorContainer ref={ref}>
        <Vector />
      </VectorContainer>
    </>
  )
}

export default DrawSvg
