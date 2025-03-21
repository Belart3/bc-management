"use client"
import ImageSlider from "@/components/ImageSlider";
import SectionTitle from "@/components/SectionTitle";
import SectionWrapper from "@/components/SectionWrapper";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import problemSolutions from "@/data/problemsSolutions.json"
import testimonials from "@/data/testimonials.json"
import features from "@/data/features.json"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export default function Home() {
  const categories = [
    {
      id: 1,
      title: 'your problem'
    },
    {
      id: 2,
      title: 'our solution'
    }
  ]
  const [filter, setfilter] = useState('your problem');
  return (
    <div>
      <header className="bg-[#e6e6e620] h-fit w-full rounded-lg pt-[122px] md:pt-[172px] 
      bg-[url(/header-orange-tint-mobile.svg),_url(/header-grid.svg)] 
      md:bg-[url(/header-orange-tint-tablet.svg),_url(/header-grid.svg)] 
      lg:bg-[url(/header-orange-tint-desktop.svg),_url(/header-grid.svg)] 

      bg-[position:50%_100px,center] bg-[length:cover,cover] 
      md:bg-[position:50%_500px,center] bg-no-repeat md:bg-[length:cover,cover] 
      lg:bg-[position:50%_-90%,center] lg:bg-[length:auto,cover] 
      backdrop-blur-[150px] mb-[200px] max-w-[1360px] mx-auto">
        <div className="flex flex-col gap-6 mb-5 md:mb-0 lg:mb-[50px] mx-3 md:mx-0 max-w-[1130px] lg:mx-auto">
          <div className="flex flex-col gap-4 ">
            <h1 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] font-medium text-black text-center capitalize md:px-10`}>
              Simplify Your Crypto Taxes and Maximize Your Profits.
            </h1>
            <p className={`text-[16px]/24px md:text-[24px]/[36px] mx-[18px] ${inter.className} text-center font-normal text-[#333333] max-w-[550px] mx-auto`}>
              Stop stressing over confusing DeFi and crypto transactions. Let us handle the calculations so you can focus on growing your portfolio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className={`capitalize text-white text-[16px]/[16px] ${inter.className} rounded-2xl bg-[#F4844C] px-6 py-4 w-full sm:w-fit max-w-[300px]`}>
              get started
            </button>
          </div>
        </div>
        <div className="flex  flex-row items-center justify-center space-x-2 w-fit relative left-[50%] md:left-[75%] lg:left-[65%] translate-x-[-50%] ">
          <Image src="/orange-arrow.svg" height={12} width={30} alt="" className="md:w-[57px]  md:h-[25px]" />
          <p className={`text-[#DD4A00] text-[8px]/[8px] md:text-[16px]/[16px] font-bold ${inter.className} rotate-12`}>
            Watch Video
          </p>
        </div>
        <div className="flex bg-[#00000010] rounded-xl md:rounded-3xl border-[0.5px] border-[#666666] h-[300px] md:h-[400px] lg:h-[500px] p-2 md:p-6 relative -bottom-[12px]  md:-bottom-[43px] lg:-bottom-[118px] w-[95%] max-w-[650px]  lg:max-w-[1130px] left-[50%] -translate-x-[50%] backdrop-blur-[15px]  md:backdrop-blur-[30px] ">
          <div className="h-full w-full bg-[#00000010] rounded-lg md:rounded-2xl border-[0.5px] border-[#666666] p-1 md:p-2 backdrop-blur-[10px] md:backdrop-blur-[20px]">
            <div className="h-full w-full bg-black rounded-sm md:rounded-lg">
              <video controls preload="none" className="h-full w-full rounded-sm md:rounded-lg" >
                <source src="/videos/Defi crypto tax services and Defi blockchain tax management.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </header>
      <main>
        <ImageSlider />
        <SectionWrapper>
          <SectionTitle 
            title="Seamless DeFi Tax Calculation." 
            paragraph="Effortlessly track and calculate DeFi taxes with accurate cost basis, wallet consolidation, and audit-ready reports."
          />
          <div className="flex flex-row items-center p-2 rounded-[24px] bg-[#E6E6E666] max-w-[400px] mx-auto">
            {categories.map((category) => (
              <button className={`rounded-2xl py-4 px-6 flex items-center justify-centertext-black ${inter.className} text-[16px]/[16px] font-medium capitalize cursor-pointer ${ filter == category.title ? ' bg-white border border-[#E6E6E6] shadow-sm' : 'bg-transparent shadow-none border-none' }`} onClick={
                () => {
                  setfilter(category.title)
                }
              } key={category.id}>
                {category.title}
              </button>
            ))}
          </div>
          <div className="flex flex-col gap-4 max-w-sm mx-auto sm:grid sm:grid-rows-2 sm:grid-cols-2 sm:max-w-3xl sm:mx-auto lg:flex lg:flex-row lg:gap-4 lg:max-w-[1130px]">
            {
              problemSolutions.map((issue) => (
                <div className="flex flex-col items-center sm:items-start justify-center bg-[#E6E6E666] rounded-lg p-5 sm:p-10 gap-6 w-full" key={issue.id} >
                  <h3 className={`${inter.className} text-[18px]/[18px] sm:text-[20px]/[20px] font-medium text-center sm:text-start capitalize text-black`}>
                    {issue.title}
                  </h3>
                  <p className={`${inter.className} text-[#333333] font-normal text-[14px]/[21px] sm:text-[16px]/[24px] text-center sm:text-start`}>
                    {issue.paragpraph}
                  </p>
                </div>
              ))
            }
          </div>
        </SectionWrapper>
        <div className="py-11 px-5 md:px-10 md:py-12 lg:py-19 lg:px-[115px] flex flex-col gap-12 md:gap-16 items-start md:items-center bg-[url(/images/testimonial-bg-mobile.svg)] md:bg-[url(/images/testimonial-bg-tablet.svg)] lg:bg-[url(/images/testimonial-bg-desktop.svg)] bg-cover bg-no-repeat bg-center rounded-lg md:rounded-2xl mb-[104px] md:mb-[168px] max-w-[1360px] mx-auto">
          <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-start md:text-center text-white`}>
            Accurate taxes. <br className="md:hidden" />
            Stress-free crypto.
          </h2>
          <div className="flex flex-col gap-4 md:gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:max-w-[1130px]">
          {
            testimonials.map((testimony) => (
              <div className="p-5 md:p-10 gap-6 md:gap-10 flex flex-col items-start justify-between rounded-lg bg-[#333333] bg-[url(/images/quote.svg)] bg-[45%_120%] md:bg-[80%_130%] lg:bg-[80%_100%] bg-no-repeat bg-[length:200px_100px]" key={testimony.id}>
                <h3 className={`text-white text-[18px]/[27px] md:text-[20px]/[30px] font-medium text-start ${inter.className}`}>
                  &quot {testimony.testimony} &quot
                </h3>
                <div className="flex flex-row gap-2 items-center">
                  <Image src={testimony.image} height={44} width={44} alt={testimony.name + "review image"} className="rounded-full" />
                  <p className={`${inter.className} text-[18px]/[27px] font-normal text-white`}>
                    {testimony.name}
                  </p>
                </div>
              </div>
            ))
          }
          </div>
        </div>
        <SectionWrapper>
          <SectionTitle title="What Makes Us Different?" />
          <div className="flex flex-col gap-10 lg:gap-16 max-w-[1130px] mx-auto">
            {
              features.map((feature) => (
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-16 md:flex-row md:even:flex-row-reverse items-center" key={feature.id}>
                  <div className="flex items-center justify-center py-8 px-2 md:px-[38px] md:py-[38px] lg:py-15 lg:px-[30px] rounded-lg md:rounded-2xl bg-[#E6E6E666] h-60 md:h-100 w-full lg:w-150">
                    <Image src={feature.image} height={150} width={300} alt="" className="md:h-75 md:w-150" />
                  </div>
                  <div className="gap-4 flex flex-col">
                    <h3 className={`${inter.className} text-[22px]/[22px] md:text-[29px]/[29px] font-medium text-start sm:text-start capitalize text-black`}>
                      {feature.title}
                    </h3>
                    <p className={`${inter.className} text-[#333333] font-normal text-[14px]/[21px] md:text-[16px]/[24px] text-start`}>
                    {feature.paragraph}
                  </p>
                  </div>
                </div>
              ))
            }
          </div>
        </SectionWrapper>
        <div className="flex flex-col lg:flex-row lg:items-center py-12 px-4 md:py-18 md:px-19 gap-16 bg-[url(/images/form-bg-mobile.svg)] md:bg-[url(/images/form-bg-tablet.svg)] lg:bg-[url(/images/form-bg-desktop.svg)] rounded-lg md:rounded-2xl bg-center bg-cover bg-no-repeat mb-[104px] max-w-[1360px] mx-auto">
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <h2 className={`text-[44px]/[44px] ${inter.className} font-medium text-white text-start md:text-center md:text-[73px]/[73px] lg:text-start`}>
              Struggling with Blockchain Management?
            </h2>
            <p className={`${inter.className} text-[16px]/[24px] font-normal text-[#CCCCCC] text-start md:text-center md:text-[24px]/[36px] lg:text-start`}>
              Fill this form and get your free solution now!
            </p>
          </div>
          <div className="h-100 p-2 bg-[#333333] rounded-lg lg:w-1/2"></div>
        </div>
        <SectionWrapper>
          <SectionTitle title="Pricing Plans That Work For Everyone." />
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
                    <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize font-medium text-[16px]/[16px] text-[#F4844C] ${inter.className} `}>
                      <Image src="./images/pay-with-card.svg" height={24} width={24} alt="" />
                      pay with card
                    </button>
                    <p className={`${inter.className} text-[#E6E6E6] text-[16px]/[16px] font-medium text-center capitalize`}>Or</p>
                    <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize font-medium text-[16px]/[16px] text-[#F4844C] ${inter.className} `}>
                      <Image src="./images/pay-with-crypto.svg" height={24} width={24} alt="" />
                      pay with crypto
                    </button>
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
                  <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize text-[16px]/[16px] text-[#F4844C] border border-[#F4844C] ${inter.className} font-medium`}>
                    <Image src="./images/pay-with-card.svg" height={24} width={24} alt="" />
                    pay with card
                  </button>
                  <p className={`${inter.className} text-[#666666] text-[16px]/[16px] font-medium text-center capitalize`}>Or</p>
                  <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize text-[16px]/[16px] border border-[#F4844C] text-[#F4844C] font-medium ${inter.className} `}>
                    <Image src="./images/pay-with-crypto.svg" height={24} width={24} alt="" />
                    pay with crypto
                  </button>
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
                  <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize text-[16px]/[16px] text-[#F4844C] border border-[#F4844C] ${inter.className} font-medium`}>
                    <Image src="./images/pay-with-card.svg" height={24} width={24} alt="" />
                    pay with card
                  </button>
                  <p className={`${inter.className} text-[#666666] text-[16px]/[16px] font-medium text-center capitalize`}>Or</p>
                  <button className={`py-4 px-6 bg-white rounded-2xl gap-2 flex flex-row items-center justify-center capitalize text-[16px]/[16px] border border-[#F4844C] text-[#F4844C] font-medium ${inter.className} `}>
                    <Image src="./images/pay-with-crypto.svg" height={24} width={24} alt="" />
                    pay with crypto
                  </button>
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
        </SectionWrapper>
        <div className="flex flex-col lg:flex-row rounded-lg md:rounded-2xl border border-[#333333]  bg-black mb-[64px] gap-10 max-w-[1360px] mx-auto 
        bg-[url('/images/consultation.svg'),_url('/orange-tint.svg'),_url('/images/grid.svg')] 
        h-150 sm:h-200 md:h-250 lg:h-150 
        bg-no-repeat bg-[length:contain,auto,cover] bg-[position:bottom,top_center,center] 
        md:bg-no-repeat md:bg-[length:contain,auto,cover] md:bg-[position:bottom_center,center_-20%,center] 
        lg:bg-[length:auto,auto,cover] lg:bg-[position:bottom_right,-70%_center,center]">
          <div className="flex flex-col gap-6 px-5 md:px-18 lg:w-[60%] mt-20 lg:my-21">
            <h2 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] text-white text-start font-medium`}>
              Still Got Questions? <br />
              Book a Free 15 minutes Consultation.
            </h2>
            <button className={`px-6 py-4 bg-[#F4844C] rounded-2xl flex flex-row gap-2 items-center text-white text-[16px]/[16px] capitalize font-medium ${inter.className} w-full sm:w-fit max-w-[300px]`}>
              <Image src="./images/phone.svg" height={24} width={24} alt="" />
              book your free consultation
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
