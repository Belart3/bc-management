import { Inter } from 'next/font/google';
import React from 'react'

type Props = {
    title: string,
    paragraph?: string,
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const SectionTitle = (props: Props) => {
  return (
    <div className='flex flex-col gap-y-4 md:gap-y-6 w-full max-w-[1000px] mx-auto'>
        <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-center text-black`}>
            {props.title}
        </h2>
        {
            props.paragraph && 
            <p className={`text-[#333333] ${inter.className} font-normal text-[14px]/[21px] md:text-[18px]/[27px] text-center px-36`}>
                {props.paragraph}
            </p>
        }
    </div>
  )
}

export default SectionTitle