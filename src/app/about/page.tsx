import { Inter } from 'next/font/google';
import React from 'react'
import team from '@/data/team.json'
import Image from 'next/image';
import TeamSwiper from '@/components/TeamSwiper';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const about = () => {
  return (
    <div className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-auto mb-16 md:mb-26 gap-16 md:gap-[104px]'>
        <div className="flex flex-col gap-26">
            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex flex-col md:justify-center gap-6 md:gap-10 w-full">
                    <h1 className={`${inter.className} capitalize text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-black`}>Who We Are​</h1>
                    <p className={`${inter.className} text-[#333333] text-[16px]/[24px] md:text-[18px]/[27px] font-normal`}>
                        At BlockChain Management, we specialize in cryptocurrency taxation, focusing on the unique needs of meme coin traders. Our expert team navigates the complexities of crypto transactions and regulations to provide tailored tax solutions. Trust us to help you manage your crypto tax obligations with confidence.
                    </p>
                </div>
                <div className="bg-cover bg-no-repeat bg-top bg-[url('/images/about-BCM.png')] h-70 md:h-100 w-full"></div>
            </div>

            <div className="flex flex-col gap-10 md:gap-16">
                <h2 className={`${inter.className} capitalize text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-black`}>
                Meet Our Team 
                </h2>
                <div className="flex sm:hidden lg:flex flex-col sm:flex-row gap-4 items-center justify-center md:items-center md:justify-between w-full">
                    {
                        team.map((item,index) => (
                            <div className="p-3 rounded-2xl flex items-end justify-center h-85 md:w-[32%] w-full max-w-[350px] shrink-0 md:max-w-none bg-top bg-cover bg-no-repeat" style={{backgroundImage: `url(${item.image})`}} key={index}>
                                <div className="flex flex-col gap-3 items-center justify-center bg-[#000000]/50 w-full rounded-2xl backdrop-blur-[10px] p-2">
                                    <h3 className={`${inter.className} capitalize text-[22px]/[22px] md:text-[30px]/[30px] font-medium text-white text-center`}>{item.name}</h3>
                                    <p className={`${inter.className} uppercase text-[18px]/[18px] md:text-[20px]/[20px] font-medium text-[#CCCCCC] text-center`}>{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="hidden sm:flex lg:hidden">
                    <TeamSwiper />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-start lg:gap-[130px] gap-10 sm:gap-16">
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className={`${inter.className} capitalize text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-black`}>Our Priorities.</h2>
                    <p className={`${inter.className} text-[#333333] text-[16px]/[24px] md:text-[18px]/[27px] font-normal`}>
                        Quality Services & 24/7 Support
                    </p>
                </div>
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={'/images/comprehensive-tax-calculations.svg'} alt={''} className='size-6' height={24} width={24} />
                        <h2 className={`${inter.className} capitalize text-[22px]/[22px] font-medium text-black`}>Comprehensive Tax Calculation</h2>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={'/images/customized-tax-strategies.svg'} alt={''} className='size-6' height={24} width={24} />
                        <h2 className={`${inter.className} capitalize text-[22px]/[22px] font-medium text-black`}>Customized Tax Strategies</h2>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={'/images/efficient-reporting.svg'} alt={''} className='size-6' height={24} width={24} />
                        <h2 className={`${inter.className} capitalize text-[22px]/[22px] font-medium text-black`}>Efficient Reporting</h2>
                    </div>
                    <div className="flex flex-row gap-3 items-center">
                        <Image src={'/images/responsive-support.svg'} alt={''} className='size-6' height={24} width={24} />
                        <h2 className={`${inter.className} capitalize text-[22px]/[22px] font-medium text-black`}>Responsive Support</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about