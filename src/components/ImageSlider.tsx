"use client"
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode } from 'swiper/modules'
import 'swiper/css';


//type Props = {}

const ImageSlider = () => {
  return (
    <Swiper
      spaceBetween={32}
      slidesPerView={5}
      loop={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        
      }}
      speed={3000}
      freeMode={{enabled:true, momentum: true}}
      grabCursor={true}
      modules={[Autoplay, FreeMode]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
      className='flex flex-row max-w-[1000px] mb-[104px] md:mb-[168px]'
    >
      <SwiperSlide>
        <Image src="./images/xrp.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/btc.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/eth.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/shib.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/sol.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="./images/bnb.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
      </SwiperSlide>
    </Swiper>
  )
}

export default ImageSlider