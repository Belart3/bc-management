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
      <header className="bg-[#e6e6e620] h-fit w-full rounded-lg pt-[122px] md:pt-[172px] bg-[url(/header-orange-tint.svg)] bg-bottom bg-no-repeat bg-contain  relative backdrop-blur-[150px] mb-[200px]">
        <div className="flex flex-col gap-6  mb-[50px] mx-3 md:mx-0 max-w-[1130px] lg:mx-auto">
          <div className="flex flex-col gap-4 ">
            <h1 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] font-medium text-black text-center capitalize md:px-10`}>
              Simplify Your Crypto Taxes and Maximize Your Profits.
            </h1>
            <p className={`text-[16px]/24px md:text-[24px]/[36px] mx-[18px] ${inter.className} text-center font-normal text-[#333333] max-w-[550px] mx-auto`}>
              Stop stressing over confusing DeFi and crypto transactions. Let us handle the calculations so you can focus on growing your portfolio.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button className={`capitalize text-white text-[16px]/[16px] ${inter.className} rounded-2xl bg-[#F4844C] px-6 py-4 w-full sm:w-fit`}>
              get started
            </button>
          </div>
        </div>
        <div className="flex  flex-row items-center justify-center space-x-2">
          <Image src="/orange-arrow.svg" height={12} width={30} alt="" className="md:w-[57px]  md:h-[25px]" />
          <p className={`text-[#DD4A00] text-[8px]/[8px] md:text-[16px]/[16px] font-bold ${inter.className} rotate-12`}>
            Watch Video
          </p>
        </div>
        <div className="flex bg-[#00000010] rounded-xl md:rounded-3xl border-[0.5px] border-[#666666] h-[300px] md:h-[400px] lg:h-[500px] p-2 md:p-6 relative  -bottom-[100px] lg:-bottom-[133px] w-[95%] max-w-[650px]  lg:max-w-[1130px] left-[50%] -translate-x-[50%] backdrop-blur-[15px]  md:backdrop-blur-[30px] ">
          <div className="h-full w-full bg-[#00000010] rounded-lg md:rounded-2xl border-[0.5px] border-[#666666] p-1 md:p-2 backdrop-blur-[10px] md:backdrop-blur-[20px]">
            <div className="h-full w-full bg-black rounded-sm md:rounded-lg">
              <video preload="none" className="h-full w-full rounded-sm md:rounded-lg" >
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
          <div className="flex flex-row items-center p-2 rounded-[24px] bg-[#E6E6E6] max-w-[400px] mx-auto">
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
        <div className="py-11 px-5 md:px-10 md:py-12 lg:py-19 lg:px-[115px] flex flex-col gap-12 md:gap-16 items-start md:items-center bg-[url(/images/testimonial-bg-mobile.svg)] md:bg-[url(/images/testimonial-bg-tablet.svg)] lg:bg-[url(/images/testimonial-bg-desktop.svg)] bg-cover bg-no-repeat bg-center rounded-lg md:rounded-2xl mb-[104px] md:mb-[168px]">
          <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-medium text-start md:text-center text-white`}>
            Accurate taxes. <br className="md:hidden" />
            Stress-free crypto.
          </h2>
          <div className="flex flex-col gap-4 md:gap-8 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:max-w-[1130px]">
          {
            testimonials.map((testimony) => (
              <div className="p-5 md:p-10 gap-6 md:gap-10 flex flex-col items-start justify-between rounded-lg bg-[#333333] bg-[url(/images/quote.svg)] bg-[45%_120%] md:bg-[80%_130%] lg:bg-[80%_100%] bg-no-repeat bg-[length:200px_100px]" key={testimony.id}>
                <h3 className={`text-white text-[18px]/[27px] md:text-[20px]/[30px] font-medium text-start ${inter.className}`}>
                  &quot{testimony.testimony}&quot
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
                <div className="flex flex-col gap-6 md:gap-8 lg:gap-16 lg:flex-row lg:even:flex-row-reverse items-center" key={feature.id}>
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
        <div className="flex flex-col py-12 px-4 md:py-18 md:px-19 gap-16 bg-[url(/images/form-bg-mobile.svg)] rounded-lg bg-center bg-cover bg-no-repeat mb-[104px]">
          <div className="flex flex-col gap-4 w-full">
            <h2 className={`text-[44px]/[44px] ${inter.className} font-medium text-white text-start md:text-center md:text-[73px]/[73px]`}>
              Struggling with Blockchain Management?
            </h2>
            <p className={`${inter.className} text-[16px]/[24px] font-normal text-[#CCCCCC] text-start md:text-center md:text-[24px]/[36px]`}>
              Fill this form and get your free solution now!
            </p>
          </div>
          <div className="h-100 p-2 bg-[#333333] rounded-lg"></div>
        </div>
        <SectionWrapper>
          <SectionTitle title="Pricing Plans That Work For Everyone." />
        </SectionWrapper>
      </main>
    </div>
  );
}
