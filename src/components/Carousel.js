import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-cards"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { EffectCards, Navigation, Autoplay, Pagination } from "swiper";

import img1 from '../assets/Nfts/bighead-1.svg'
import img2 from '../assets/Nfts/bighead-2.svg'
import img3 from '../assets/Nfts/bighead-3.svg'
import img4 from '../assets/Nfts/bighead-4.svg'
import img5 from '../assets/Nfts/bighead-5.svg'
import img6 from '../assets/Nfts/bighead-6.svg'
import img7 from '../assets/Nfts/bighead-7.svg'
import img8 from '../assets/Nfts/bighead-8.svg'
import img9 from '../assets/Nfts/bighead-9.svg'
import img10 from '../assets/Nfts/bighead-10.svg'

import Arrow from '../assets/Arrow.svg'


const Container = styled.div`
  height: 70vh;
  width: 25vw;

  .mySwiper {
    height: 100%;
    width: 100%;
  }

  .swiper-slide {
    align-items: center;
    background-color: ${props => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    justify-content: center;
  }

  .swiper-button-next{
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    color: ${props => props.theme.text};
    right: 0;
    top: 60%;
    width: 4rem;

    &:after {
      display: none;
    }
  }

  .swiper-button-prev {
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    color: ${props => props.theme.text};
    left: 0;
    transform: rotate(180deg);
    top: 60%;
    width: 4rem;

    &:after {
      display: none;
    }
  }
`
const Carousel = () => {
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination = {{
          type: 'fraction',
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Navigation, Pagination, Autoplay]}
        navigation={true}
        effect={"cards"}
        grabCursor={true}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img2} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img3} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img4} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img5} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img6} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img7} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img8} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img9} alt="The Weirdos" /> </SwiperSlide>
        <SwiperSlide><img src={img10} alt="The Weirdos" /> </SwiperSlide>
      </Swiper>
    </Container>
  )
}

export default Carousel
