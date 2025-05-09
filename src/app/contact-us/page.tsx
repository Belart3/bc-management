import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Contact Us | BlockChain Management",
  description: "Contact BCM for expert blockchain and DeFi support. We're here to help with crypto tax, portfolio management, and personalized solutions.",
  keywords: "Contact BCM, Blockchain support, DeFi support services, Crypto tax help, Contact DeFi experts, Portfolio management assistance, Crypto financial services, Blockchain consulting, Get in touch with BCM, DeFi management solutions, Blockchain inquiries, Crypto portfolio support, Blockchain management contact, DeFi consulting services, Crypto tax assistance, Blockchain financial solutions, BCM contact information",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const contact = () => {
  return (
    <div className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:flex-row lg:justify-between lg:items-start md:max-w-[600px] lg:max-w-[1130px] mx-auto mb-16 lg:mb-26 gap-10'>
      <div className="flex flex-col gap-[30px] md:gap-16 lg:w-[45%]">
        <h1 className={`${inter.className} capitalize text-[44px]/[44px] md:text-[73px]/[73px] font-medium text-black`}>
          Contact BCM
        </h1>
        <h4 className={`${inter.className} font-medium text-black text-[18px] md:text-[20px]/[20px]`}>
          To  open a support ticket, fill the form.
        </h4>
        <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
          We also welcome your inquiries, feedback, or collaboration opportunities. Whether you have questions about our services or want to connect, please reach out. Your satisfaction is our priority!
        </p>
        <div className="flex flex-col gap-3 items-start">
          <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
            Text us or call us
          </p>
          <Link href={'tel:+1-220-226-8720'}>
            <p className={`text-[#F4844C] text-start ${inter.className} text-[18px]/[27px] font-normal capitalize flex items-center justify-start gap-2`}>
              <span>
                <Image src="/images/phone-orange.svg" height={24} width={24} alt='' />
              </span>
              +1-220-226-8720
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-3 items-start">
          <p className={`${inter.className} font-normal text-[#333333] text-[18px]/[27px]`}>
            Send us an email
          </p>
          <Link href={'mailto:support@bcmanagement.us'}>
            <p className={`text-[#F4844C] text-start ${inter.className} text-[18px]/[27px] font-normal capitalize flex items-center justify-start gap-2`}>
              <span>
                <Image src="/images/mail-orange.svg" height={24} width={24} alt='' />
              </span>
              support@bcmanagement.us
            </p>
          </Link>
        </div>
      </div>
      <div className="bg-transparent h-[750px] w-full lg:w-[45%] rounded-lg p-2.5">
        <iframe src="https://forms.monday.com/forms/embed/834060fa2ca942daf5a4ff4c40327798?r=use1"      
        className='w-full  h-full' 
        style={{ border: 0, boxShadow: '5px 5px 56px 0px rgba(0,0,0,0.25)',}}></iframe>
      </div>
    </div>
  )
}

export default contact