import { Inter } from 'next/font/google';
import terms from '@/data/T&C.json'
import React from 'react'
import { Metadata } from 'next';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    title: 'Terms & Conditions | BlockChain Management',
    description: "Review BCM's Terms and Conditions for using our blockchain and DeFi management services. Understand the guidelines, responsibilities, and legal agreements that govern your use of our platform and services.",
    keywords: "BCM Terms and Conditions, Blockchain services terms, DeFi management terms, Legal agreements for blockchain services, Blockchain platform guidelines, DeFi platform terms, Terms of service for BCM, Blockchain and DeFi service agreements, Legal terms for using BCM, Terms and conditions for DeFi management",
  };

const termsConditions = () => {
  return (
    <div className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col md:max-w-[600px] lg:max-w-[1130px] mx-auto mb-16 md:mb-26 gap-16 md:gap-[104px]'>
        <div className="">
            <h1 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-center text-black`}>
                Terms & Conditions.
            </h1>
        </div>
        <div className="flex flex-col gap-6 md:gap-8 w-full">
            {
                terms.map((item,index) => (
                    <div className="flex flex-col gap-6 md:gap-8 w-full" key={index}>
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] text-start font-medium`}>
                            {item.heading}
                        </h2>
                        <p className={`${inter.className} text-[#333333] text-[16px]/[24px] md:text-[18px]/[27px] text-start font-normal`}>
                            {item.content}
                        </p>
                    </div>
                ))        
            } 
        </div>
    </div>
  )
}

export default termsConditions