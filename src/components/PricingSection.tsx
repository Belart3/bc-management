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

          <div className="flex flex-col lg:flex-row rounded-lg md:rounded-2xl border border-[#333333]  bg-black mb-[64px] gap-10 order-4 lg:order-4 mt-4 justify-start lg:justify-center lg:items-center w-full  sm:w-[70%] sm:min-w-[400px] lg:w-full mx-auto lg:mx-0 relative z-10 overflow-hidden
          bg-[url('/images/grid.svg')] p-5 md:p-8 h-175 lg:h-auto bg-no-repeat bg-cover bg-center">
            <div className="flex flex-col justify-start lg:justify-center lg:items-center gap-6 w-full lg:w-3/5">
              <h3 className={`${inter.className} text-[22px]/[22px] lg:text-[29px]/[29px] text-white text-start lg:text-center font-medium 2xl:w-2/3`}>
                Customized Plans
              </h3>
              <p className={`${inter.className} text-[#CCCCCC] text-[16px]/[24px] lg:text-[18px]/[27px] font-normal text-start lg:text-center`}>
                Big trader? Tons of wallets? Complex reporting?
                Our Customized Plan is designed for businesses and power users who need ultimate flexibility. Get tailored solutions, unlimited support, and features built specifically for you.
              </p>
              <i className={`${inter.className} text-white text-[18px]/[18px] lg:text-[20px]/[20px] font-normal !italic text-start lg:text-center`}>
                Let’s Build Your Perfect Plan
              </i>
              <a href="https://app.bcmanagement.us/widget/groups/bcmcalendar" target="_blank" className="w-fit">
                <button className={`px-6 py-4 bg-[#F4844C] rounded-2xl flex flex-row gap-2 items-center text-white text-[16px]/[16px] capitalize font-medium ${inter.className} max-w-[400px] cursor-pointer relative group overflow-hidden z-20 hover:outline-2 hover:outline-offset-1 hover:outline-[#E6E6E6]/40 w-full`}>

                <span className='absolute h-full w-0 bg-black top-0 left-0 rounded-2xl group-hover:w-full transition-all duration-300 -z-[2]'></span>
                <Image src="./images/phone.svg" height={24} width={24} alt="" />
                book your free consultation

                </button>
              </a>
            </div>
{/* absolutely placed background images of animated coins */}
            <div className="absolute h-full w-full bottom-0 right-0 lg:left-0 lg:top-0 lg:w-100 bg-[url('/images/defi-crypto-customized-plans.svg'),url('/images/customized-plans-background.svg')] bg-[length:250px_250px,100%_500px] lg:bg-[length:250px_250px,450px_450px] bg-[position:50%_95%,bottom] lg:bg-[position:left,-60px_-120px] bg-no-repeat -z-[2] pulse "></div>

            <div className="absolute h-full w-100 top-0 right-0 lg:bg-[url('/images/defi-crypto-customized-plans-left.svg'),url('/images/customized-plans-background.svg')] lg:bg-[length:250px_250px,450px_450px] lg:bg-[position:right,20px_-120px] lg:bg-no-repeat -z-[2] hidden lg:flex pulse"></div>
          </div>
        </div>
  )
}

export default PricingSection


