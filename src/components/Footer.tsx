import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

//type Props = {}

const Footer = () => {
  return (
    <footer className='bg-black pt-16 pb-6 px-5'>
        <div className='flex flex-col gap-y-16 md:flex-row md:justify-between max-w-[1360px] mx-auto'>
            <div className='flex flex-col gap-4 items-center md:items-start mx-11 sm:mx-0 md:w-[40%]'>
                <Image src="./images/footer-logo.svg" height={40} width={120} alt="" />
                <p className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] font-normal`}>
                    At JMG HandyMan Services, we take pride in delivering reliable, efficient, and high-quality handyman services to homeowners and businesses alike. No project is too big or too small.
                </p>
                <div className="flex flex-row gap-14">
                    <Image src="./images/facebook.svg" height={24} width={24} alt="" />
                    <Image src="./images/instagram.svg" height={24} width={24} alt="" />
                    <Image src="./images/tiktok.svg" height={24} width={24} alt="" />
                </div>
            </div>
            
            <ul className="flex flex-col gap-6">
                <p className={`text-[#666666] text-center md:text-start ${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium capitalize`}>
                    Quick Links
                </p>
                <li className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Your Problems
                </li>
                <li className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Our Solution
                </li>
                <li className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Testimonials
                </li>
                <li className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Pricing Plan
                </li>
                <li className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Terms & Conditions
                </li>
                <li className={`text-white text-center md:text-start ${inter.className} text-[14px]/[21px] md:text-[16px/[24px]] font-normal capitalize`}>
                    Privacy Policy
                </li>
            </ul>

            <ul className="flex flex-col gap-6">
                <p className={`text-[#666666] text-center md:text-start ${inter.className} text-[18px]/[18px] md:text-[20px]/[20px] font-medium capitalize`}>
                    Contact Us
                </p>
                <li className={`text-white text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                    <span>
                        <Image src="./images/phone.svg" height={24} width={24} alt='' />
                    </span>
                    319-471-0593
                </li>
                <li className={`text-white text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                    <span>
                        <Image src="./images/mail.svg" height={24} width={24} alt='' />
                    </span>
                    Email
                </li>
                <li className={`text-white text-center ${inter.className} text-[14px]/[21px] font-normal capitalize flex items-center md:justify-start justify-center gap-2`}>
                    <span>
                        <Image src="./images/location.svg" height={24} width={24} alt='' />
                    </span>
                    Address
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer