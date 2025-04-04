import { Inter } from "next/font/google";
import Image from 'next/image'
import React from 'react'
import PriceMenu from './PriceMenu'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const PricingSection = () => {
  return (
        <div className="flex flex-col gap-4 sm:gap-x-[1%] sm:flex-row sm:flex-wrap w-full max-w-[700px] lg:max-w-[1300px] lg:gap-0 lg:justify-between mx-auto">
            <div className="rounded-[12px] bg-[#F4844C4D] p-[6px] w-full  sm:w-[55%] sm:min-w-[400px] lg:w-[32%] lg:min-w-[100px] mx-auto lg:mx-0 order-1 lg:order-2">
              <div className="p-5 bg-[#F4844C] flex flex-col gap-6 rounded-lg">
                <div className="gap-6 flex flex-col border-b pb-6 border-[#CCC]">
                  <p className={`${inter.className} text-white text-start text-[18px]/[18px] font-medium capitalize`}>
                    Advanced
                  </p>
                  <div className="flex flex-col gap-2">
                    <p className={`${inter.className} text-white text-start text-[32px]/[32px] font-medium`}>
                      $439.99/mo
                    </p>
                    <p className={`${inter.className} text-white text-start text-[14px]/[21px] font-normal capitalize`}>
                      Billed Yearly
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <a href="https://pay.bcmanagement.us/advanced-plan" className="w-full">
                      <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize font-medium text-[16px]/[16px] text-[#F4844C] ${inter.className} cursor-pointer w-full`}>
                        <Image src="./images/pay-with-card.svg" height={24} width={24} alt="" />
                        pay with card
                      </button>
                    </a>
                    <p className={`${inter.className} text-[#E6E6E6] text-[16px]/[16px] font-medium text-center capitalize`}>Or</p>
                    <PriceMenu />
                  </div>
                </div>
                <ul className="flex flex-col gap-3 items-start w-full">
                  <li className={`text-white ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                    Up to 25 wallets
                  </li>
                  <li className={`text-white ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                    Up to 10,000 transactions per fiscal year
                  </li>
                  <li className={`text-white ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                    Quarterly summary report
                  </li>
                  <li className={`text-white ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                    Book keeping verification
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-5 bg-white flex flex-col gap-6 rounded-lg w-full sm:w-[49%] lg:w-[32%] border border-[#CCCCCC] order-2 lg:order-1">
              <div className="gap-6 flex flex-col border-b pb-6 border-[#CCC]">
                <p className={`${inter.className} text-black text-start text-[18px]/[18px] font-medium capitalize`}>
                  Basic
                </p>
                <div className="flex flex-col gap-2">
                  <p className={`${inter.className} text-black text-start text-[32px]/[32px] font-medium`}>
                    $19.99/mo
                  </p>
                  <p className={`${inter.className} text-[#666666] text-start text-[14px]/[21px] font-normal capitalize`}>
                    Billed Yearly
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="https://pay.bcmanagement.us/basic-plan" className="w-full">
                    <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize text-[16px]/[16px] text-[#F4844C] border border-[#F4844C] ${inter.className} font-medium cursor-pointer w-full`}>
                      <Image src="./images/pay-with-card.svg" height={24} width={24} alt="" />
                      pay with card
                    </button>
                  </a>
                  <p className={`${inter.className} text-[#666666] text-[16px]/[16px] font-medium text-center capitalize`}>Or</p>
                  <PriceMenu />
                </div>
              </div>
              <ul className="flex flex-col gap-3 items-start w-full">
                <li className={`text-black ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                  Up to 2 wallets
                </li>
                <li className={`text-black ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                  Up to 350 transactions per fiscal year
                </li>
                <li className={`text-black ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                  yearly summary report
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white flex flex-col gap-6 rounded-lg w-full sm:w-[49%] lg:w-[32%] border border-[#CCCCCC] order-3 lg:order-3">
              <div className="gap-6 flex flex-col border-b pb-6 border-[#CCC]">
                <p className={`${inter.className} text-black text-start text-[18px]/[18px] font-medium capitalize`}>
                  Standard
                </p>
                <div className="flex flex-col gap-2">
                  <p className={`${inter.className} text-black text-start text-[32px]/[32px] font-medium`}>
                    $74.99/mo
                  </p>
                  <p className={`${inter.className} text-[#666666] text-start text-[14px]/[21px] font-normal capitalize`}>
                    Billed Yearly
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a href="https://pay.bcmanagement.us/standard-plan" className="w-full">
                    <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize text-[16px]/[16px] text-[#F4844C] border border-[#F4844C] ${inter.className} font-medium cursor-pointer w-full`}>
                      <Image src="./images/pay-with-card.svg" height={24} width={24} alt="" />
                      pay with card
                    </button>
                  </a>
                  <p className={`${inter.className} text-[#666666] text-[16px]/[16px] font-medium text-center capitalize`}>Or</p>
                  <PriceMenu />
                </div>
              </div>
              <ul className="flex flex-col gap-3 items-start w-full">
                <li className={`text-black ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                  Up to 5 wallets
                </li>
                <li className={`text-black ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                  Up to 1000 transactions per fiscal year
                </li>
                <li className={`text-black ${inter.className} text-[16px]/[24px] font-normal text-start capitalize list-disc ms-5`}>
                  yearly summary report
                </li>
              </ul>
            </div>
        </div>
  )
}

export default PricingSection


