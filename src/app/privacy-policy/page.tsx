import { Inter } from 'next/font/google';
import React from 'react'
import privacyPolicy from '@/data/privacyPolicy.json'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const page = () => {
  return (
    <div className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col md:max-w-[600px] lg:max-w-[1130px] mx-auto mb-16 md:mb-26 gap-16 md:gap-[104px]'>
        <div className="">
            <h1 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-center text-black`}>
            Privacy Policy
            </h1>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 w-full">
            {
                privacyPolicy.map((item) => (
                    <div className="flex flex-col gap-6 md:gap-8 w-full" key={item.id}>
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] text-start font-medium`}>
                            {item.heading}
                        </h2>
                        <p className={`${inter.className} text-[#333333] text-[16px]/[24px] md:text-[18px]/[27px] text-start font-normal`}>
                            {item.content}
                        </p>
                        {
                            item.sublist && item.sublist.map((subitem, index) => (
                                <ul className="flex flex-col ms-5" key={index}>
                                    <li className={`${inter.className} text-[#333333] text-[16px]/[24px] md:text-[18px]/[27px] text-start font-normal`}>
                                    {index + 1 + "." + " "}
                                        {
                                            subitem.heading !== "" && (
                                                <span className={`${inter.className} text-[#333333] text-[16px]/[24px] md:text-[18px]/[27px] text-start font-bold`}>{subitem.heading }</span>
                                            )
                                        }
                                    {subitem.content}
                                    </li>
                                </ul>
                            ))
                        }

                    </div>
                ))        
            } 
        </div>

    </div>
  )
}

export default page