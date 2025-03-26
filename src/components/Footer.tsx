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
                <Image src="./logo.svg" height={40} width={120} alt="" />
                <p className={`text-black text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] font-normal`}>
                    At JMG HandyMan Services, we take pride in delivering reliable, efficient, and high-quality handyman services to homeowners and businesses alike. No project is too big or too small.
                </p>
                <div className="flex flex-row gap-10">
                    <Image src="./images/facebook.svg" height={24} width={24} alt="" />
                    <Image src="./images/instagram.svg" height={24} width={24} alt="" />
                    <Image src="./images/tiktok.svg" height={24} width={24} alt="" />
                </div>
            </div>
            
            <ul className="flex flex-col gap-6 md:gap-3">
                <p className={`text-black text-center md:text-start ${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium capitalize mb-0 md:mb-3`}>
                    Quick Links
                </p>
                <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Your Problems
                </li>
                <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Our Solution
                </li>
                <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Testimonials
                </li>
                <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Pricing Plan
                </li>
                <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Terms & Conditions
                </li>
                <li className={`text-[#666666] text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Privacy Policy
                </li>
            </ul>

            <ul className="flex flex-col gap-6 md:gap-3">
                <p className={`text-black text-center md:text-start ${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium capitalize mb-0 md:mb-3`}>
                    Contact Us
                </p>
                <Link href={'tel:+1-220-226-8720'}>
                    <li className={`text-[#666666] text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                        <span>
                            <Image src="./images/phone-grey.svg" height={24} width={24} alt='' />
                        </span>
                        +1-220-226-8720
                    </li>
                </Link>
                <Link href={'mailto:support@bcmanagement.us'}>
                    <li className={`text-[#666666] text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                        <span>
                            <Image src="./images/mail.svg" height={24} width={24} alt='' />
                        </span>
                        support@bcmanagement.us
                    </li>
                </Link>
                <li className={`text-[#666666] text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                    <span>
                        <Image src="./images/location.svg" height={24} width={24} alt='' />
                    </span>
                    Address
                </li>
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