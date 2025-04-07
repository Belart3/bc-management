"use client"
import Image from 'next/image'
import React from 'react'
import sliderData from '@/data/ImageSlider.json'

//type Props = {}

const ImageSlider = () => {
  return (
    <div className="overflow-hidden flex flex-row mb-[104px] md:mb-[168px] gap-[20px] md:gap-[120px] 2xl:gap-[200px] group cursor-pointer">
      <ul className='flex flex-row justify-between items-center gap-x-4 select-none min-w-full animate-infinite-scroll shrink-0 group-hover:[animation-play-state:paused]'>
        {
          sliderData.map((item, index) => (
            <li className="" key={index}>
              <Image src={`${item.image}`} height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10 select-none' />
            </li>
          ))
        }
      </ul>

      <ul aria-hidden="true" className='flex flex-row justify-between gap-x-4 select-none min-w-full animate-infinite-scroll group-hover:[animation-play-state:paused] shrink-0'>
       {
          sliderData.map((item, index) => (
            <li className="" key={index}>
              <Image src={`${item.image}`} height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10 select-none' />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ImageSlider