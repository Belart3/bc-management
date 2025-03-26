import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const contact = () => {
  return (
    <div className='mt-[132px] lg:mt-[224px] flex flex-col lg:flex-row lg:justify-between lg:items-start max-w-[1130px] mx-auto lg:mb-26 gap-10'>
      <div className="flex flex-col gap-10 lg:w-[45%]">
        <h1 className={`${inter.className} capitalize text-[73px]/[73px] font-medium text-black`}>
          Contact BCM
        </h1>
        <h4 className={`${inter.className} font-medium text-black text-[20px]/[20px]`}>
          To  open a support ticket, fill the form.
        </h4>
        <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
          We also welcome your inquiries, feedback, or collaboration opportunities. Whether you have questions about our services or want to connect, please reach out. Your satisfaction is our priority!
        </p>
        <div className="flex flex-col gap-3 items-start">
          <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
            Text us or call us
          </p>
          <p className={`text-black text-start ${inter.className} text-[18px]/[27px] font-normal capitalize flex items-center justify-start gap-2`}>
            <span>
              <Image src="./images/phone-black.svg" height={24} width={24} alt='' />
            </span>
            +1-220-226-8720
          </p>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
            Send us an email
          </p>
          <p className={`text-black text-start ${inter.className} text-[18px]/[27px] font-normal capitalize flex items-center justify-start gap-2`}>
            <span>
              <Image src="./images/mail-black.svg" height={24} width={24} alt='' />
            </span>
            support@bcmanagement.us
          </p>
        </div>
      </div>
      <div className="bg-[#333333] h-75 lg:h-150 w-full lg:w-[45%] rounded-lg p-2.5"></div>
    </div>
  )
}

export default contact