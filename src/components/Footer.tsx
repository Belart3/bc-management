import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google';
import Link from 'next/link';

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

//type Props = {}

const Footer = () => {
  return (
    <footer className='bg-white pt-16 pb-6 md:pb-10 px-5 border-t border-[#E6E6E6] flex flex-col gap-8'>
        <div className='flex flex-col gap-y-16 md:flex-row md:justify-between max-w-[1130px] mx-auto'>
            <div className='flex flex-col gap-3 items-center md:items-start mx-11 sm:mx-0 md:w-[40%]'>
                <Link href={''}>
                    <Image src="/logo.svg" height={40} width={120} alt="" />
                </Link>
                <p className={`text-black text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] font-normal`}>
                    We are experts in cryptocurrency taxation, dedicated to addressing the specific requirements of meme coin traders. Our knowledgeable team expertly navigates the intricate landscape of crypto transactions and regulations to deliver customized tax solutions.
                </p>
                {/* <div className="flex flex-row gap-10">
                    <Image src="/images/facebook.svg" height={24} width={24} alt="" />
                    <Image src="/images/instagram.svg" height={24} width={24} alt="" />
                    <Image src="/images/tiktok.svg" height={24} width={24} alt="" />
                </div> */}
            </div>
            
            <ul className="flex flex-col gap-6 md:gap-3">
                <p className={`text-black text-center md:text-start ${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium capitalize mb-0 md:mb-3`}>
                    Quick Links
                </p>
                <Link href={'/#problems'}>
                    <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize transition-all ease-in-out duration-150 hover:text-[#F4844C]`}>
                        Your Problems
                    </li>
                </Link>
                <Link href={'/#problems'}>
                    <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize transition-all ease-in-out duration-150 hover:text-[#F4844C]`}>
                        Our Solution
                    </li>
                </Link>
                <Link href={'/#testimonials'}>
                    <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize transition-all ease-in-out duration-150 hover:text-[#F4844C]`}>
                        Testimonials
                    </li>
                </Link>
                <Link href={'/#pricing'}>
                    <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize transition-all ease-in-out duration-150 hover:text-[#F4844C]`}>
                        Pricing Plan
                    </li>
                </Link>
                <Link href={'/terms-and-conditions'}>
                    <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize transition-all ease-in-out duration-150 hover:text-[#F4844C]`}>
                        Terms & Conditions
                    </li>
                </Link>
                <Link href={'/privacy-policy'}>
                    <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize transition-all ease-in-out duration-150 hover:text-[#F4844C]`}>
                        Privacy Policy
                    </li>
                </Link>
            </ul>

            <ul className="flex flex-col gap-6 md:gap-3">
                <p className={`text-black text-center md:text-start ${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium capitalize mb-0 md:mb-3`}>
                    Contact Us
                </p>
                <Link href={'tel:+1-220-226-8720'}>
                    <li className={`text-[#666666] text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                        <span>
                            <Image src="/images/phone-grey.svg" height={24} width={24} alt='' />
                        </span>
                        +1-220-226-8720
                    </li>
                </Link>
                <Link href={'mailto:support@bcmanagement.us'}>
                    <li className={`text-[#666666] text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                        <span>
                            <Image src="/images/mail.svg" height={24} width={24} alt='' />
                        </span>
                        support@bcmanagement.us
                    </li>
                </Link>
            </ul>
        </div>
        <div className=" max-w-[1130px] mx-auto h-px w-full bg-[#E6E6E6]"></div>
        <div className="">
            <p className={`text-[#666666] text-center ${inter.className} text-[12px]/[12px] md:text-[16px/[24px]] font-normal capitalize`}>
                Copyright, 2025 BCM. All Rights Reserved
            </p>
        </div>
    </footer>
  )
}

export default Footer