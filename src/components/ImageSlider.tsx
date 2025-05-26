"use client"
import Image from 'next/image'
import React from 'react'
import sliderData from '@/data/ImageSlider.json'
import Marquee from "react-fast-marquee";

const ImageSlider = () => {
  return (
    <Marquee speed={100} loop={0} pauseOnHover={true} gradient={true} gradientWidth={80} gradientColor="white" className="cursor-pointer mb-[104px] md:mb-[168px] max-w-[1130px] mx-auto">
      {
        sliderData.map((item, index) => (
          <Image src={`${item.image}`} height={40} width={40} alt='' className='size-[50px] md:size-[70px] min-w-10 min-h-10 select-none mx-5 lg:mx-16' key={index}/>
        ))
      }
    </Marquee>
  )
}

export default ImageSlider