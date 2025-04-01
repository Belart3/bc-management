"use client"
import Image from 'next/image'
import React from 'react'


//type Props = {}

const ImageSlider = () => {
  return (
    <div className="overflow-hidden flex flex-row mb-[104px] md:mb-[168px] gap-[20px] md:gap-[120px] 2xl:gap-[200px] group">
      <ul className='flex flex-row justify-between items-center gap-x-4 select-none min-w-full animate-infinite-scroll shrink-0 group-hover:[animation-play-state:paused]'>
        <li className="cursor-pointer">
          <Image src="./images/xrp.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10 select-none' />
        </li>
        <li className="cursor-pointer">
          <Image src="./images/btc.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li className="cursor-pointer">
          <Image src="./images/eth.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li className="cursor-pointer">
          <Image src="./images/shib.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li className="cursor-pointer">
          <Image src="./images/sol.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li className="cursor-pointer">
          <Image src="./images/bnb.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li className="cursor-pointer">
          <Image src="./images/polkadot.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
        </li>
      </ul>

      <ul aria-hidden="true" className='flex flex-row justify-between gap-x-4 select-none min-w-full animate-infinite-scroll group-hover:[animation-play-state:paused] shrink-0'>
        <li>
          <Image src="./images/xrp.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10 select-none' />
        </li>
        <li>
          <Image src="./images/btc.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li>
          <Image src="./images/eth.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li>
          <Image src="./images/shib.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li>
          <Image src="./images/sol.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li>
          <Image src="./images/bnb.svg" height={40} width={40} alt='' className=' lg:size-[70px] min-w-10 min-h-10' />
        </li>
        <li>
          <Image src="./images/polkadot.svg" height={40} width={40} alt='' className=' lg:size-[70px]' />
        </li>
      </ul>
    </div>
  )
}

export default ImageSlider